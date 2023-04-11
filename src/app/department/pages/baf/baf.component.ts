import { Component } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Iattendance,
  Ifaculties,
  Igroups,
  Ischedule,
  Istudents,
  Isubject,
  roles,
  Iclassroom,
  Icourses,
} from '../../../shared/interfaces/admin.interface';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-baf',
  templateUrl: './baf.component.html',
  styleUrls: ['./baf.component.scss'],
})
export class BafComponent {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
  activeIndex: number = 0;
  stuSwitch: boolean = true;
  displayStu: boolean = false;
  displaySch: boolean = false;
  displayGrp: boolean = false;
  uploadDialog: boolean = false;
  AttDisplay: boolean = false;
  displayEdit: boolean = false;
  displayMaximizable: boolean = false;
  loading: boolean = true;
  showDialogStu() {
    this.displayStu = true;
  }
  showDialogGrp() {
    this.displayGrp = true;
  }

  showDialogSch() {
    this.displaySch = true;
  }
  markAttDisplay() {
    this.AttDisplay = true;
  }
  importDialog() {
    this.uploadDialog = true;
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  stuValue!: FormGroup;
  stuUploadValue!: FormGroup;
  grpValue!: FormGroup;
  attValue!: FormGroup;
  schValue!: FormGroup;

  stuRole = roles;
  attData: Iattendance[] = [];
  facData: Ifaculties[] = [];
  schData: Ischedule[] = [];
  stuData: Istudents[] = [];
  subData: Isubject[] = [];
  grpData: Igroups[] = [];
  classData: Iclassroom[] = [];
  courseData: Icourses[] = [];

  //filterations
  filteredCR: Istudents[] = [];
  filteredBAF: Istudents[] = [];
  filteredBAFFac: Istudents[] = [];
  filteredBAFSub: Istudents[] = [];
  filteredBAFAttStu: Istudents[] = [];

  stuExcelData: Istudents[] = [];
  ngOnInit(): void {
    //table
    this.adminService.findAllStudents().subscribe((res) => {
      this.stuData = res;
      this.loading = false;
    });
    this.adminService.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });
    this.adminService.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.adminService.findAllGroup().subscribe((res) => {
      this.grpData = res;
      this.loading = false;
    });
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });
    this.adminService.findAllClass().subscribe((res) => {
      this.classData = res;
      this.loading = true;
    });
    //forms
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });

    //forms


    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
      role: new FormControl(''),
    })),
      (this.stuUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      (this.attValue = this.formsbuilder.group({
        schedules: new FormControl(''),
        // attStat: new FormControl(''),
        students: new FormControl(''),
      })),
      (this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
        courses: new FormControl(''),
        students: new FormControl(''),
      })),
      (this.schValue = this.formsbuilder.group({
        scheduleName: new FormControl(''),
        Date: new FormControl(''),
        timing: new FormControl(''),
        duration: new FormControl(''),
        groups: new FormControl(''),
        faculties: new FormControl(''),
        subjects: new FormControl(''),
        classrooms: new FormControl(''),
      }));
  }
  //get
  getAllCourses() {
    this.adminService.getAllCourses().subscribe((res: Icourses[]) => {
      this.courseData = res
    });
  }
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }
  //filtered
  findCR() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.filteredCR = this.filteredBAF.filter(
        (CRdata) => CRdata.role === 'CR' || CRdata.role === 'DI'
      );
      console.log(this.filteredCR, 'cr list');
    });
  }
  filteredItAttStudent() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      const extGrpStu = this.schData.forEach((one) => {
        one.groups.forEach((two) => {
          two.students.forEach((three) => {
            this.filteredBAFAttStu = this.filteredBAF.filter(
              (grpStu) => grpStu.classGrp === three.classGrp
            );
            console.log(this.filteredBAFAttStu, 'dvfhvsvfwuevhecyvwefvev');
          });
        });
      });
    });
  }

  //students
  findAllStudents() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.filteredBAF = res.filter(
        (itStu) =>
          itStu.classGrp === 'FYBAF' ||
          itStu.classGrp === 'SYBAF' ||
          itStu.classGrp === 'TYBAF'
      );
      console.log(this.filteredBAF, 'students BAF get');
    });
  }

  regStudents() {
    this.stuData = this.stuValue.value;
    this.adminService.registerStudent(this.stuValue.value).subscribe((res) => {
      console.log(res, 'students post');
      this.stuValue.reset();
      this.findAllStudents();
    });
  }

  removeStudent(_id: string) {
    this.adminService.removeStudent(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.findAllStudents();
    });
  }
  recoverStudent(stuData: any) {
    delete stuData.__v;
    this.stuValue.addControl('_id', new FormControl(''));
    this.stuValue.setValue(stuData);
    this.stuSwitch = false;
    this.showDialogStu();
    console.log(this.stuData, 'stu coming');
  }
  updateStudents() {
    const id = this.stuValue.value._id;
    this.adminService
      .updateStudent(id, this.stuValue.value)
      .subscribe((res: any) => {
        this.stuData = res;
        this.stuSwitch = true;
        this.findAllStudents();
      });
    this.stuValue.reset();
  }
  onStuFileChange(event: any) {
    if (event && event.files && event.files.length > 0) {
      const file = event.files[0];
      this.stuUploadValue.get('file')?.setValue(file);
    }
  }
  onStuSubmit(): void {
    const stuExcelData = new FormData();
    stuExcelData.append('file', this.stuUploadValue.get('file')?.value);

    this.adminService.uploadStu(stuExcelData).subscribe((data: any) => {
      this.stuData = data;
      console.log(this.stuData);
    });
  }
  exportStuExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.stuData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsStuExcelFile(excelBuffer, 'Students List');
    });
  }
  saveAsStuExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  //groups
  findAllGroup() {
    this.adminService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  createGroup() {
    this.grpData = this.grpValue.value;
    this.adminService.createGroup(this.grpValue.value).subscribe((res) => {
      console.log(res, 'group Post');
      this.grpValue.reset();
      this.findAllGroup();
    });
  }
  removeGrp(_id: string) {
    this.adminService.removeGroup(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.findAllGroup();
    });
  }
  recoverGrp(grpData: any) {
    delete grpData.__v;
    this.grpValue.addControl('_id', new FormControl(''));
    this.grpValue.setValue(grpData);
    this.stuSwitch = false;
    this.showDialogGrp();
    console.log(this.grpData, 'grp coming');
  }
  updateGrp() {
    const id = this.grpValue.value._id;
    this.adminService
      .updateGroup(id, this.grpValue.value)
      .subscribe((res: any) => {
        this.grpData = res;
        this.stuSwitch = true;
        this.findAllGroup();
      });
    this.grpValue.reset();
  }
  //att
  findAllAtt() {
    this.adminService.findAllAtt().subscribe((res: Iattendance[]) => {
      this.attData = res;
      console.log(res, 'att get');
    });
  }
  markAtt() {
    this.attData = this.attValue.value;
    console.log(this.attData);
    this.adminService.postAtt(this.attValue.value).subscribe((res) => {
      console.log(res, 'att post');
    });
    this.findAllAtt();
    this.attValue.reset();
  }

  removeAtt(_id: string) {}
  recoverAtt(attData: any) {}
  updateAtt() {}

  //schedule
  findAllSchedule() {
    this.adminService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.schData = Response;
      console.log(Response, 'allData');
    });
  }
  postSch() {
    this.schData = this.schValue.value;
    console.log(this.schData);
    this.adminService
      .createSchedule(this.schValue.value)
      .subscribe((Response) => {
        console.log(Response, 'post Method');
        this.findAllSchedule();
      });
    this.schValue.reset();
  }
  removeSch(_id: string) {
    this.adminService.removeSchedule(_id).subscribe((res) => {
      this.findAllSchedule();
    });
  }
  recoverSch(schData: any) {
    delete schData.__v;
    this.schValue.addControl('_id', new FormControl(''));
    this.schValue.setValue(schData);
    this.stuSwitch = false;
    this.showDialogSch();
    console.log(this.schData, 'sch coming');
  }
  updateSch() {
    const id = this.schValue.value._id;
    this.adminService
      .updateSchedule(id, this.schValue.value)
      .subscribe((res: any) => {
        this.schData = res;
        this.stuSwitch = true;
        this.findAllSchedule();
      });
    this.schValue.reset();
  }
}

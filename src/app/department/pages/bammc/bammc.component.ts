import { Component } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Ibammcattendance,
  Ibammcfaculties,
  Ibammcgroups,
  Ibammcschedule,
  Ibammcstudents,
  Ibammcsubject,
  roles
} from '../../../shared/interfaces/bammc.interface';
import * as FileSaver from 'file-saver';
import { Iclassroom } from 'src/app/shared/interfaces/admin.interface';
import { BammcService } from 'src/app/shared/services/bammc.service';

@Component({
  selector: 'app-bammc',
  templateUrl: './bammc.component.html',
  styleUrls: ['./bammc.component.scss']
})
export class BammcComponent {
  constructor(
    private bammcservice:BammcService,
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
  activeIndex: number = 0;
  stuSwitch: boolean = true;
  display: boolean = false;
  uploadDialog: boolean = false;
  AttDisplay: boolean = false;
  displayEdit: boolean = false;
  displayMaximizable: boolean = false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
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
  attData: Ibammcattendance[] = [];
  facData: Ibammcfaculties[] = [];
  schData: Ibammcschedule[] = [];
  stuData: Ibammcstudents[] = [];
  subData: Ibammcsubject[] = [];
  grpData: Ibammcgroups[] = [];
  classData:Iclassroom[]=[];

  stuExcelData: Ibammcstudents[] = [];
  ngOnInit(): void {
    //table
    this.bammcservice.findAllStudents().subscribe((res) => {
      this.stuData = res;
      this.loading = false;
    });
    this.bammcservice.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });
    this.bammcservice.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.bammcservice.findAllGroup().subscribe((res) => {
      this.grpData = res;
      this.loading = false;
    });
    this.bammcservice.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });
    //forms
    this.bammcservice.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });

    //forms
    this.findAllStudents();
    this.findAllGroup();
    this.findAllStudents();
    this.findAllSchedule();
    this.findAllAtt();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
      role: new FormControl(''),
    })),
      (this.stuUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      (this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
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
    (this.attValue = this.formsbuilder.group({
      schedule: new FormControl(''),
      stats: new FormControl(''),
      markStudents: new FormControl(''),
    }));
  }
  //get
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Ibammcsubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ibammcfaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }
  //students
  findAllStudents() {
    this.bammcservice.findAllStudents().subscribe((res: Ibammcstudents[]) => {
      this.stuData = res;
      console.log(res, 'students get');
    });
  }

  regStudents() {
    this.stuData = this.stuValue.value;
    this.bammcservice.registerStudent(this.stuValue.value).subscribe((res) => {
      console.log(res, 'students post');
      this.stuValue.reset();
      this.findAllStudents();
    });
  }

  removeStudent(_id: string) {
    this.bammcservice.removeStudent(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.findAllStudents();
    });
  }
  recoverStudent(stuData: any) {
    delete stuData.__v;
    this.stuValue.addControl('_id', new FormControl(''));
    this.stuValue.setValue(stuData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.stuData, 'stu coming');
  }
  updateStudents() {
    const id = this.stuValue.value._id;
    this.bammcservice
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

    this.bammcservice.uploadStu(stuExcelData).subscribe((data: any) => {
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
    this.bammcservice.findAllGroup().subscribe((res: Ibammcgroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  createGroup() {
    this.grpData = this.grpValue.value;
    this.bammcservice.createGroup(this.grpValue.value).subscribe((res) => {
      console.log(res, 'group Post');
      this.grpValue.reset();
      this.findAllGroup();
    });
  }
  removeGrp(_id: string) {
    this.bammcservice.removeGroup(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.findAllGroup();
    });
  }
  recoverGrp(grpData: any) {
    delete grpData.__v;
    this.grpValue.addControl('_id', new FormControl(''));
    this.grpValue.setValue(grpData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.grpData, 'grp coming');
  }
  updateGrp() {
    const id = this.grpValue.value._id;
    this.bammcservice
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
    this.bammcservice.findAllAtt().subscribe((res: Ibammcattendance[]) => {
      this.attData = res;
      console.log(res, 'att get');
    });
  }
  markAtt() {
    this.attData = this.attValue.value;
    console.log(this.attData);
    this.bammcservice.postAtt(this.attValue.value).subscribe((res) => {
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
    this.bammcservice.findAllSchedule().subscribe((Response: Ibammcschedule[]) => {
      this.schData = Response;
      console.log(Response, 'allData');
    });
  }
  postSch() {
    this.schData = this.schValue.value;
    console.log(this.schData);
    this.bammcservice.createSchedule(this.schValue.value).subscribe((Response) => {
      console.log(Response, 'post Method');
    });
    this.findAllSchedule();
    this.schValue.reset();
  }
  removeSch(_id: string) {
    this.bammcservice.removeSchedule(_id).subscribe((res) => {
      this.findAllSchedule();
    });
  }
  recoverSch(schData: any) {
    delete schData.__v;
    this.schValue.addControl('_id', new FormControl(''));
    this.schValue.setValue(schData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.schData, 'sch coming');
  }
  updateSch() {
    const id = this.schValue.value._id;
    this.bammcservice
      .updateSchedule(id, this.schValue.value)
      .subscribe((res: any) => {
        this.schData = res;
        this.stuSwitch = true;
        this.findAllSchedule();
      });
    this.schValue.reset();
  }
}

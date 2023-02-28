import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  Iclassroom,
  Ifaculties,
  Igroups,
  Istudents,
  Isubject,
} from '../../service/admin.interface';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}

  // scrollTabs
  activeIndex: number = 0;
  //edit switches
  stuSwitch: boolean = true;

  display: boolean = false;
  uploadDialog: boolean = false;
  displayEdit: boolean = false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
  }
  importDialog() {
    this.uploadDialog = true;
  }
  stuValue!: FormGroup;
  facValue!: FormGroup;
  subValue!: FormGroup;
  classValue!: FormGroup;
  grpValue!: FormGroup;

  stuData: Istudents[] = [];
  facData: Ifaculties[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];
  grpData: Igroups[] = [];

  stuExcelData: Istudents[] = [];

  ngOnInit(): void {
    //table
    this.adminService.findAllStudents().subscribe((res) => {
      this.stuData = res;
      this.loading = false;
    });
    this.adminService.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.adminService.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });
    this.adminService.findAllClass().subscribe((res) => {
      this.classData = res;
      this.loading = false;
    });

    this.adminService.findAllGroup().subscribe((res) => {
      this.grpData = res;
      this.loading = false;
    });
    //forms
    this.findAllStudents();
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.findAllGroup();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl('')
    })),
      (this.facValue = this.formsbuilder.group({
        fname: new FormControl(''),
        department: new FormControl(''),
        designation: new FormControl(''),
      })),
      (this.subValue = this.formsbuilder.group({
        subject: new FormControl(''),
      })),
      (this.classValue = this.formsbuilder.group({
        class: new FormControl(''),
      })),
      (this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
        students: new FormControl(''),
      }));
    //crud buttons
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
    this.showDialog();
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

  //students
  findAllStudents() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.stuData = res;
      console.log(res, 'students get');
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
  // uploadedFiles: any[] = [];
  // onUpload(event: any) {
  //   const file = event.target.files[0];
  //   this.stuValue.patchValue({ stuExcel: file });
  //   this.adminService.uploadStu(this.stuValue.value).subscribe((res)=>{
  //     console.log(res,'uploaded')
  //   })
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  // }

  importStuExcel(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.stuExcelData = XLSX.utils.sheet_to_json(
        workBook.Sheets[sheetNames[0]]
      );
      console.log(this.stuExcelData, 'uploaded');
    };
    console.log(this.stuExcelData, 'test excel');
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
    this.showDialog();
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
  //faculties
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }
  postFac() {
    this.facData = this.facValue.value;
    console.log(this.facData);
    this.adminService.addFaculty(this.facValue.value).subscribe((res) => {
      console.log(res, 'faculty post');
      this.facValue.reset();
      this.getAllFaculties();
    });
  }
  removeFaculty(_id: string) {
    this.adminService.removeFaculty(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.getAllFaculties();
    });
  }
  recoverFaculty(facData: any) {
    delete facData.__v;
    this.facValue.addControl('_id', new FormControl(''));
    this.facValue.setValue(facData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.facData, 'fac coming');
  }
  updateFac() {
    const id = this.facValue.value._id;
    this.adminService
      .updateFaculty(id, this.facValue.value)
      .subscribe((res: any) => {
        this.facData = res;
        this.stuSwitch = true;
        this.getAllFaculties();
      });
    this.facValue.reset();
  }

  //subjects
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  postSub() {
    this.subData = this.subValue.value;
    console.log(this.subData);
    this.adminService.addSubject(this.subValue.value).subscribe((res) => {
      console.log(res, 'subject post');
      this.subValue.reset();
      this.findAllSubjects();
    });
  }
  removeSubject(_id: string) {
    this.adminService.removeSubject(_id).subscribe((res) => {
      this.findAllSubjects();
      console.log(res, 'delete works');
    });
  }
  recoverSubject(subData: any) {
    delete subData.__v;
    this.subValue.addControl('_id', new FormControl(''));
    this.subValue.setValue(subData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.subData, 'sub coming');
  }
  updateSubject() {
    const id = this.subValue.value._id;
    this.adminService
      .updateSubject(id, this.subValue.value)
      .subscribe((res: any) => {
        this.subData = res;
        this.stuSwitch = true;
        this.findAllSubjects();
      });
    this.subValue.reset();
  }
  //classroom
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  postClass() {
    this.classData = this.classValue.value;
    console.log(this.classData);
    this.adminService.addClass(this.classValue.value).subscribe((res) => {
      console.log(res, 'class post');
      this.classValue.reset();
      this.findAllClass();
    });
  }
  deleteClass(_id: string) {
    this.adminService.removeClass(_id).subscribe((res) => {
      this.findAllClass();
    });
  }
  recoverClass(classData: any) {
    delete classData.__v;
    this.classValue.addControl('_id', new FormControl(''));
    this.classValue.setValue(classData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.classData, 'class coming');
  }
  updateClass() {
    const id = this.classValue.value._id;
    this.adminService
      .updateClass(id, this.classValue.value)
      .subscribe((res: any) => {
        this.classData = res;
        this.stuSwitch = true;
        this.findAllClass();
      });
    this.classValue.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Iclassroom,
  Ifaculties,
  Igroups,
  Istudents,
  Isubject,
  roles
} from '../../service/admin.interface';
import * as FileSaver from 'file-saver';

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
  displayMaximizable: boolean = false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
  }
  importDialog() {
    this.uploadDialog = true;
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  stuValue!: FormGroup;
  stuUploadValue!: FormGroup;
  subValue!: FormGroup;
  subUploadValue!: FormGroup;
  classValue!: FormGroup;
  classUploadValue!: FormGroup;
  
  stuRole=roles;
  stuData: Istudents[] = [];
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
    this.adminService.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });
    this.adminService.findAllClass().subscribe((res) => {
      this.classData = res;
      this.loading = false;
    });

    //forms
    this.findAllStudents();
    this.findAllSubjects();
    this.findAllClass();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
      role:new FormControl('')
    })),
      (this.stuUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      (this.subValue = this.formsbuilder.group({
        subject: new FormControl(''),
      })),
      (this.subUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      (this.classValue = this.formsbuilder.group({
        class: new FormControl(''),
      })),
      (this.classUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      }))
    //crud buttons
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
  onSubFileChange(event: any) {
    if (event && event.files && event.files.length > 0) {
      const file = event.files[0];
      this.subUploadValue.get('file')?.setValue(file);
    }
  }
  onSubSubmit(): void {
    const subExcelData = new FormData();
    subExcelData.append('file', this.subUploadValue.get('file')?.value);
    this.adminService.uploadSub(subExcelData).subscribe((data: any) => {
      this.subData = data;
      console.log(this.subData);
    });
  }

  exportSubExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.subData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsSubExcelFile(excelBuffer, 'Students List');
    });
  }
  saveAsSubExcelFile(buffer: any, fileName: string): void {
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
  onClassFileChange(event: any) {
    if (event && event.files && event.files.length > 0) {
      const file = event.files[0];
      this.classUploadValue.get('file')?.setValue(file);
    }
  }
  onClassSubmit(): void {
    const classExcelData = new FormData();
    classExcelData.append('file', this.classUploadValue.get('file')?.value);

    this.adminService.uploadClass(classExcelData).subscribe((data: any) => {
      this.classData = data;
      console.log(this.classData);
    });
  }

  exportClassExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.classData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsClassExcelFile(excelBuffer, 'Students List');
    });
  }
  saveAsClassExcelFile(buffer: any, fileName: string): void {
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
}

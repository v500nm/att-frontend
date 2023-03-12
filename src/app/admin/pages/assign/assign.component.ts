import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
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
} from '../../../shared/interfaces/admin.interface';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss'],
})
export class AssignComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}

  activeIndex: number = 0;
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
  facValue!: FormGroup;
  facUploadValue!: FormGroup;
  facData: Ifaculties[] = [];

  stuValue!: FormGroup;
  subValue!: FormGroup;
  classValue!: FormGroup;
  grpValue!: FormGroup;

  stuData: Istudents[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];
  grpData: Igroups[] = [];
  

  ngOnInit(): void {
    this.adminService.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.adminService.findAllGroup().subscribe((res) => {
      this.grpData = res;
      this.loading = false;
    });

    this.getAllFaculties();
    this.findAllGroup();
    this.findAllStudents();

    (this.facValue = this.formsbuilder.group({
      fname: new FormControl(''),
      department: new FormControl(''),
      designation: new FormControl(''),
    })),
      (this.facUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
        students: new FormControl(''),
      })
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
  onFacFileChange(event: any) {
    if (event && event.files && event.files.length > 0) {
      const file = event.files[0];
      this.facUploadValue.get('file')?.setValue(file);
    }
  }
  onFacSubmit(): void {
    const facExcelData = new FormData();
    facExcelData.append('file', this.facUploadValue.get('file')?.value);
    this.adminService.uploadFac(facExcelData).subscribe((data: any) => {
      this.facData = data;
      console.log(this.facData);
    });
  }

  exportFacExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.facData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsFacExcelFile(excelBuffer, 'FacultyList');
    });
  }
  saveAsFacExcelFile(buffer: any, fileName: string): void {
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
  //subjects
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  //classroom
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
}

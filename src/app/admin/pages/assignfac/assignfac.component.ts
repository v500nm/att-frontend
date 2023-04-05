import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { Ifaculties } from 'src/app/shared/interfaces/admin.interface';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-assignfac',
  templateUrl: './assignfac.component.html',
  styleUrls: ['./assignfac.component.scss']
})
export class AssignfacComponent implements OnInit{
  constructor(
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
  importDialog() {
    this.uploadDialog = true;
  }

  facValue!: FormGroup;
  facUploadValue!: FormGroup;
  facData: Ifaculties[] = [];

  ngOnInit(): void {
    this.adminService.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.getAllFaculties();
    this.facValue = this.formsbuilder.group({
      fname: new FormControl(''),
      department: new FormControl(''),
      designation: new FormControl(''),
    }),
    this.facUploadValue = this.formsbuilder.group({
      file: ['', Validators.required],
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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { Icourses, Isubject } from 'src/app/shared/interfaces/admin.interface';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-addsubs',
  templateUrl: './addsubs.component.html',
  styleUrls: ['./addsubs.component.scss'],
})
export class AddsubsComponent implements OnInit {
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
  subValue!: FormGroup;
  subUploadValue!: FormGroup;
  subData: Isubject[] = [];
  subIT:Isubject[]=[];
  subBammc:Isubject[]=[];
  subBaf:Isubject[]=[];
  subBms:Isubject[]=[];
  courseData:Icourses[]=[];

  ngOnInit(): void {
    this.adminService.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });   
    (this.subValue = this.formsbuilder.group({
      subject: new FormControl(''),
      courses:new FormControl('')
    })),
    (this.subUploadValue = this.formsbuilder.group({
      file: ['', Validators.required],
    }))
    this.findAllSubjects();
    this.getAllCourses();
    this.findBafSub();
    this.findBammcSub();
    this.findBmsSub();
    this.findItSub();
  }
  findItSub(){
    this.adminService.findAllSubjects().subscribe((res:Isubject[])=>{
      this.subIT=res.filter(itFilter=>itFilter.courses.courses==="BSc-IT")
    })
  }
  findBafSub(){
    this.adminService.findAllSubjects().subscribe((res:Isubject[])=>{
      this.subBaf=res.filter(bafFilter=>bafFilter.courses.courses==="BAF")
    })
  }
  findBammcSub(){
    this.adminService.findAllSubjects().subscribe((res:Isubject[])=>{
      this.subBammc=res.filter(bammcFilter=>bammcFilter.courses.courses==="BAMMC")
    })
  }
  findBmsSub(){
    this.adminService.findAllSubjects().subscribe((res:Isubject[])=>{
      this.subBms=res.filter(bmsFilter=>bmsFilter.courses.courses==="BMS")
    })
  }
  getAllCourses(){
    this.adminService.getAllCourses().subscribe((res:Icourses[])=>{
      this.courseData=res;
    })
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
}

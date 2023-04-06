import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Iattendance,
  Iclassroom,
  Icourses,
  Igroups,
  Istudents,
  Isubject,
  roles,
  Ischedule,
  Ifaculties,
} from '../../../shared/interfaces/admin.interface';
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

  stuRole = roles;

  attData: Iattendance[] = [];
  facData: Ifaculties[] = [];
  schData: Ischedule[] = [];
  stuData: Istudents[] = [];
  subData: Isubject[] = [];
  grpData: Igroups[] = [];
  classData: Iclassroom[] = [];
  courseData: Icourses[] = [];
  stuExcelData: Istudents[] = [];

  //filterdata
  ITStu: Istudents[] = [];
  BafStu: Istudents[] = [];
  BammcStu: Istudents[] = [];
  BmsStu: Istudents[] = [];

  //extras
  data: any;
  datasets: any;
  basic: any;
  chartOptions: any;
  options: any;

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
    //bar graph
    {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--text-color-secondary'
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'IT Attendance',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [65, 59, 80, 81, 56, 55, 40, 99, 89, 85, 90, 75],
          },
          {
            label: 'BMS Attendance',
            backgroundColor: documentStyle.getPropertyValue('--red-500'),
            borderColor: documentStyle.getPropertyValue('--red-500'),
            data: [40, 52, 86, 71, 46, 35, 49, 79, 59, 58, 59, 57],
          },
          {
            label: 'BAMMC Attendance',
            backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
            borderColor: documentStyle.getPropertyValue('--yellow-500'),
            data: [50, 72, 62, 61, 64, 53, 94, 59, 58, 38, 82, 71],
          },
          {
            label: 'BAF Attendance',
            backgroundColor: documentStyle.getPropertyValue('--green-500'),
            borderColor: documentStyle.getPropertyValue('--green-500'),
            data: [44, 55, 46, 74, 49, 75, 69, 89, 54, 77, 56, 81],
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      //piechart
      {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.datasets = {
          labels: ['IT', 'BMS', 'BAMMC', 'BAF'],
          datasets: [
            {
              data: [210,400,200,180],
              backgroundColor: [
                documentStyle.getPropertyValue('--blue-800'),
                documentStyle.getPropertyValue('--blue-600'),
                documentStyle.getPropertyValue('--blue-400'),
                documentStyle.getPropertyValue('--blue-200'),
              ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue('--blue-700'),
                documentStyle.getPropertyValue('--blue-500'),
                documentStyle.getPropertyValue('--blue-300'),
                documentStyle.getPropertyValue('--blue-100'),
              ],
            },
          ],
        };
        this.basic = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor,
              },
            },
          },
        };
      }
    }
    //forms
    this.findAllStudents();
    this.findAllGroup();
    this.findAllStudents();
    this.findAllSchedule();
    this.getAllFaculties();
    this.getAllCourses();
    this.findBamStuChart();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
      role: new FormControl(''),
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
      }));
    //crud buttons
  }
  getAllCourses() {
    this.adminService.getAllCourses().subscribe((res: Icourses[]) => {
      this.courseData = res.filter(
        (itStu) =>
          itStu.courses === 'FYIT' ||
          itStu.courses === 'SYIT' ||
          itStu.courses === 'TYIT'
      );
    });
  }
  //filters for charts
  findItStuChart() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.ITStu = res.filter(
        (itChart) =>
          itChart.classGrp === 'FYIT' ||
          itChart.classGrp === 'SYIT' ||
          itChart.classGrp === 'TYIT'
      );
    });
  }
  findBafStuChart() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.BafStu = res.filter(
        (bafChart) =>
          bafChart.classGrp === 'FYBAF' ||
          bafChart.classGrp === 'SYBAF' ||
          bafChart.classGrp === 'TYBAF'
      );
    });
  }
  findBammcStuChart() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.BammcStu = res.filter(
        (BammcChart) =>
          BammcChart.classGrp === 'FYBAMMC' ||
          BammcChart.classGrp === 'SYBAMMC' ||
          BammcChart.classGrp === 'TYBAMMC'
      );
    });
  }
  findBamStuChart() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.BmsStu = res.filter(
        (BmsChart) =>
          BmsChart.classGrp === 'FYBMS' ||
          BmsChart.classGrp === 'SYBMS' ||
          BmsChart.classGrp === 'TYBMS'
      );
      console.log(this.BmsStu,'BMS Stu');
    });
  }

  //get all
  findAllSchedule() {
    this.adminService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.schData = Response;
      console.log(Response, 'allData');
    });
  }
  findAllGroup() {
    this.adminService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
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

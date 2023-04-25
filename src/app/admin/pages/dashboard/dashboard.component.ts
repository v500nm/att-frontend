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

  FYITStu: Istudents[] = [];
  SYITStu: Istudents[] = [];
  TYITStu: Istudents[] = [];
  FYBafStu: Istudents[] = [];
  SYBafStu: Istudents[] = [];
  TYBafStu: Istudents[] = [];
  FYBammcStu: Istudents[] = [];
  SYBammcStu: Istudents[] = [];
  TYBammcStu: Istudents[] = [];
  FYBmsStu: Istudents[] = [];
  SYBmsStu: Istudents[] = [];
  TYBmsStu: Istudents[] = [];

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
    //INit
    this.findFYIT();
    this.findSYIT();
    this.findTYIT();
    this.findFYBAF();
    this.findSYBAF();
    this.findTYBAF();
    this.findFYBAMMC();
    this.findSYBAMMC();
    this.findTYBAMMC();
    this.findFYBMS();
    this.findSYBMS();
    this.findTYBMS();
    this.getAllFaculties(); 

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
  findFYIT(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.FYITStu=res.filter((Fyit)=>Fyit.classGrp==='FYIT')
    })
  }
  findSYIT(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.SYITStu=res.filter((Syit)=>Syit.classGrp==='SYIT')
    })
  }
  findTYIT(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.TYITStu=res.filter((Tyit)=>Tyit.classGrp==='TYIT')
    })
  }
  findFYBAF(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.FYBafStu=res.filter((Fybaf)=>Fybaf.classGrp==='FYBAF')
    })
  }
  findSYBAF(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.SYBafStu=res.filter((SYBAF)=>SYBAF.classGrp==='SYBAF')
    })
  }
  findTYBAF(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.TYBafStu=res.filter((TyBAF)=>TyBAF.classGrp==='TYBAF')
    })
  }
  findFYBAMMC(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.FYBammcStu=res.filter((FyBAMMC)=>FyBAMMC.classGrp==='FYBAMMC')
    })
  }
  findSYBAMMC(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.SYBammcStu=res.filter((SyBAMMC)=>SyBAMMC.classGrp==='SYBAMMC')
    })
  }
  findTYBAMMC(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.TYBammcStu=res.filter((TyBAMMC)=>TyBAMMC.classGrp==='TYBAMMC')
    })
  }
  findFYBMS(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.FYBmsStu=res.filter((FYBMS)=>FYBMS.classGrp==='FYBMS')
    })
  }
  findSYBMS(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.SYBmsStu=res.filter((SYBMS)=>SYBMS.classGrp==='SYBMS')
    })
  }
  findTYBMS(){
    this.adminService.findAllStudents().subscribe((res:Istudents[])=>{
      this.TYBmsStu=res.filter((TYBMS)=>TYBMS.classGrp==='TYBMS')
    })
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
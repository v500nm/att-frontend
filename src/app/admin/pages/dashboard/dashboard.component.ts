import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  Iclassroom,
  Ifaculties,
  Igroups,
  Ischedule,
  Istudents,
  Isubject,
} from '../../service/admin.interface';

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

  //edit switches
  stuSwitch: boolean = true;
  
  display: boolean = false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
  }

  value1: any;
  stuValue!: FormGroup;
  facValue!: FormGroup;
  subValue!: FormGroup;
  classValue!: FormGroup;
  schValue!: FormGroup;
  grpValue!: FormGroup;

  stuData: Istudents[] = [];
  facData: Ifaculties[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];
  schData: Ischedule[] = [];
  grpData: Igroups[] = [];

  ngOnInit(): void {
    //forms
    this.findAllStudents();
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.findAllSchedule();
    this.findAllGroup();

    this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
    }),

    this.facValue = this.formsbuilder.group({
      fname: new FormControl(''),
      department: new FormControl(''),
      designation: new FormControl(''),
    }),
      this.subValue = this.formsbuilder.group({
        subject: new FormControl(''),
      }),
      this.classValue = this.formsbuilder.group({
        class: new FormControl(''),
      }),
this.grpValue=this.formsbuilder.group({
  gName: new FormControl(''),
  students: new FormControl('')
})
    this.schValue = this.formsbuilder.group({
      scheduleName: new FormControl(''),
      Date: new FormControl(''),
      timing: new FormControl(''),
      duration: new FormControl(''),
      groups: new FormControl(''),
      faculties: new FormControl(''),
      subjects: new FormControl(''),
      classrooms: new FormControl(''),
    });
    console.log(this.schValue.get('groups')?.value, 'id checking');
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
    this.adminService.findAllSchedule().subscribe((res)=>{
      this.schData = res;
      this.loading = false;
    })
    this.adminService.findAllGroup().subscribe((res)=>{
      this.grpData = res;
      this.loading = false;
    })

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
    });
  }
  removeStudent(_id: string) {
    this.adminService.removeStudent(_id).subscribe((res) => {
      console.log(res, 'delete works');
      this.findAllStudents();
    });
  }
  recoverStudent(stuData:Istudents){

    
    this.stuData=this.stuValue.value;
  }
  updateStudents(stuData: Istudents, id: string) {
    this.adminService.updateStudent(stuData, id).subscribe((res) => {
      this.findAllStudents();
      this.stuValue.value;
      this.stuSwitch = false;
    });
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
    });
  }
  removeFaculty(_id:string){
    this.adminService.removeFaculty(_id).subscribe((res)=>{
      console.log(res,'delete works');
      this.getAllFaculties();
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
      this.adminService.findAllSubjects();
    });
  }
  removeSubject(_id:string){
    this.adminService.removeSubject(_id).subscribe((res)=>{
      this.findAllSubjects();
      console.log(res,'delete works');
    })
  }
  //classroom
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  deleteClass(_id: string) {
    this.adminService.removeClass(_id).subscribe((res) => {
      this.findAllClass();
    });
  }
  editClass() {
    this.classData = this.classValue.value;
    this.adminService.updateClass(this.classValue.value).subscribe((res) => {
      console.log(res, 'update class');
    });
  }
  postClass() {
    this.classData = this.classValue.value;
    console.log(this.classData);
    this.adminService.addClass(this.classValue.value).subscribe((res) => {
      console.log(res, 'class post');
      this.classValue.reset();
    });
  }
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
      });
  }
  removeSch(_id:string){
    this.adminService.removeSchedule(_id).subscribe((res)=>{
      this.findAllSchedule();
    })
  }
}
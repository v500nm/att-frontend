import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Iattendance, Ifaculties, Igroups, Iquestion, Ischedule, Istudents, Isubject, Isuggestion, AttStatus } from '../../service/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  title='userDashboard'

  stu:Istudents[]=[]
  student:Istudents={
    roll:'',
    name:''
  }
  fac:Ifaculties[]=[]
  faculty:Ifaculties={
    fID:'',
    fname:'',
    department:'',
    designation:'',
  }
  // att:Iattendance[]=[]
  // attS:Iattendance={
  //   attID:'',
  //   stats:AttStatus

  // }
  grp:Igroups[]=[]
  group:Igroups={
    gID: '',
    gName: '',
  }
  sch:Ischedule[]=[]
  
  sub:Isubject[]=[]
  subject:Isubject={
    subID:'',
    subject:'',  }
  ques:Iquestion[]=[]
  questions:Iquestion={
    qID:'',
    questions:'',
  }
  sug:Isuggestion[]=[]
  suggestions:Isuggestion={
    sugID:'',
    suggestions:'',
  }

  constructor(private userService:UserService){}
  ngOnInit(): void {}

  //students
  findAllStudents(){
    this.userService.findAllStudents()
    .subscribe(Response=>{
      this.stu=Response;
    })
  }
  onSubmitStudent(){
    this.userService.registerStudent(this.student)
    .subscribe(Response=>{
      this.findAllStudents();
      this.student={
        roll:'',
        name:''
      }
    })
  }
  removeStudent(roll:string){
    this.userService.removeStudent(roll)
    .subscribe(Response=>{
      this.findAllStudents();
    })
  }
  updateStudent(student:Istudents){
    this.userService.updateStudent(student)
    .subscribe(Response=>{
      this.findAllStudents();
      this.student={
        roll:'',
        name:''
      }
    })
  }

  //faculties
  getAllFaculties(){
    this.userService.getAllFaculties()
    .subscribe(Response=>{
      this.fac=Response;
    })
  }
  onSubmitFaculty(){
    this.userService.addFaculty(this.faculty)
    .subscribe(Response=>{
      this.getAllFaculties();
      this.faculty={
        fID:'',
        fname:'',
        department:'',
        designation:'',
      }
    })
  }
  removeFaculty(fID:string){
    this.userService.removeFaculty(fID)
    .subscribe(Response=>{
      this.getAllFaculties();
    })
  }
  updateFaculty(faculty:Ifaculties){
    this.userService.updateFaculty(faculty)
    .subscribe(Response=>{
      this.getAllFaculties();
      this.faculty={
        fID:'',
        fname:'',
        department:'',
        designation:'',
      }
    })
  }

  //attendance

  //groups

  //schedule
  findAllSchedule(){
    this.userService.findAllSchedule()
    .subscribe(Response=>{
      this.sch=Response;
    })
   }
  
   removeSchedule(scID:string){
    this.userService.removeSchedule(scID)
    .subscribe(Response=>{
      this.findAllSchedule();
    })
   }
   updateSchedule(schedules:Ischedule){
    this.userService.updateSchedule(schedules)
    .subscribe(Response=>{
      this.findAllSchedule();
      
    })
   }

  //subjects
findAllSubjects(){
    this.userService.findAllSubjects()
    .subscribe( Response=>{
      this.sub = Response;
    })
  }
  onSubmitSubject(){
    this.userService.addSubject(this.subject)
    .subscribe(Response=>{
      this.findAllSubjects();
      this.subject={
        subID:'',
        subject:''
      }
    })
  }
  removeSubject(subID:string){
    this.userService.removeSubject(subID)
    .subscribe( Response=>{
      this.findAllSubjects();
    })
  }
  updateSubject(subject:Isubject){
    this.userService.updateSubject(subject)
    .subscribe(Response=>{
      this.findAllSubjects();
      this.subject={
        subID:'',
        subject:''
      }
    })
  }
}

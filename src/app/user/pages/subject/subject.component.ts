import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Isubject } from '../../service/user.interface';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  title = 'userSubject'
  sub:Isubject[]=[];
  subject:Isubject={
    subID:'',
    subject:''
  }

  constructor(private userService:UserService){}
  ngOnInit() {
    this.userService.findAllSubjects()
    .subscribe( Response=>{
      this.sub = Response;
    })
  }
  findAllSubjects(){
    this.userService.findAllSubjects()
    .subscribe( Response=>{
      this.sub = Response;
    })
  }
  onSubmit(){
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

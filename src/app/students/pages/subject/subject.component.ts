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
  subData:Isubject[]=[]

  constructor(private userService:UserService){}
  ngOnInit() {
    this.userService.findAllSubjects()
    .subscribe(res=>{
      this.subData=res;
    })
  }
  findAllSubjects(){
    this.userService.findAllSubjects()
    .subscribe(res=>{
      this.subData=res;
    })
  }
}

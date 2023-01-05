import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Ischedule } from '../../service/user.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  title='userSchedule'
  sch:Ischedule[]=[];
  schedules:Ischedule={
    scID:'',
    scheduleName:'',
    Date:'',
    startTime:'',
    endTime:'',
    duration:''
  }
 
  constructor(private userService:UserService){}
  ngOnInit(): void {
   this.userService.findAllSchedule()
   .subscribe(Response=>{
    this.sch = Response;
   })
 }
 findAllSchedule(){
  this.userService.findAllSchedule()
  .subscribe(Response=>{
    this.sch=Response;
  })
 }
 onSubmit(){
  this.userService.createSchedule(this.schedules)
  .subscribe(Response=>{
    this.findAllSchedule();
    this.schedules={
      scID:'',
    scheduleName:'',
    Date:'',
    startTime:'',
    endTime:'',
    duration:''
    }
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
    this.schedules={
      scID:'',
      scheduleName:'',
      Date:'',
      startTime:'',
      endTime:'',
      duration:''
    }
  })
 }
}

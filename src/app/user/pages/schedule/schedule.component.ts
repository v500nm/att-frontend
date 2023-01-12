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
}

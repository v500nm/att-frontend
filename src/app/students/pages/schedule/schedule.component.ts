import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Ischedule } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  title='userSchedule'
  schData:Ischedule[]=[];
 
 
  constructor(private userService:UserService){}
  ngOnInit(): void {
   this.userService.findAllSchedule()
   .subscribe(Response=>{
    this.schData = Response;
   })
 }
 findAllSchedule(){
  this.userService.findAllSchedule()
  .subscribe(Response=>{
    this.schData = Response;
  })
 }

 removeSchedule(_id:string){
  this.userService.removeSchedule(_id)
  .subscribe(Response=>{
    this.findAllSchedule();
  })
 }
}

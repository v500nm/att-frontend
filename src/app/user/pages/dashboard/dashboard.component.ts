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
  
  value1: number = 99;
  value2: number = 95;
  value3: number = 75;
  value4: number = 99;
  
 ngOnInit(): void {
   
 }
}

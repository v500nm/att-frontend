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

 ngOnInit(): void {
   
 }
}

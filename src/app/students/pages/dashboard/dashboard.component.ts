import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import {
  Iattendance,
  Ifaculties,
  Igroups,
  Ischedule,
  Istudents,
  Isubject,
  AttStatus,
  roles,
  Iclassroom,
} from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'userDashboard';
  constructor(private userService: UserService) { }
  stuRole = roles;
  stuData: Istudents[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];
  grpData: Igroups[] = [];
  attData: Iattendance[] = [];
  facData: Ifaculties[] = [];
  schData: Ischedule[] = [];


  ngOnInit(): void {
    this.findAllStudents();
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.findAllSchedule();
    this.findAllGroup();
    this.findAllAtt();

  }
  
  //Att
  findAllAtt() {
    this.userService.findAllAtt().subscribe((res: Iattendance[]) => {
      this.attData = res;
      console.log(res, 'att get');
    });
  }
  //schedule
  findAllSchedule() {
    this.userService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.schData = Response;
      console.log(Response, 'allData');
    });
  }
  //groups
  findAllGroup() {
    this.userService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  //students
  findAllStudents() {
    this.userService.findAllStudents().subscribe((res: Istudents[]) => {
      this.stuData = res;
      console.log(res, 'students get');
    });
  }
  //faculties
  getAllFaculties() {
    this.userService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }

  //subjects
  findAllSubjects() {
    this.userService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  //classroom
  findAllClass() {
    this.userService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }

 


}




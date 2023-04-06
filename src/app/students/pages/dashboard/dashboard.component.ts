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
  chartOptions: any;
  data: any;
  datasets: any;
  basic: any
  options: any;

  ngOnInit(): void {
    this.findAllStudents();
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.findAllSchedule();
    this.findAllGroup();
    this.findAllAtt(); {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Total Attendance',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [65, 59, 80, 81, 56, 55, 40, 99, 89, 85, 90, 75]
          },
    
        ]
      };
    
      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
    
        }
      };
    
    
      {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
    
        this.datasets = {
          labels: ['Total Lecture', 'Present', 'Absent'],
          datasets: [
            {
              data: [10, 6, 4],
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
          ]
        };
    
        this.basic = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
                color: textColor
              }
            }
          }
        };
      }
    }


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




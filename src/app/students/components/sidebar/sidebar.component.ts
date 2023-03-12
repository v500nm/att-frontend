import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visibleSidebar1:any;
  activeTab ='student';
  constructor ( private router:Router){}
  
  userDash(){
    this.activeTab = 'student/';
    this.router.navigate(['student/']);
  }
  attendance(){
    this.activeTab = 'student/attendance';
    this.router.navigate(['student/attendance']);
  }
  subject(){
    this.activeTab = 'student/subject';
    this.router.navigate(['student/subject']);  
  }
  defaulter(){
    this.activeTab = 'student/defaulter';
    this.router.navigate(['student/defaulter']);  
  }
  schedule(){
    this.activeTab = 'student/schedule';
    this.router.navigate(['student/schedule']);
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

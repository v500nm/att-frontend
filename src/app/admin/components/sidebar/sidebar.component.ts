import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visibleSidebar:any;
  activeTab ='user';
  constructor ( private router:Router){}

  adminDash(){
    this.activeTab = 'admin/';
    this.router.navigate(['admin/']);
  }

  attendance(){
    this.activeTab = 'admin/attendance';
    this.router.navigate(['admin/attendance']);
  }
  chatbot(){
    this.activeTab = 'admin/chatbot';
    this.router.navigate(['admin/chatbot']);   
  }
  schedules(){
    this.activeTab = 'admin/schedules';
    this.router.navigate(['admin/schedules']);
  }
  students(){
    this.activeTab = 'admin/students';
    this.router.navigate(['admin/students'])
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

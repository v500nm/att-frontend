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
  chatbot(){
    this.activeTab = 'admin/chatbot';
    this.router.navigate(['admin/chatbot']);   
  }
  attMark(){
    this.activeTab = 'admin/attendance';
    this.router.navigate(['admin/attendance']);
  }
  assign(){
    this.activeTab='admin/assign';
    this.router.navigate(['admin/assign']);
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

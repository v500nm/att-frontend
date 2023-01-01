import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visibleSidebar1:any;
  activeTab ='user';
  constructor ( private router:Router){}

  attendance(){
    this.activeTab = 'user/attendance';
    this.router.navigate(['user/attendance']);
  }
  subject(){
    this.activeTab = 'user/subject';
    this.router.navigate(['user/subject']);  
  }
  defaulter(){
    this.activeTab = 'user/defaulter';
    this.router.navigate(['user/defaulter']);  
  }
  chat(){
    this.activeTab = 'user/chat';
    this.router.navigate(['user/chat']);   
  }
  schedule(){
    this.activeTab = 'user/schedule';
    this.router.navigate(['user/schedule']);
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

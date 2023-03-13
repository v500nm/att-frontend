import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  visibleSidebar:any;
  activeTab ='department';
  constructor ( private router:Router,private authService:AuthService){}

  onLogout() {
    this.authService.logoutAdmin().subscribe(() => {
      this.router.navigate(['/departmentlogin']);
    });
    
  }
  depDash(){
    this.activeTab = 'department/';
    this.router.navigate(['department/']);
  }
  bscit(){
    this.activeTab = 'department/it';
    this.router.navigate(['department/it']);   
  }
  bms(){
    this.activeTab = 'department/bms';
    this.router.navigate(['department/bms']);
  }
  baf(){
    this.activeTab='department/baf';
    this.router.navigate(['department/baf']);
  }
  bammc(){
    this.activeTab='department/bammc';
    this.router.navigate(['department/bammc'])
  }
  seminars(){
    this.activeTab='department/seminars';
    this.router.navigate(['department/seminars'])
  }
  workshops(){
    this.activeTab='department/workshops';
    this.router.navigate(['department/workshops']);
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

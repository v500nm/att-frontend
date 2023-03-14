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
  activeTab ='admin';
  constructor ( private router:Router,private authService:AuthService){}

  onLogout() {
    this.authService.logoutAdmin().subscribe(() => {
      this.router.navigate(['/adminlogin']);
    });
  }
  adminDash(){
    this.activeTab = 'admin/';
    this.router.navigate(['admin/']);
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

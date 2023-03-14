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
  addClass(){
    this.activeTab='admin/addclass';
    this.router.navigate(['admin/addclass'])
  }
  addSubs(){
    this.activeTab='admin/addsubs';
    this.router.navigate(['admin/addsubs']);
  }
  assignFac(){
    this.activeTab='admin/assignfac';
    this.router.navigate(['admin/assignfac']);
  }
  facLogins(){
    this.activeTab='admin/faclogins';
    this.router.navigate(['admin/faclogins']);
  }
  logout(){
    this.activeTab = '';
    this.router.navigate(['']);
  }
}

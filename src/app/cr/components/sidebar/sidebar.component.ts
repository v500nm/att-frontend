import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  visibleSidebar: any;
  activeTab = 'cr';
  constructor(private router: Router, private authService: AuthService) {}
  onLogout() {
    this.authService.logoutAdmin().subscribe(() => {
      this.router.navigate(['']);
    });
  }
  adminHome() {
    this.activeTab = 'cr/';
    this.router.navigate(['cr/']);
  }
  Defaulter() {
    this.activeTab = 'cr/defaulter';
    this.router.navigate(['cr/defaulter']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  activeTab='initial';
  constructor(private router:Router,private authService:AuthService){}
  adLogin(){
    this.activeTab='adminlogin/';
    this.router.navigate(['adminlogin/']);
  }
  depLogin(){
    this.activeTab='departmentlogin/';
    this.router.navigate(['departmentlogin/']);
  }
  stuLogin(){
    this.activeTab='studentlogin/';
    this.router.navigate(['studentlogin/']);
  }
  crLogin(){
    this.activeTab='cr/';
    this.router.navigate(['cr/'])
  }
}

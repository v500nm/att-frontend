import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DepartmentGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean {
    if(!!localStorage.getItem('deptoken')){
      return true
    }else{
      this.router.navigate(['/departmentlogin'])
      return false
    }
  }
  
}

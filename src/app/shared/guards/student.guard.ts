import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean {
    if(!!localStorage.getItem('stutoken')){
      return true
    }
    this.router.navigate(['/studentlogin'])
    return false
  }
  
}

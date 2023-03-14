import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BafGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
    if(!!localStorage.getItem('token')){
      return true
    }else{
      this.router.navigate(['/departmentlogin'])
      return false
    }
  }
}

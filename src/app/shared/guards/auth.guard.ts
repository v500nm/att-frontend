import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!!localStorage.getItem('adtoken')) {
      return true;
    } else {
      this.router.navigate(['/adminlogin']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { IadLogin,IdepLogin,IstuLogin, IadRegistration,IdepRegistration,IstuRegistration } from '../interfaces/auth.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private cookieService: CookieService) { }
  adminUrl = "http://localhost:3000/adminlog/"
  departmentUrl="http://localhost:3000/departmentlog/"
  studentUrl="http://localhost:3000/studentlog/"

  //admin
  postAdLogin(data: IadLogin): Observable<IadLogin> {
    return this.http.post<IadLogin>(`${this.adminUrl}login`,data);
  }  
  getAdRegister(){
    return this.http.get<IadRegistration[]>(`${this.adminUrl}register`).pipe(map((res:any)=>{
      return res;
    }))
  }
  postAdRegister(data: IadRegistration): Observable<IadRegistration> {
    return this.http.post<IadRegistration>(`${this.adminUrl}register`,data);
  }
  logoutAdmin(){
    return this.http.post(`${this.adminUrl}logout`, {}).pipe(
      tap(() => {
        this.cookieService.delete('token'); // clear the JWT token from the cookie
      })
    );
  }

  //department
  postDepLogin(data: IdepLogin): Observable<IdepLogin> {
    return this.http.post<IdepLogin>(`${this.departmentUrl}login`,data);
  }  
  getDepRegister(){
    return this.http.get<IdepRegistration[]>(`${this.departmentUrl}register`).pipe(map((res:any)=>{
      return res;
    }))
  }
  postDepRegister(data: IdepRegistration): Observable<IdepRegistration> {
    return this.http.post<IdepRegistration>(`${this.departmentUrl}register`,data);
  }

  //student
  postStuLogin(data: IstuLogin): Observable<IstuLogin> {
    return this.http.post<IstuLogin>(`${this.studentUrl}login`,data);
  }  
  getStuRegister(){
    return this.http.get<IstuRegistration[]>(`${this.studentUrl}register`).pipe(map((res:any)=>{
      return res;
    }))
  }
  postStuRegister(data: IstuRegistration): Observable<IstuRegistration> {
    return this.http.post<IstuRegistration>(`${this.studentUrl}register`,data);
  }
}

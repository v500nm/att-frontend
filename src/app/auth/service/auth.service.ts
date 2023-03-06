import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Iloginuser, Iregistration } from './auth.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  adminUrl = "http://localhost:3000/adminlogin/"

  postlogin(data: Iloginuser): Observable<Iloginuser> {
    return this.http.post<Iloginuser>(`${this.adminUrl}login`,data);
  }  
  getregister(){
    return this.http.get<Iregistration[]>(`${this.adminUrl}register`).pipe(map((res:any)=>{
      return res;
    }))
  }
  postregister(data: Iregistration): Observable<Iregistration> {
    return this.http.post<Iregistration>(`${this.adminUrl}register`,data);
  }
}

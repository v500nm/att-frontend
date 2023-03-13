import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BammcService {

  constructor(private http: HttpClient) {}
  baseUrl='http://localhost:3000/bammc/';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl + '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = 'http://localhost:3000/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';
}

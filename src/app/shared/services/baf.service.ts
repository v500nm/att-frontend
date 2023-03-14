import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Ibafattendance, Ibaffaculties, Ibafgroups, Ibafschedule, Ibafstudents, Ibafsubject } from '../interfaces/baf.interface';
import { Iclassroom } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class BafService {
  constructor(private http: HttpClient) {}
  baseUrl='http://localhost:3000/baf';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl + '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = 'http://localhost:3000/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';

  //students
  registerStudent(students: Ibafstudents): Observable<Ibafstudents> {
    return this.http.post<Ibafstudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Ibafstudents[]> {
    return this.http.get<Ibafstudents[]>(this.studentsUrl);
  }

  getStudent(_id: string): Observable<Ibafstudents> {
    return this.http.get<Ibafstudents>(this.studentsUrl + '/' + _id);
  }

  updateStudent(_id: string, students: Ibafstudents): Observable<Ibafstudents> {
    return this.http.put<Ibafstudents>(this.studentsUrl + '/' + _id, students);
  }

  removeStudent(_id: string): Observable<Ibafstudents> {
    return this.http.delete<Ibafstudents>(this.studentsUrl + '/' + _id);
  }
  uploadStu(fileData: FormData): Observable<Ibafstudents[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibafstudents[]>(`${this.studentsUrl}/upload`, fileData, { headers });      
  }  

  //faculties
  addFaculty(faculties: Ibaffaculties): Observable<Ibaffaculties> {
    return this.http.post<Ibaffaculties>(this.facultiesUrl, faculties);
  }

  getAllFaculties(): Observable<Ibaffaculties[]> {
    return this.http.get<Ibaffaculties[]>(this.facultiesUrl);
  }

  getFaculty(faculties: Ibaffaculties): Observable<Ibaffaculties> {
    return this.http.get<Ibaffaculties>(this.facultiesUrl + '/' + faculties._id);
  }

  updateFaculty(_id: string, faculties: Ibaffaculties): Observable<Ibaffaculties> {
    return this.http.put<Ibaffaculties>(
      this.facultiesUrl + '/' + faculties._id,
      faculties
    );
  }

  removeFaculty(_id: string): Observable<Ibaffaculties> {
    return this.http.delete<Ibaffaculties>(this.facultiesUrl + '/' + _id);
  }
  uploadFac(fileData: FormData): Observable<Ibaffaculties[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibaffaculties[]>(`${this.facultiesUrl}/upload`, fileData, { headers });      
  }

  //subjects
  addSubject(subjects: Ibafsubject): Observable<Ibafsubject> {
    return this.http.post<Ibafsubject>(this.subjectUrl, subjects);
  }

  findAllSubjects(): Observable<Ibafsubject[]> {
    return this.http.get<Ibafsubject[]>(this.subjectUrl);
  }

  findSubject(subjects: Ibafsubject): Observable<Ibafsubject> {
    return this.http.get<Ibafsubject>(this.subjectUrl + '/' + subjects._id);
  }

  updateSubject(_id: string, subjects: Ibafsubject): Observable<Ibafsubject> {
    return this.http.put<Ibafsubject>(
      this.subjectUrl + '/' + subjects._id,
      subjects
    );
  }
  uploadSub(fileData: FormData): Observable<Ibafsubject[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibafsubject[]>(`${this.subjectUrl}/upload`, fileData, { headers });      
  }

  removeSubject(_id: string): Observable<Ibafsubject> {
    return this.http.delete<Ibafsubject>(this.subjectUrl + '/' + _id);
  }
  //classroom
  addClass(classroom: Iclassroom): Observable<Iclassroom> {
    return this.http.post<Iclassroom>(this.classroomUrl, classroom);
  }
  findAllClass(): Observable<Iclassroom[]> {
    return this.http.get<Iclassroom[]>(this.classroomUrl);
  }
  findOneClass(classroom: Iclassroom): Observable<Iclassroom> {
    return this.http.get<Iclassroom>(this.classroomUrl + '/' + classroom._id);
  }
  updateClass(_id: string, classroom: Iclassroom): Observable<Iclassroom> {
    return this.http.put<Iclassroom>(
      this.classroomUrl + '/' + classroom._id,
      classroom
    );
  }
  removeClass(_id: string): Observable<Iclassroom> {
    return this.http.delete<Iclassroom>(this.classroomUrl + '/' + _id);
  }
  uploadClass(fileData: FormData): Observable<Iclassroom[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iclassroom[]>(`${this.classroomUrl}/upload`, fileData, { headers });      
  }
  //attendance
  postAtt(attendance: Ibafattendance): Observable<Ibafattendance> {
    return this.http.post<Ibafattendance>(this.attendanceUrl, attendance);
  }

  findAllAtt(): Observable<Ibafattendance[]> {
    return this.http.get<Ibafattendance[]>(this.attendanceUrl);
  }

  findOneAtt(attendance: Ibafattendance): Observable<Ibafattendance> {
    return this.http.get<Ibafattendance>(
      this.attendanceUrl + '/' + attendance._id
    );
  }

  updateAtt(_id: string, attendance: Ibafattendance): Observable<Ibafattendance> {
    return this.http.put<Ibafattendance>(
      this.attendanceUrl + '/' + attendance._id,
      attendance
    );
  }

  removeAtt(_id: string): Observable<Ibafattendance> {
    return this.http.delete<Ibafattendance>(this.attendanceUrl + '/' + _id);
  }
  uploadAtt(fileData: FormData): Observable<Ibafattendance[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibafattendance[]>(`${this.attendanceUrl}/upload`, fileData, { headers });      
  }

  //groups
  createGroup(group: Ibafgroups): Observable<Ibafgroups> {
    return this.http.post<Ibafgroups>(this.groupsUrl, group);
  }

  findAllGroup(): Observable<Ibafgroups[]> {
    return this.http.get<Ibafgroups[]>(this.groupsUrl);
  }

  findOneGroup(group: Ibafgroups): Observable<Ibafgroups> {
    return this.http.get<Ibafgroups>(this.groupsUrl + '/' + group._id);
  }

  updateGroup(_id: string, group: Ibafgroups): Observable<Ibafgroups> {
    return this.http.put<Ibafgroups>(this.groupsUrl + '/' + group._id, group);
  }

  removeGroup(_id: string): Observable<Ibafgroups> {
    return this.http.delete<Ibafgroups>(this.groupsUrl + '/' + _id);
  }
  uploadGrp(fileData: FormData): Observable<Ibafgroups[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibafgroups[]>(`${this.groupsUrl}/upload`, fileData, { headers });      
  }

  //schedule
  createSchedule(schedules: Ibafschedule): Observable<Ibafschedule> {
    return this.http.post<Ibafschedule>(this.scheduleUrl, schedules);
  }

  findAllSchedule(): Observable<Ibafschedule[]> {
    return this.http.get<Ibafschedule[]>(this.scheduleUrl);
  }

  findOneSchedule(schedules: Ibafschedule): Observable<Ibafschedule> {
    return this.http.get<Ibafschedule>(this.scheduleUrl + '/' + schedules._id);
  }

  updateSchedule(_id: string, schedules: Ibafschedule): Observable<Ibafschedule> {
    return this.http.put<Ibafschedule>(
      this.scheduleUrl + '/' + schedules._id,
      schedules
    );
  }
  uploadSch(fileData: FormData): Observable<Ibafschedule[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibafschedule[]>(`${this.scheduleUrl}/upload`, fileData, { headers });      
  }
  removeSchedule(_id: string): Observable<Ibafschedule> {
    return this.http.delete<Ibafschedule>(this.scheduleUrl + '/' + _id);
  }
}

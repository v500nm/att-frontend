import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iitattendance, Iitfaculties, Iitgroups, Iitschedule, Iitstudents, Iitsubject } from '../interfaces/it.interface';
import { Iclassroom } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class ItService {

  constructor(private http: HttpClient) {}
  baseUrl='http://localhost:3000/it';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl+ '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = 'http://localhost:3000/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';

  //students
  registerStudent(students: Iitstudents): Observable<Iitstudents> {
    return this.http.post<Iitstudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Iitstudents[]> {
    return this.http.get<Iitstudents[]>(this.studentsUrl);
  }

  getStudent(_id: string): Observable<Iitstudents> {
    return this.http.get<Iitstudents>(this.studentsUrl + '/' + _id);
  }

  updateStudent(_id: string, students: Iitstudents): Observable<Iitstudents> {
    return this.http.put<Iitstudents>(this.studentsUrl + '/' + _id, students);
  }

  removeStudent(_id: string): Observable<Iitstudents> {
    return this.http.delete<Iitstudents>(this.studentsUrl + '/' + _id);
  }
  uploadStu(fileData: FormData): Observable<Iitstudents[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitstudents[]>(`${this.studentsUrl}/upload`, fileData, { headers });      
  }  

  //faculties
  addFaculty(faculties: Iitfaculties): Observable<Iitfaculties> {
    return this.http.post<Iitfaculties>(this.facultiesUrl, faculties);
  }

  getAllFaculties(): Observable<Iitfaculties[]> {
    return this.http.get<Iitfaculties[]>(this.facultiesUrl);
  }

  getFaculty(faculties: Iitfaculties): Observable<Iitfaculties> {
    return this.http.get<Iitfaculties>(this.facultiesUrl + '/' + faculties._id);
  }

  updateFaculty(_id: string, faculties: Iitfaculties): Observable<Iitfaculties> {
    return this.http.put<Iitfaculties>(
      this.facultiesUrl + '/' + faculties._id,
      faculties
    );
  }

  removeFaculty(_id: string): Observable<Iitfaculties> {
    return this.http.delete<Iitfaculties>(this.facultiesUrl + '/' + _id);
  }
  uploadFac(fileData: FormData): Observable<Iitfaculties[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitfaculties[]>(`${this.facultiesUrl}/upload`, fileData, { headers });      
  }

  //subjects
  addSubject(subjects: Iitsubject): Observable<Iitsubject> {
    return this.http.post<Iitsubject>(this.subjectUrl, subjects);
  }

  findAllSubjects(): Observable<Iitsubject[]> {
    return this.http.get<Iitsubject[]>(this.subjectUrl);
  }

  findSubject(subjects: Iitsubject): Observable<Iitsubject> {
    return this.http.get<Iitsubject>(this.subjectUrl + '/' + subjects._id);
  }

  updateSubject(_id: string, subjects: Iitsubject): Observable<Iitsubject> {
    return this.http.put<Iitsubject>(
      this.subjectUrl + '/' + subjects._id,
      subjects
    );
  }
  uploadSub(fileData: FormData): Observable<Iitsubject[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitsubject[]>(`${this.subjectUrl}/upload`, fileData, { headers });      
  }

  removeSubject(_id: string): Observable<Iitsubject> {
    return this.http.delete<Iitsubject>(this.subjectUrl + '/' + _id);
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
  postAtt(attendance: Iitattendance): Observable<Iitattendance> {
    return this.http.post<Iitattendance>(this.attendanceUrl, attendance);
  }

  findAllAtt(): Observable<Iitattendance[]> {
    return this.http.get<Iitattendance[]>(this.attendanceUrl);
  }

  findOneAtt(attendance: Iitattendance): Observable<Iitattendance> {
    return this.http.get<Iitattendance>(
      this.attendanceUrl + '/' + attendance._id
    );
  }

  updateAtt(_id: string, attendance: Iitattendance): Observable<Iitattendance> {
    return this.http.put<Iitattendance>(
      this.attendanceUrl + '/' + attendance._id,
      attendance
    );
  }

  removeAtt(_id: string): Observable<Iitattendance> {
    return this.http.delete<Iitattendance>(this.attendanceUrl + '/' + _id);
  }
  uploadAtt(fileData: FormData): Observable<Iitattendance[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitattendance[]>(`${this.attendanceUrl}/upload`, fileData, { headers });      
  }

  //groups
  createGroup(group: Iitgroups): Observable<Iitgroups> {
    return this.http.post<Iitgroups>(this.groupsUrl, group);
  }

  findAllGroup(): Observable<Iitgroups[]> {
    return this.http.get<Iitgroups[]>(this.groupsUrl);
  }

  findOneGroup(group: Iitgroups): Observable<Iitgroups> {
    return this.http.get<Iitgroups>(this.groupsUrl + '/' + group._id);
  }

  updateGroup(_id: string, group: Iitgroups): Observable<Iitgroups> {
    return this.http.put<Iitgroups>(this.groupsUrl + '/' + group._id, group);
  }

  removeGroup(_id: string): Observable<Iitgroups> {
    return this.http.delete<Iitgroups>(this.groupsUrl + '/' + _id);
  }
  uploadGrp(fileData: FormData): Observable<Iitgroups[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitgroups[]>(`${this.groupsUrl}/upload`, fileData, { headers });      
  }

  //schedule
  createSchedule(schedules: Iitschedule): Observable<Iitschedule> {
    return this.http.post<Iitschedule>(this.scheduleUrl, schedules);
  }

  findAllSchedule(): Observable<Iitschedule[]> {
    return this.http.get<Iitschedule[]>(this.scheduleUrl);
  }

  findOneSchedule(schedules: Iitschedule): Observable<Iitschedule> {
    return this.http.get<Iitschedule>(this.scheduleUrl + '/' + schedules._id);
  }

  updateSchedule(_id: string, schedules: Iitschedule): Observable<Iitschedule> {
    return this.http.put<Iitschedule>(
      this.scheduleUrl + '/' + schedules._id,
      schedules
    );
  }
  uploadSch(fileData: FormData): Observable<Iitschedule[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Iitschedule[]>(`${this.scheduleUrl}/upload`, fileData, { headers });      
  }
  removeSchedule(_id: string): Observable<Iitschedule> {
    return this.http.delete<Iitschedule>(this.scheduleUrl + '/' + _id);
  }
}

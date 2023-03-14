import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ibammcattendance, Ibammcfaculties, Ibammcgroups, Ibammcschedule, Ibammcstudents, Ibammcsubject } from '../interfaces/bammc.interface';
import { Observable } from 'rxjs';
import { Iclassroom } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class BammcService {

  constructor(private http: HttpClient) {}
  baseUrl='http://localhost:3000/bammc';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl + '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = 'http://localhost:3000/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';

  //students
  registerStudent(students: Ibammcstudents): Observable<Ibammcstudents> {
    return this.http.post<Ibammcstudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Ibammcstudents[]> {
    return this.http.get<Ibammcstudents[]>(this.studentsUrl);
  }

  getStudent(_id: string): Observable<Ibammcstudents> {
    return this.http.get<Ibammcstudents>(this.studentsUrl + '/' + _id);
  }

  updateStudent(_id: string, students: Ibammcstudents): Observable<Ibammcstudents> {
    return this.http.put<Ibammcstudents>(this.studentsUrl + '/' + _id, students);
  }

  removeStudent(_id: string): Observable<Ibammcstudents> {
    return this.http.delete<Ibammcstudents>(this.studentsUrl + '/' + _id);
  }
  uploadStu(fileData: FormData): Observable<Ibammcstudents[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcstudents[]>(`${this.studentsUrl}/upload`, fileData, { headers });      
  }  

  //faculties
  addFaculty(faculties: Ibammcfaculties): Observable<Ibammcfaculties> {
    return this.http.post<Ibammcfaculties>(this.facultiesUrl, faculties);
  }

  getAllFaculties(): Observable<Ibammcfaculties[]> {
    return this.http.get<Ibammcfaculties[]>(this.facultiesUrl);
  }

  getFaculty(faculties: Ibammcfaculties): Observable<Ibammcfaculties> {
    return this.http.get<Ibammcfaculties>(this.facultiesUrl + '/' + faculties._id);
  }

  updateFaculty(_id: string, faculties: Ibammcfaculties): Observable<Ibammcfaculties> {
    return this.http.put<Ibammcfaculties>(
      this.facultiesUrl + '/' + faculties._id,
      faculties
    );
  }

  removeFaculty(_id: string): Observable<Ibammcfaculties> {
    return this.http.delete<Ibammcfaculties>(this.facultiesUrl + '/' + _id);
  }
  uploadFac(fileData: FormData): Observable<Ibammcfaculties[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcfaculties[]>(`${this.facultiesUrl}/upload`, fileData, { headers });      
  }

  //subjects
  addSubject(subjects: Ibammcsubject): Observable<Ibammcsubject> {
    return this.http.post<Ibammcsubject>(this.subjectUrl, subjects);
  }

  findAllSubjects(): Observable<Ibammcsubject[]> {
    return this.http.get<Ibammcsubject[]>(this.subjectUrl);
  }

  findSubject(subjects: Ibammcsubject): Observable<Ibammcsubject> {
    return this.http.get<Ibammcsubject>(this.subjectUrl + '/' + subjects._id);
  }

  updateSubject(_id: string, subjects: Ibammcsubject): Observable<Ibammcsubject> {
    return this.http.put<Ibammcsubject>(
      this.subjectUrl + '/' + subjects._id,
      subjects
    );
  }
  uploadSub(fileData: FormData): Observable<Ibammcsubject[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcsubject[]>(`${this.subjectUrl}/upload`, fileData, { headers });      
  }

  removeSubject(_id: string): Observable<Ibammcsubject> {
    return this.http.delete<Ibammcsubject>(this.subjectUrl + '/' + _id);
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
  postAtt(attendance: Ibammcattendance): Observable<Ibammcattendance> {
    return this.http.post<Ibammcattendance>(this.attendanceUrl, attendance);
  }

  findAllAtt(): Observable<Ibammcattendance[]> {
    return this.http.get<Ibammcattendance[]>(this.attendanceUrl);
  }

  findOneAtt(attendance: Ibammcattendance): Observable<Ibammcattendance> {
    return this.http.get<Ibammcattendance>(
      this.attendanceUrl + '/' + attendance._id
    );
  }

  updateAtt(_id: string, attendance: Ibammcattendance): Observable<Ibammcattendance> {
    return this.http.put<Ibammcattendance>(
      this.attendanceUrl + '/' + attendance._id,
      attendance
    );
  }

  removeAtt(_id: string): Observable<Ibammcattendance> {
    return this.http.delete<Ibammcattendance>(this.attendanceUrl + '/' + _id);
  }
  uploadAtt(fileData: FormData): Observable<Ibammcattendance[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcattendance[]>(`${this.attendanceUrl}/upload`, fileData, { headers });      
  }

  //groups
  createGroup(group: Ibammcgroups): Observable<Ibammcgroups> {
    return this.http.post<Ibammcgroups>(this.groupsUrl, group);
  }

  findAllGroup(): Observable<Ibammcgroups[]> {
    return this.http.get<Ibammcgroups[]>(this.groupsUrl);
  }

  findOneGroup(group: Ibammcgroups): Observable<Ibammcgroups> {
    return this.http.get<Ibammcgroups>(this.groupsUrl + '/' + group._id);
  }

  updateGroup(_id: string, group: Ibammcgroups): Observable<Ibammcgroups> {
    return this.http.put<Ibammcgroups>(this.groupsUrl + '/' + group._id, group);
  }

  removeGroup(_id: string): Observable<Ibammcgroups> {
    return this.http.delete<Ibammcgroups>(this.groupsUrl + '/' + _id);
  }
  uploadGrp(fileData: FormData): Observable<Ibammcgroups[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcgroups[]>(`${this.groupsUrl}/upload`, fileData, { headers });      
  }

  //schedule
  createSchedule(schedules: Ibammcschedule): Observable<Ibammcschedule> {
    return this.http.post<Ibammcschedule>(this.scheduleUrl, schedules);
  }

  findAllSchedule(): Observable<Ibammcschedule[]> {
    return this.http.get<Ibammcschedule[]>(this.scheduleUrl);
  }

  findOneSchedule(schedules: Ibammcschedule): Observable<Ibammcschedule> {
    return this.http.get<Ibammcschedule>(this.scheduleUrl + '/' + schedules._id);
  }

  updateSchedule(_id: string, schedules: Ibammcschedule): Observable<Ibammcschedule> {
    return this.http.put<Ibammcschedule>(
      this.scheduleUrl + '/' + schedules._id,
      schedules
    );
  }
  uploadSch(fileData: FormData): Observable<Ibammcschedule[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http
      .post<Ibammcschedule[]>(`${this.scheduleUrl}/upload`, fileData, { headers });      
  }
  removeSchedule(_id: string): Observable<Ibammcschedule> {
    return this.http.delete<Ibammcschedule>(this.scheduleUrl + '/' + _id);
  }
}

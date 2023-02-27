import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iclassroom, Istudents } from './admin.interface';
import { Ifaculties } from './admin.interface';
import { Igroups } from './admin.interface';
import { Ischedule } from './admin.interface';
import { Isubject } from './admin.interface';
import { Iattendance } from './admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl + '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = this.baseUrl + '/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';
  questionUrl = this.baseUrl + '/question';
  suggestionUrl = this.baseUrl + '/suggestion';

  //students
  registerStudent(students: Istudents): Observable<Istudents> {
    return this.http.post<Istudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Istudents[]> {
    return this.http.get<Istudents[]>(this.studentsUrl);
  }

  getStudent(_id: string): Observable<Istudents> {
    return this.http.get<Istudents>(this.studentsUrl + '/' + _id);
  }

  updateStudent(_id: string, students: Istudents): Observable<Istudents> {
    return this.http.put<Istudents>(this.studentsUrl + '/' + _id, students);
  }

  removeStudent(_id: string): Observable<Istudents> {
    return this.http.delete<Istudents>(this.studentsUrl + '/' + _id);
  }
  uploadStu(students:Istudents):Observable<Istudents>{
    return this.http.post<Istudents>(this.studentsUrl+'/stuUpload',students)
  }

  //faculties
  addFaculty(faculties: Ifaculties): Observable<Ifaculties> {
    return this.http.post<Ifaculties>(this.facultiesUrl, faculties);
  }

  getAllFaculties(): Observable<Ifaculties[]> {
    return this.http.get<Ifaculties[]>(this.facultiesUrl);
  }

  getFaculty(faculties: Ifaculties): Observable<Ifaculties> {
    return this.http.get<Ifaculties>(this.facultiesUrl + '/' + faculties._id);
  }

  updateFaculty(_id: string, faculties: Ifaculties): Observable<Ifaculties> {
    return this.http.put<Ifaculties>(this.facultiesUrl + '/' + _id, faculties);
  }

  removeFaculty(_id: string): Observable<Ifaculties> {
    return this.http.delete<Ifaculties>(this.facultiesUrl + '/' + _id);
  }

  //subjects
  addSubject(subjects: Isubject): Observable<Isubject> {
    return this.http.post<Isubject>(this.subjectUrl, subjects);
  }

  findAllSubjects(): Observable<Isubject[]> {
    return this.http.get<Isubject[]>(this.subjectUrl);
  }

  findSubject(subjects: Isubject): Observable<Isubject> {
    return this.http.get<Isubject>(this.subjectUrl + '/' + subjects._id);
  }

  updateSubject(_id: string, subjects: Isubject): Observable<Isubject> {
    return this.http.put<Isubject>(this.subjectUrl + '/' + _id, subjects);
  }

  removeSubject(_id: string): Observable<Isubject> {
    return this.http.delete<Isubject>(this.subjectUrl + '/' + _id);
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
    return this.http.put<Iclassroom>(this.classroomUrl + '/' + _id, classroom);
  }
  removeClass(_id: string): Observable<Iclassroom> {
    return this.http.delete<Iclassroom>(this.classroomUrl + '/' + _id);
  }
  //attendance
  postAtt(attendance: Iattendance): Observable<Iattendance> {
    return this.http.post<Iattendance>(this.attendanceUrl, attendance);
  }

  findAllAtt(): Observable<Iattendance[]> {
    return this.http.get<Iattendance[]>(this.attendanceUrl);
  }

  findOneAtt(attendance: Iattendance): Observable<Iattendance> {
    return this.http.get<Iattendance>(
      this.attendanceUrl + '/' + attendance.attID
    );
  }

  updateAtt(_id: string, attendance: Iattendance): Observable<Iattendance> {
    return this.http.put<Iattendance>(
      this.attendanceUrl + '/' + attendance.attID,
      attendance
    );
  }

  removeAtt(attID: string): Observable<Iattendance> {
    return this.http.delete<Iattendance>(this.attendanceUrl + '/' + attID);
  }

  //groups
  createGroup(group: Igroups): Observable<Igroups> {
    return this.http.post<Igroups>(this.groupsUrl, group);
  }

  findAllGroup(): Observable<Igroups[]> {
    return this.http.get<Igroups[]>(this.groupsUrl);
  }

  findOneGroup(group: Igroups): Observable<Igroups> {
    return this.http.get<Igroups>(this.groupsUrl + '/' + group._id);
  }

  updateGroup(_id: string, group: Igroups): Observable<Igroups> {
    return this.http.put<Igroups>(this.groupsUrl + '/' + _id, group);
  }

  removeGroup(_id: string): Observable<Igroups> {
    return this.http.delete<Igroups>(this.groupsUrl + '/' + _id);
  }

  //schedule
  createSchedule(schedules: Ischedule): Observable<Ischedule> {
    return this.http.post<Ischedule>(this.scheduleUrl, schedules);
  }

  findAllSchedule(): Observable<Ischedule[]> {
    return this.http.get<Ischedule[]>(this.scheduleUrl);
  }

  findOneSchedule(schedules: Ischedule): Observable<Ischedule> {
    return this.http.get<Ischedule>(this.scheduleUrl + '/' + schedules._id);
  }

  updateSchedule(_id: string, schedules: Ischedule): Observable<Ischedule> {
    return this.http.put<Ischedule>(this.scheduleUrl + '/' + _id, schedules);
  }

  removeSchedule(_id: string): Observable<Ischedule> {
    return this.http.delete<Ischedule>(this.scheduleUrl + '/' + _id);
  }
}
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Iclassroom, Icourses, Istudents } from '../interfaces/admin.interface';
import { Ifaculties } from '../interfaces/admin.interface';
import { Igroups } from '../interfaces/admin.interface';
import { Ischedule } from '../interfaces/admin.interface';
import { Isubject } from '../interfaces/admin.interface';
import { Iattendance } from '../interfaces/admin.interface';

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
  courseUrl = this.baseUrl + '/courses';

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
  uploadStu(fileData: FormData): Observable<Istudents[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Istudents[]>(`${this.studentsUrl}/upload`, fileData, {
      headers,
    });
  }

  //courses
  addCourse(courses: Icourses): Observable<Icourses> {
    return this.http.post<Icourses>(this.courseUrl, courses);
  }

  getAllCourses(): Observable<Icourses[]> {
    return this.http.get<Icourses[]>(this.courseUrl);
  }

  getCourse(_id: string): Observable<Icourses> {
    return this.http.get<Icourses>(this.courseUrl + '/' + _id);
  }

  updateCourse(_id: string, courses: Icourses): Observable<Icourses> {
    return this.http.put<Icourses>(this.courseUrl + '/' + _id, courses);
  }

  removeCourse(_id: string): Observable<Icourses> {
    return this.http.delete<Icourses>(this.courseUrl + '/' + _id);
  }
  uploadCourse(fileData: FormData): Observable<Icourses[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Icourses[]>(`${this.courseUrl}/upload`, fileData, {
      headers,
    });
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
    return this.http.put<Ifaculties>(
      this.facultiesUrl + '/' + faculties._id,
      faculties
    );
  }

  removeFaculty(_id: string): Observable<Ifaculties> {
    return this.http.delete<Ifaculties>(this.facultiesUrl + '/' + _id);
  }
  uploadFac(fileData: FormData): Observable<Ifaculties[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Ifaculties[]>(
      `${this.facultiesUrl}/upload`,
      fileData,
      { headers }
    );
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
    return this.http.put<Isubject>(
      this.subjectUrl + '/' + _id,
      subjects
    );
  }
  uploadSub(fileData: FormData): Observable<Isubject[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Isubject[]>(`${this.subjectUrl}/upload`, fileData, {
      headers,
    });
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
    return this.http.put<Iclassroom>(
      this.classroomUrl + '/' + _id,
      classroom
    );
  }
  removeClass(_id: string): Observable<Iclassroom> {
    return this.http.delete<Iclassroom>(this.classroomUrl + '/' + _id);
  }
  uploadClass(fileData: FormData): Observable<Iclassroom[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Iclassroom[]>(
      `${this.classroomUrl}/upload`,
      fileData,
      { headers }
    );
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
      this.attendanceUrl + '/' + attendance._id
    );
  }

  updateAtt(_id: string, attendance: Iattendance): Observable<Iattendance> {
    return this.http.put<Iattendance>(
      this.attendanceUrl + '/' + attendance._id,
      attendance
    );
  }

  removeAtt(_id: string): Observable<Iattendance> {
    return this.http.delete<Iattendance>(this.attendanceUrl + '/' + _id);
  }
  uploadAtt(fileData: FormData): Observable<Iattendance[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Iattendance[]>(
      `${this.attendanceUrl}/upload`,
      fileData,
      { headers }
    );
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
    return this.http.put<Igroups>(this.groupsUrl + '/' + group._id, group);
  }

  removeGroup(_id: string): Observable<Igroups> {
    return this.http.delete<Igroups>(this.groupsUrl + '/' + _id);
  }
  uploadGrp(fileData: FormData): Observable<Igroups[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Igroups[]>(`${this.groupsUrl}/upload`, fileData, {
      headers,
    });
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
    return this.http.put<Ischedule>(
      this.scheduleUrl + '/' + schedules._id,
      schedules
    );
  }
  uploadSch(fileData: FormData): Observable<Ischedule[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<Ischedule[]>(`${this.scheduleUrl}/upload`, fileData, {
      headers,
    });
  }
  removeSchedule(_id: string): Observable<Ischedule> {
    return this.http.delete<Ischedule>(this.scheduleUrl + '/' + _id);
  }
}

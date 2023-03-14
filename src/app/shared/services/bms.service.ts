import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibmsattendance, Ibmsfaculties, Ibmsgroups, Ibmsschedule, Ibmsstudents, Ibmssubject } from '../interfaces/bms.interface';
import { Iclassroom } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private http: HttpClient) {}
  baseUrl='http://localhost:3000/bms';

  //endpoints
  studentsUrl = this.baseUrl + '/students';
  subjectUrl = this.baseUrl + '/subjects';
  facultiesUrl = this.baseUrl + '/faculties';
  classroomUrl = 'http://localhost:3000/classroom';
  attendanceUrl = this.baseUrl + '/attendance';
  scheduleUrl = this.baseUrl + '/schedule';
  groupsUrl = this.baseUrl + '/groups';

//students
registerStudent(students: Ibmsstudents): Observable<Ibmsstudents> {
  return this.http.post<Ibmsstudents>(this.studentsUrl, students);
}

findAllStudents(): Observable<Ibmsstudents[]> {
  return this.http.get<Ibmsstudents[]>(this.studentsUrl);
}

getStudent(_id: string): Observable<Ibmsstudents> {
  return this.http.get<Ibmsstudents>(this.studentsUrl + '/' + _id);
}

updateStudent(_id: string, students: Ibmsstudents): Observable<Ibmsstudents> {
  return this.http.put<Ibmsstudents>(this.studentsUrl + '/' + _id, students);
}

removeStudent(_id: string): Observable<Ibmsstudents> {
  return this.http.delete<Ibmsstudents>(this.studentsUrl + '/' + _id);
}
uploadStu(fileData: FormData): Observable<Ibmsstudents[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmsstudents[]>(`${this.studentsUrl}/upload`, fileData, { headers });      
}  

//faculties
addFaculty(faculties: Ibmsfaculties): Observable<Ibmsfaculties> {
  return this.http.post<Ibmsfaculties>(this.facultiesUrl, faculties);
}

getAllFaculties(): Observable<Ibmsfaculties[]> {
  return this.http.get<Ibmsfaculties[]>(this.facultiesUrl);
}

getFaculty(faculties: Ibmsfaculties): Observable<Ibmsfaculties> {
  return this.http.get<Ibmsfaculties>(this.facultiesUrl + '/' + faculties._id);
}

updateFaculty(_id: string, faculties: Ibmsfaculties): Observable<Ibmsfaculties> {
  return this.http.put<Ibmsfaculties>(
    this.facultiesUrl + '/' + faculties._id,
    faculties
  );
}

removeFaculty(_id: string): Observable<Ibmsfaculties> {
  return this.http.delete<Ibmsfaculties>(this.facultiesUrl + '/' + _id);
}
uploadFac(fileData: FormData): Observable<Ibmsfaculties[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmsfaculties[]>(`${this.facultiesUrl}/upload`, fileData, { headers });      
}

//subjects
addSubject(subjects: Ibmssubject): Observable<Ibmssubject> {
  return this.http.post<Ibmssubject>(this.subjectUrl, subjects);
}

findAllSubjects(): Observable<Ibmssubject[]> {
  return this.http.get<Ibmssubject[]>(this.subjectUrl);
}

findSubject(subjects: Ibmssubject): Observable<Ibmssubject> {
  return this.http.get<Ibmssubject>(this.subjectUrl + '/' + subjects._id);
}

updateSubject(_id: string, subjects: Ibmssubject): Observable<Ibmssubject> {
  return this.http.put<Ibmssubject>(
    this.subjectUrl + '/' + subjects._id,
    subjects
  );
}
uploadSub(fileData: FormData): Observable<Ibmssubject[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmssubject[]>(`${this.subjectUrl}/upload`, fileData, { headers });      
}

removeSubject(_id: string): Observable<Ibmssubject> {
  return this.http.delete<Ibmssubject>(this.subjectUrl + '/' + _id);
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
postAtt(attendance: Ibmsattendance): Observable<Ibmsattendance> {
  return this.http.post<Ibmsattendance>(this.attendanceUrl, attendance);
}

findAllAtt(): Observable<Ibmsattendance[]> {
  return this.http.get<Ibmsattendance[]>(this.attendanceUrl);
}

findOneAtt(attendance: Ibmsattendance): Observable<Ibmsattendance> {
  return this.http.get<Ibmsattendance>(
    this.attendanceUrl + '/' + attendance._id
  );
}

updateAtt(_id: string, attendance: Ibmsattendance): Observable<Ibmsattendance> {
  return this.http.put<Ibmsattendance>(
    this.attendanceUrl + '/' + attendance._id,
    attendance
  );
}

removeAtt(_id: string): Observable<Ibmsattendance> {
  return this.http.delete<Ibmsattendance>(this.attendanceUrl + '/' + _id);
}
uploadAtt(fileData: FormData): Observable<Ibmsattendance[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmsattendance[]>(`${this.attendanceUrl}/upload`, fileData, { headers });      
}

//groups
createGroup(group: Ibmsgroups): Observable<Ibmsgroups> {
  return this.http.post<Ibmsgroups>(this.groupsUrl, group);
}

findAllGroup(): Observable<Ibmsgroups[]> {
  return this.http.get<Ibmsgroups[]>(this.groupsUrl);
}

findOneGroup(group: Ibmsgroups): Observable<Ibmsgroups> {
  return this.http.get<Ibmsgroups>(this.groupsUrl + '/' + group._id);
}

updateGroup(_id: string, group: Ibmsgroups): Observable<Ibmsgroups> {
  return this.http.put<Ibmsgroups>(this.groupsUrl + '/' + group._id, group);
}

removeGroup(_id: string): Observable<Ibmsgroups> {
  return this.http.delete<Ibmsgroups>(this.groupsUrl + '/' + _id);
}
uploadGrp(fileData: FormData): Observable<Ibmsgroups[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmsgroups[]>(`${this.groupsUrl}/upload`, fileData, { headers });      
}

//schedule
createSchedule(schedules: Ibmsschedule): Observable<Ibmsschedule> {
  return this.http.post<Ibmsschedule>(this.scheduleUrl, schedules);
}

findAllSchedule(): Observable<Ibmsschedule[]> {
  return this.http.get<Ibmsschedule[]>(this.scheduleUrl);
}

findOneSchedule(schedules: Ibmsschedule): Observable<Ibmsschedule> {
  return this.http.get<Ibmsschedule>(this.scheduleUrl + '/' + schedules._id);
}

updateSchedule(_id: string, schedules: Ibmsschedule): Observable<Ibmsschedule> {
  return this.http.put<Ibmsschedule>(
    this.scheduleUrl + '/' + schedules._id,
    schedules
  );
}
uploadSch(fileData: FormData): Observable<Ibmsschedule[]> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  return this.http
    .post<Ibmsschedule[]>(`${this.scheduleUrl}/upload`, fileData, { headers });      
}
removeSchedule(_id: string): Observable<Ibmsschedule> {
  return this.http.delete<Ibmsschedule>(this.scheduleUrl + '/' + _id);
}
}

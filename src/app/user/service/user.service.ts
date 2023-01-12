import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudents } from './user.interface';
import { Ifaculties } from './user.interface';
import { Igroups } from './user.interface';
import { Ischedule } from './user.interface';
import { Isubject } from './user.interface';
import { Iattendance } from './user.interface';
import { Iquestion } from './user.interface';
import { Isuggestion } from './user.interface';
import { demo } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  //endpoints
  demoUrl = this.baseUrl + '/demo';
  studentsUrl = this.baseUrl + '/students';
  facultiesUrl = this.baseUrl + '/faculties';
  attendanceUrl = this.baseUrl + '/attendance';
  groupsUrl = this.baseUrl + '/groups';
  scheduleUrl = this.baseUrl + '/schedule';
  subjectUrl = this.baseUrl + '/subjects';
  questionUrl = this.baseUrl + '/question';
  suggestionUrl = this.baseUrl + '/suggestion';

  //demo
  postOutput(demo:demo):Observable<demo>{
    return this.http.post<demo>(this.demoUrl,demo);
  }
  getOut():Observable<demo[]>{
    return this.http.get<demo[]>(this.demoUrl);
  }
  autoRes(question:string):Observable<demo>{ 
    return this.http.get<demo>(this.demoUrl+'/res');
  }
  getOneOut(id:string):Observable<demo>{
    return this.http.get<demo>(this.demoUrl+'/'+id);
  }

  //students
  registerStudent(students: Istudents): Observable<Istudents> {
    return this.http.post<Istudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Istudents[]> {
    return this.http.get<Istudents[]>(this.studentsUrl);
  }

  getStudent(students:Istudents): Observable<Istudents> {
    return this.http.get<Istudents>(this.studentsUrl+'/'+students.roll);
  }

  updateStudent(students: Istudents): Observable <Istudents>{
    return this.http.put<Istudents>(this.studentsUrl+'/'+students.roll,students);
  }

  removeStudent(roll:string): Observable<Istudents> {
    return this.http.delete<Istudents>(this.studentsUrl+'/'+roll);
  }

  //faculties
  addFaculty(faculties:Ifaculties):Observable<Ifaculties>{
    return this.http.post<Ifaculties>(this.facultiesUrl,faculties);
  }

  getAllFaculties():Observable<Ifaculties[]>{
    return this.http.get<Ifaculties[]>(this.facultiesUrl);
  }

  getFaculty(faculties:Ifaculties):Observable<Ifaculties>{
    return this.http.get<Ifaculties>(this.facultiesUrl+'/'+faculties.fID);
  }

  updateFaculty(faculties:Ifaculties):Observable<Ifaculties>{
    return this.http.put<Ifaculties>(this.facultiesUrl+'/'+faculties.fID,faculties);
  }

  removeFaculty(fID:string):Observable<Ifaculties>{
    return this.http.delete<Ifaculties>(this.facultiesUrl+'/'+fID);
  }

  //attendance
  postAtt(attendance:Iattendance):Observable<Iattendance>{
    return this.http.post<Iattendance>(this.attendanceUrl,attendance);
  }
  
  findAllAtt():Observable<Iattendance[]>{
    return this.http.get<Iattendance[]>(this.attendanceUrl);
  }

  findOneAtt(attendance:Iattendance):Observable<Iattendance>{
    return this.http.get<Iattendance>(this.attendanceUrl+'/'+attendance.attID);
  }

  updateAtt(attendance:Iattendance):Observable<Iattendance>{
    return this.http.put<Iattendance>(this.attendanceUrl+'/'+attendance.attID,attendance);
  }

  removeAtt(attID:string):Observable<Iattendance>{
    return this.http.delete<Iattendance>(this.attendanceUrl+'/'+attID);
  }

  //groups
  createGroup(group:Igroups):Observable<Igroups>{
 return this.http.post<Igroups>(this.groupsUrl,group); 
  }

  findAllGroup():Observable<Igroups[]>{
 return this.http.get<Igroups[]>(this.groupsUrl); 
  }

  findOneGroup(group:Igroups):Observable<Igroups>{
 return this.http.get<Igroups>(this.groupsUrl+'/'+group.gID); 
  }

  updateGroup(group:Igroups):Observable<Igroups>{
 return this.http.put<Igroups>(this.groupsUrl+'/'+group.gID,group); 
  }

  removeGroup(gID:string):Observable<Igroups>{
 return this.http.delete<Igroups>(this.groupsUrl+'/'+gID); 
  }

  //schedule
  createSchedule(schedules:Ischedule):Observable<Ischedule>{
    return this.http.post<Ischedule>(this.scheduleUrl,schedules);
  }

  findAllSchedule():Observable<Ischedule[]>{
    return this.http.get<Ischedule[]>(this.scheduleUrl);
  }

  findOneSchedule(schedules:Ischedule):Observable<Ischedule>{
    return this.http.get<Ischedule>(this.scheduleUrl+'/'+schedules.scID);
  }

  updateSchedule(schedules:Ischedule):Observable<Ischedule>{
    return this.http.put<Ischedule>(this.scheduleUrl+'/'+schedules.scID,schedules);
  }

  removeSchedule(scID:string):Observable<Ischedule>{
    return this.http.delete<Ischedule>(this.scheduleUrl+'/'+scID);
  }

  //subjects
  addSubject(subjects:Isubject):Observable<Isubject>{
    return this.http.post<Isubject>(this.subjectUrl,subjects);
  }

  findAllSubjects():Observable<Isubject[]>{
    return this.http.get<Isubject[]>(this.subjectUrl);
  }

  findSubject(subjects:Isubject):Observable<Isubject>{
    return this.http.get<Isubject>(this.subjectUrl+'/'+subjects.subID);
  }

  updateSubject(subjects:Isubject):Observable<Isubject>{
    return this.http.put<Isubject>(this.subjectUrl+'/'+subjects.subID,subjects);
  }

  removeSubject(subID:string):Observable<Isubject>{
    return this.http.delete<Isubject>(this.subjectUrl+'/'+subID);
  }


  //question
  createQuestion(questions:Iquestion):Observable<Iquestion>{
    return this.http.post<Iquestion>(this.questionUrl,questions);
  }

  findAllQuestion():Observable<Iquestion[]>{
    return this.http.get<Iquestion[]>(this.questionUrl);
  }

  findOneQuestion(questions:Iquestion):Observable<Iquestion>{
    return this.http.get<Iquestion>(this.questionUrl+'/'+questions.qID);
  }

  updateQuestion(questions:Iquestion):Observable<Iquestion>{
    return this.http.put<Iquestion>(this.questionUrl+'/'+questions.qID,questions);
  }

  removeQuestion(qID:string):Observable<Iquestion>{
    return this.http.delete<Iquestion>(this.questionUrl+'/'+qID);
  }

  //suggestion
  createSuggestion(suggestions:Isuggestion):Observable<Isuggestion>{
    return this.http.post<Isuggestion>(this.suggestionUrl,suggestions);
  }

  findAllSuggestion():Observable<Isuggestion[]>{
    return this.http.get<Isuggestion[]>(this.suggestionUrl);
  }

  findOneSuggestion(suggestions:Isuggestion):Observable<Isuggestion>{
    return this.http.get<Isuggestion>(this.suggestionUrl+'/'+suggestions.sugID);
  }

  updateSuggestion(suggestions:Isuggestion):Observable<Isuggestion>{
    return this.http.put<Isuggestion>(this.suggestionUrl+'/'+suggestions.sugID,suggestions);
  }

  removeSuggestion(sugID:string):Observable<Isuggestion>{
    return this.http.delete<Isuggestion>(this.suggestionUrl+'/'+sugID);
  }

}

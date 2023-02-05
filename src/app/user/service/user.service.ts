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
import { Iclassroom } from './user.interface';

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
  classroomUrl = this.baseUrl + '/classroom';


  //students
  registerStudent(students: Istudents): Observable<Istudents> {
    return this.http.post<Istudents>(this.studentsUrl, students);
  }

  findAllStudents(): Observable<Istudents[]> {
    return this.http.get<Istudents[]>(this.studentsUrl);
  }

  getStudent(_id: string): Observable<Istudents> {
    return this.http.get<Istudents>(this.studentsUrl+'/'+_id);
  }

  updateStudent(students: Istudents, _id: string): Observable<Istudents> {
    return this.http.put<Istudents>(this.studentsUrl+'/'+_id, students);
  }

  removeStudent(_id: string): Observable<Istudents> {
    return this.http.delete<Istudents>(this.studentsUrl+'/'+_id);
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

  updateFaculty(faculties: Ifaculties): Observable<Ifaculties> {
    return this.http.put<Ifaculties>(
      this.facultiesUrl + '/' + faculties._id,
      faculties
    );
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

  updateSubject(subjects: Isubject): Observable<Isubject> {
    return this.http.put<Isubject>(
      this.subjectUrl + '/' + subjects._id,
      subjects
    );
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
  updateClass(classroom: Iclassroom): Observable<Iclassroom> {
    return this.http.put<Iclassroom>(
      this.classroomUrl + '/' + classroom._id,
      classroom
    );
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

  updateAtt(attendance: Iattendance): Observable<Iattendance> {
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

  updateGroup(group: Igroups): Observable<Igroups> {
    return this.http.put<Igroups>(this.groupsUrl + '/' + group._id, group);
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

  updateSchedule(schedules: Ischedule): Observable<Ischedule> {
    return this.http.put<Ischedule>(
      this.scheduleUrl + '/' + schedules._id,
      schedules
    );
  }

  removeSchedule(_id: string): Observable<Ischedule> {
    return this.http.delete<Ischedule>(this.scheduleUrl + '/' + _id);
  }

  //question
  createQuestion(questions: Iquestion): Observable<Iquestion> {
    return this.http.post<Iquestion>(this.questionUrl, questions);
  }

  findAllQuestion(): Observable<Iquestion[]> {
    return this.http.get<Iquestion[]>(this.questionUrl);
  }

  findOneQuestion(questions: Iquestion): Observable<Iquestion> {
    return this.http.get<Iquestion>(this.questionUrl + '/' + questions.qID);
  }

  updateQuestion(questions: Iquestion): Observable<Iquestion> {
    return this.http.put<Iquestion>(
      this.questionUrl + '/' + questions.qID,
      questions
    );
  }

  removeQuestion(qID: string): Observable<Iquestion> {
    return this.http.delete<Iquestion>(this.questionUrl + '/' + qID);
  }

  //suggestion
  createSuggestion(suggestions: Isuggestion): Observable<Isuggestion> {
    return this.http.post<Isuggestion>(this.suggestionUrl, suggestions);
  }

  findAllSuggestion(): Observable<Isuggestion[]> {
    return this.http.get<Isuggestion[]>(this.suggestionUrl);
  }

  findOneSuggestion(suggestions: Isuggestion): Observable<Isuggestion> {
    return this.http.get<Isuggestion>(
      this.suggestionUrl + '/' + suggestions.sugID
    );
  }

  updateSuggestion(suggestions: Isuggestion): Observable<Isuggestion> {
    return this.http.put<Isuggestion>(
      this.suggestionUrl + '/' + suggestions.sugID,
      suggestions
    );
  }

  removeSuggestion(sugID: string): Observable<Isuggestion> {
    return this.http.delete<Isuggestion>(this.suggestionUrl + '/' + sugID);
  }
}

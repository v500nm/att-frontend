import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'defaulter', component: DefaulterComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'schedule', component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

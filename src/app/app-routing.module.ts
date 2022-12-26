import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'defaulter', component: DefaulterComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'attendance', component:AttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

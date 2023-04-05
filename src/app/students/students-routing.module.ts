import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SubjectComponent } from './pages/subject/subject.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {path:'attendance',component:AttendanceComponent},
  {path:'defaulter',component:DefaulterComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'subject',component:SubjectComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}

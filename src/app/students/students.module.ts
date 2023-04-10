import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AttendanceComponent,
    DashboardComponent,
    DefaulterComponent,
    ScheduleComponent,
    SubjectComponent,
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SidebarModule,ButtonModule,TableModule,DropdownModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }

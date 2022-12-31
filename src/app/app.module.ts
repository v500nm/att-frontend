import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {SidebarModule} from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './user/pages/dashboard/dashboard.component';
import { HeaderComponent } from './user/components/header/header.component';
import { SidebarComponent } from './user/components/sidebar/sidebar.component';
import { AttendanceComponent } from './user/pages/attendance/attendance.component';
import { DefaulterComponent } from './user/pages/defaulter/defaulter.component';
import { SubjectComponent } from './user/pages/subject/subject.component';
import { ChatComponent } from './user/pages/chat/chat.component';
import { ScheduleComponent } from './user/pages/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AttendanceComponent,
    DefaulterComponent,
    SubjectComponent,
    ChatComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

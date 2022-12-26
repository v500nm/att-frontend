import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {SidebarModule} from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';
import { SubjectComponent } from './pages/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    AttendanceComponent,
    DefaulterComponent,
    SubjectComponent
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

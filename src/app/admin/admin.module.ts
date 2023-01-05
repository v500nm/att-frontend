import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import { InputTextModule } from "primeng/inputtext";
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './pages/students/students.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

@NgModule({
  declarations: [
    DashboardComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent,
       StudentsComponent,
       SchedulesComponent,
       ChatbotComponent
  ],
  imports: [
    SidebarModule,
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    CalendarModule
  ]
})
export class AdminModule { }

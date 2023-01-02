import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { InputTextModule } from "primeng/inputtext";
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './pages/students/students.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';


@NgModule({
  declarations: [
    DashboardComponent,
       ChatbotComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent,
       StudentsComponent,
       SchedulesComponent
  ],
  imports: [
    SidebarModule,
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class AdminModule { }

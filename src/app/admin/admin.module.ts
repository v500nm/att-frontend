import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import { InputTextModule } from "primeng/inputtext";
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    DashboardComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent,
       ChatbotComponent,
       SchedulesComponent
  ],
  imports: [
    SidebarModule,
    CommonModule,
    AdminRoutingModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    TabViewModule,
    TableModule,
    SplitButtonModule
  ]
})
export class AdminModule { }

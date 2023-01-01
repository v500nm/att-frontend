import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
       ChatbotComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent
  ],
  imports: [
    SidebarModule,
    CommonModule,
    AdminRoutingModule,
    ButtonModule
  ]
})
export class AdminModule { }

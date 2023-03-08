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
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ListboxModule} from 'primeng/listbox';
import { AttmarkComponent } from './pages/attmark/attmark.component';
import {FileUploadModule} from 'primeng/fileupload';
import { AssignComponent } from './pages/assign/assign.component';


@NgModule({
  declarations: [
    DashboardComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent,
       ChatbotComponent,
       AttmarkComponent,
       AssignComponent
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
    SplitButtonModule,
    ListboxModule,
    FileUploadModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AttmarkComponent } from './pages/attmark/attmark.component';
import { AssignComponent } from './pages/assign/assign.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ListboxModule} from 'primeng/listbox';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  declarations: [
    DashboardComponent,
       HeaderComponent,
       SidebarComponent,
       FooterComponent,
       AttmarkComponent,
       AssignComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItComponent } from './pages/it/it.component';
import { BmsComponent } from './pages/bms/bms.component';
import { BafComponent } from './pages/baf/baf.component';
import { BammcComponent } from './pages/bammc/bammc.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ListboxModule } from 'primeng/listbox';
import { FileUploadModule } from 'primeng/fileupload';
import {AccordionModule} from 'primeng/accordion';
import { OthersComponent } from './pages/others/others.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    OthersComponent,
    BmsComponent,
    ItComponent,BafComponent,BammcComponent
  ],
  imports: [CommonModule, DepartmentRoutingModule,SidebarModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    TabViewModule,
    TableModule,
    AccordionModule,
    SplitButtonModule,
    ListboxModule,
    FileUploadModule],
})
export class DepartmentModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ListboxModule } from 'primeng/listbox';
import { FileUploadModule } from 'primeng/fileupload';
import { AssignfacComponent } from './pages/assignfac/assignfac.component';
import { AddsubsComponent } from './pages/addsubs/addsubs.component';
import { AddclassComponent } from './pages/addclass/addclass.component';
import { ManagelogsComponent } from './pages/managelogs/managelogs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AssignfacComponent,
    AddsubsComponent,
    AddclassComponent,
    ManagelogsComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
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
    FileUploadModule,
  ],
})
export class AdminModule {}

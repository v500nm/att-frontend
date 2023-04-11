import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';  
import {SplitterModule} from 'primeng/splitter';
import { KnobModule } from "primeng/knob";
import {TableModule} from 'primeng/table';
import { AuthGuard } from './shared/guards/auth.guard';
import { DepartmentGuard } from './shared/guards/department.guard';
import { StudentGuard } from './shared/guards/student.guard';
import { AuthService } from './shared/services/auth.service';
import { AdminService } from './shared/services/admin.service';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    FormsModule,
    SplitterModule,
    KnobModule,
    TableModule,
  ],
  providers: [AuthGuard,DepartmentGuard,StudentGuard,AuthService,AdminService,UserService],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

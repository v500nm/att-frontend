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
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ItComponent,
    BmsComponent,
    BafComponent,
    BammcComponent,
    WorkshopsComponent,
    SeminarsComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }

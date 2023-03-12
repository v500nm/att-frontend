import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItComponent } from './pages/it/it.component';
import { SeminarsComponent } from './pages/seminars/seminars.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { BmsComponent } from './pages/bms/bms.component';
import { BafComponent } from './pages/baf/baf.component';
import { BammcComponent } from './pages/bammc/bammc.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'it',component:ItComponent},
  {path:'bms',component:BmsComponent},
  {path:'baf',component:BafComponent},
  {path:'bammc',component:BammcComponent},
  {path:'seminars',component:SeminarsComponent},
  {path:'workshops',component:WorkshopsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

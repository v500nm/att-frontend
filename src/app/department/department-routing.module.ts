import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItComponent } from './pages/it/it.component';
import { BmsComponent } from './pages/bms/bms.component';
import { BafComponent } from './pages/baf/baf.component';
import { BammcComponent } from './pages/bammc/bammc.component';
import { OthersComponent } from './pages/others/others.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'it',component:ItComponent},
  {path:'bms',component:BmsComponent},
  {path:'baf',component:BafComponent},
  {path:'bammc',component:BammcComponent},
  {path:'others',component:OthersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

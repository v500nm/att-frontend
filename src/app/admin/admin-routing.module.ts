import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttmarkComponent } from './pages/attmark/attmark.component';
import { AssignComponent } from './pages/assign/assign.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'attendance', component:AttmarkComponent},
  {path:'assign', component:AssignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class AdminRoutingModule { }

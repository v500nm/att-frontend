import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddclassComponent } from './pages/addclass/addclass.component';
import { AddsubsComponent } from './pages/addsubs/addsubs.component';
import { AssignfacComponent } from './pages/assignfac/assignfac.component';
import { ManagelogsComponent } from './pages/managelogs/managelogs.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path:'addclass',component:AddclassComponent},
  {path:'addsubs',component:AddsubsComponent},
  {path:'assignfac',component:AssignfacComponent},
  {path:'managelogs',component:ManagelogsComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { StudentGuard } from './shared/guards/student.guard';
import { DepartmentGuard } from './shared/guards/department.guard';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule), canActivate:[AuthGuard]},
  {path:'student', loadChildren:()=>import('./students/students.module').then(m=>m.StudentsModule),canActivate:[StudentGuard]},
  {path:'department',loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule),canActivate:[DepartmentGuard]},
  {path:'cr',loadChildren:()=>import('./cr/cr.module').then(cr=>cr.CrModule)},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
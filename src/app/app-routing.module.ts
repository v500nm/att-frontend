import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule), canActivate:[AuthGuard]},
  {path:'student', loadChildren:()=>import('./students/students.module').then(m=>m.StudentsModule)},
  {path:'department',loadChildren:()=>import('./department/department.module').then(m=>m.DepartmentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
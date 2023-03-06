import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:()=> import('./initial/initial.module').then(m=>m.InitialModule)},
  {path: 'user', loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'login', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
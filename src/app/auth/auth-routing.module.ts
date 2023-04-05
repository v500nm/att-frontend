import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdregisterComponent } from './adregister/adregister.component';
import { DeploginComponent } from './deplogin/deplogin.component';
import { DepregisterComponent } from './depregister/depregister.component';
import { StuloginComponent } from './stulogin/stulogin.component';
import { SturegisterComponent } from './sturegister/sturegister.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'adminlogin', component: AdloginComponent },
  { path: 'adminregister', component: AdregisterComponent },
  { path: 'departmentlogin', component: DeploginComponent },
  { path: 'departmentregister', component: DepregisterComponent },
  { path: 'studentlogin', component: StuloginComponent },
  { path: 'studentregister', component: SturegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

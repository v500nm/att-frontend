import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaulterComponent } from './pages/defaulter/defaulter.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'defaulter',component:DefaulterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrRoutingModule { }

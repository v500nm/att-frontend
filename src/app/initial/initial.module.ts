import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { StartComponent } from './pages/start/start.component';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    InitialRoutingModule
  ]
})
export class InitialModule { }

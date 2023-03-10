import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdregisterComponent } from './adregister/adregister.component';
import { DeploginComponent } from './deplogin/deplogin.component';
import { DepregisterComponent } from './depregister/depregister.component';
import { StuloginComponent } from './stulogin/stulogin.component';
import { SturegisterComponent } from './sturegister/sturegister.component';

@NgModule({
  declarations: [
    AdloginComponent,
    AdregisterComponent,
    DeploginComponent,
    DepregisterComponent,
    StuloginComponent,
    SturegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

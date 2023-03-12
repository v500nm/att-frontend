import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';  
import {SplitterModule} from 'primeng/splitter';
import { KnobModule } from "primeng/knob";
import {TableModule} from 'primeng/table';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    FormsModule,
    SplitterModule,
    KnobModule,
    TableModule,
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { AttmarkComponent } from './pages/attmark/attmark.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'chatbot', component:ChatbotComponent},
  {path: 'attendance', component:AttmarkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}) 
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'chatbot', component:ChatbotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

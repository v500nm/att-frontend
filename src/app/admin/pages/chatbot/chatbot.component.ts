import { Component, OnInit } from '@angular/core';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit{
  inputLabel:any;
  constructor( private chatbotService:ChatbotService){}
  ngOnInit(): void {
    
  }
  submitChat(){

  }
}

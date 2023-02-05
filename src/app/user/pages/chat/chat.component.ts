import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import {
 
  Iattendance,
  Ifaculties,
  Igroups,
  Iquestion,
  Ischedule,
  Istudents,
  Isubject,
  Isuggestion,
  AttStatus,
} from '../../service/user.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  title = 'chatbot';
  constructor(private userService: UserService) {}
 
}

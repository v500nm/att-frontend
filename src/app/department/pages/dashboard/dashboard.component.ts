import { Component } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Iclassroom,
  Igroups,
  Istudents,
  Isubject,
  roles
} from '../../../shared/interfaces/admin.interface';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
}

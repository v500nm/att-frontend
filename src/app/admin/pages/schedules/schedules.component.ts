import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
import { Igroups, Ischedule } from '../../service/admin.interface';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit {
  display: boolean = false;
  showDialog() {
    this.display = true;
  }

  formValue!: FormGroup;
  scheduleData: Ischedule[] = [];
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.findAllSchedule();
    this.formValue = this.formsbuilder.group({
      scheduleName: new FormControl(''),
      Date: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      groups: this.formsbuilder.array([
        this.formsbuilder.group({
          gName: new FormControl(''),
        }),
      ]),
      faculty: this.formsbuilder.array([
        this.formsbuilder.group({
          fname: new FormControl('')
        })
      ]),
      subject: this.formsbuilder.array([
        this.formsbuilder.group({
           subjectName: new FormControl('')
        })
      ])
    });
  }

  findAllSchedule() {
    this.adminService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.scheduleData = Response;
      console.log(Response,'allData');
    });
  }

  postSch(){
    this.scheduleData = this.formValue.value;
    console.log(this.scheduleData);
    this.adminService.createSchedule(this.formValue.value)
    .subscribe((Response)=>{
      console.log(Response,'post Method')
    })
  }
}

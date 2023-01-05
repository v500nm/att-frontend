import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent {
  dob: any;

  cities = [
    { name: "First Year" },
    { name: "Second Year" },
    { name: "Third Year" }
  ]

  Lecture = [
    { name: "1" },
    { name: "2" },
    { name: "3" }
  ]

  Month = [
    { name: "Mon" },
    { name: "Tue" },
    { name: "Wed" },
    { name: "Thu" },
    { name: "Fri" },
    { name: "Sat" },
    { name: "Sun" }
  ]

  Days = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" }
  ]

  Room = [
    { name: "601" },
    { name: "602" },
    { name: "603" },
    { name: "604" },
    { name: "605" },
    { name: "606" },
    { name: "607" },
    { name: "608" },
    { name: "701-A" },
    { name: "701-B" },
    { name: "702" },
    { name: "704" },
    { name: "705" },
    { name: "706" },
    { name: "707" },
    { name: "708" },

  ]
}

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
   







  

  

  products=[
		{
			"id": "1000",
			"code": "333",
			"name": "Adhan",
			"category": "P",
			"quantity": "A",
		},
		{
			"id": "1001",
			"code": "370",
			"name": "Rohan ",
			"category": "A",
			"quantity": "P",
		},
		{
			"id": "1002",
			"code": "317",
			"name": "Shivam",
			"category": "P",
			"quantity": "P",
		},
    {
			"id": "1003",
			"code": "369",
			"name": "Pankaj",
			"category": "A",
			"quantity": "A",
		},
	]
}

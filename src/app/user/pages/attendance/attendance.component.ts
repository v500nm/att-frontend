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
   
  cities: City[];
  selectedCity1: City | undefined;
  selectedCity2: City | undefined;

  items: SelectItem[];
  Years: { name: string; code: string; }[];




  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.cities = [
      { name: 'January', code: 'Jan' },
      { name: 'February', code: 'Feb' },
      { name: 'March', code: 'Mar' },
      { name: 'April', code: 'Apr' },
      { name: 'May', code: 'May' },
      { name: 'June', code: 'Jun' },
      { name: 'July', code: 'Jul' },
      { name: 'August', code: 'Aug' },
      { name: 'September', code: 'Sep' },
      { name: 'October', code: 'Oct' },
      { name: 'November', code: 'Nov' },
      { name: 'December', code: 'Dec' },
    ];
    
       this.Years = [
      { name: '2023', code: '23' },
      { name: '2024', code: '24' },
      { name: '2025', code: '25' },
      { name: '2026', code: '26' },
      { name: '2027', code: '27' },
      { name: '2028', code: '28' },
      { name: '2029', code: '29' },

    ];


  }

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

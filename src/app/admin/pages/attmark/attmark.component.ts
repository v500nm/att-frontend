import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-attmark',
  templateUrl: './attmark.component.html',
  styleUrls: ['./attmark.component.scss'],
})
export class AttmarkComponent implements OnInit{
  // countries: any[];
  // selectedCountries: any[];


  constructor(private adminservice: AdminService) {
  
  }
  ngOnInit() {
 
  }
}

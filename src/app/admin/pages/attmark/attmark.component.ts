import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Iattendance, Igroups, Ischedule } from '../../service/admin.interface';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-attmark',
  templateUrl: './attmark.component.html',
  styleUrls: ['./attmark.component.scss'],
})
export class AttmarkComponent implements OnInit {
  // countries: any[];
  // selectedCountries: any[];

  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
  display: boolean = false;
  loading: boolean = true;

  showDialog() {
    this.display = true;
  }
  schValue!: FormGroup;
  grpValue!: FormGroup;
  attValue!: FormGroup;

  schData: Ischedule[] = [];
  grpData: Igroups[] = [];
  attData: Iattendance[] = [];

  ngOnInit() {
    this.findAllSchedule();
    this.findAllGroups();
    this.findAllAtt();

    this.schValue = this.formsbuilder.group({
      scheduleName: new FormControl(''),
      Date: new FormControl(''),
      timing: new FormControl(''),
      duration: new FormControl(''),
      groups: new FormControl(''),
      faculties: new FormControl(''),
      subjects: new FormControl(''),
      classrooms: new FormControl(''),
    });
    this.grpValue = this.formsbuilder.group({
      gName: new FormControl(''),
      students: new FormControl(''),
    });
  }

  //att
  findAllAtt(){
    this.adminService.findAllAtt().subscribe((res:Iattendance[])=>{
      this.attData=res;
      console.log(res, 'att get')
    })
  }
  markAtt(){
    this.attData=this.attValue.value;
    console.log(this.attData);
    this.adminService.postAtt(this.attValue.value)
    .subscribe((res)=>{
      console.log(res,'att post');
    });
    this.findAllAtt();
  }

  //Schedule
  findAllSchedule() {
    this.adminService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.schData = Response;
      console.log(Response, 'schedule get');
    });
  }
  postSch() {
    this.schData = this.schValue.value;
    console.log(this.schData);
    this.adminService
      .createSchedule(this.schValue.value)
      .subscribe((Response) => {
        console.log(Response, 'schedule post');
      });
    this.findAllSchedule();
  }
  removeSch(_id: string) {
    this.adminService.removeSchedule(_id).subscribe((res) => {
      this.findAllSchedule();
    });
  }

  //groups
  findAllGroups() {
    this.adminService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  createGroup() {
    this.grpData = this.grpValue.value;
    console.log(this.grpData);
    this.adminService.createGroup(this.grpValue.value).subscribe((res) => {
      console.log(res, 'group post');
    });
    this.findAllGroups();
  }
  removeGroup(_id: string) {
    this.adminService.removeGroup(_id).subscribe((res) => {
      this.findAllGroups();
    });
  }
}

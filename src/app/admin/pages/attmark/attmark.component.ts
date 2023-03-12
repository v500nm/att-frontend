import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  Iattendance,
  Iclassroom,
  Ifaculties,
  Igroups,
  Ischedule,
  Istudents,
  Isubject,
} from '../../../shared/interfaces/admin.interface';
enum stats{
  
}
@Component({
  selector: 'app-attmark',
  templateUrl: './attmark.component.html',
  styleUrls: ['./attmark.component.scss'],
})
export class AttmarkComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
  display: boolean = false;
  AttDisplay:boolean=false;
  loading: boolean = true;
  stuSwitch: boolean = true;

  markAttDisplay(){
    this.AttDisplay=true;
  }
  showDialog() {
    this.display = true;
  }
  stuValue!: FormGroup;
  facValue!: FormGroup;
  subValue!: FormGroup;
  classValue!: FormGroup;
  schValue!: FormGroup;
  grpValue!: FormGroup;
  attValue!: FormGroup;

  attData: Iattendance[] = [];
  stuData: Istudents[] = [];
  facData: Ifaculties[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];
  schData: Ischedule[] = [];
  grpData: Igroups[] = [];

  ngOnInit() {
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });
    //forms
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });

    this.findAllStudents();
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.findAllSchedule();
    this.findAllGroup();
    this.findAllAtt();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
    })),
      (this.facValue = this.formsbuilder.group({
        fname: new FormControl(''),
        department: new FormControl(''),
        designation: new FormControl(''),
      })),
      (this.subValue = this.formsbuilder.group({
        subject: new FormControl(''),
      })),
      (this.classValue = this.formsbuilder.group({
        class: new FormControl(''),
      })),
      (this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
        students: new FormControl(''),
      }));
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
    this.attValue = this.formsbuilder.group({
      schedule:new FormControl(''),
      stats:new FormControl(''),
      markStudents:new FormControl('')
    });
  }

  //att
 
  findAllAtt() {
    this.adminService.findAllAtt().subscribe((res: Iattendance[]) => {
      this.attData = res;
      console.log(res, 'att get');
    });
  }
  markAtt() {
    this.attData = this.attValue.value;
    console.log(this.attData);
    this.adminService.postAtt(this.attValue.value).subscribe((res) => {
      console.log(res, 'att post');
    });
    this.findAllAtt();
    this.attValue.reset();
  }
  removeAtt(_id:string){

  }
  recoverAtt(attData:any){

  }
  updateAtt(){

  }

  //schedule
  findAllSchedule() {
    this.adminService.findAllSchedule().subscribe((Response: Ischedule[]) => {
      this.schData = Response;
      console.log(Response, 'allData');
    });
  }
  postSch() {
    this.schData = this.schValue.value;
    console.log(this.schData);
    this.adminService
      .createSchedule(this.schValue.value)
      .subscribe((Response) => {
        console.log(Response, 'post Method');
      });
    this.findAllSchedule();
    this.schValue.reset();
  }
  removeSch(_id: string) {
    this.adminService.removeSchedule(_id).subscribe((res) => {
      this.findAllSchedule();
    });
  }
  recoverSch(schData: any) {
    delete schData.__v;
    this.schValue.addControl('_id', new FormControl(''));
    this.schValue.setValue(schData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.schData, 'sch coming');
  }
  updateSch() {
    const id = this.schValue.value._id;
    this.adminService
      .updateSchedule(id, this.schValue.value)
      .subscribe((res: any) => {
        this.schData = res;
        this.stuSwitch = true;
        this.findAllSchedule();
      });
    this.schValue.reset();
  }

  //groups
  findAllGroup() {
    this.adminService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
    });
  }
  //students
  findAllStudents() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.stuData = res;
      console.log(res, 'students get');
    });
  }
  //faculties
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }

  //subjects
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  //classroom
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
}

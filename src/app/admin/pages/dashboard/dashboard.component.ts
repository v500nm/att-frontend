import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Istudents } from 'src/app/user/service/user.interface';
import {
  Iclassroom,
  Ifaculties,
  Isubject,
} from '../../service/admin.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}

  display: boolean = false;
  showDialog() {
    this.display = true;
  }
  value1: any;
  stuValue!: FormGroup;
  facValue!: FormGroup;
  subValue!: FormGroup;
  classValue!: FormGroup;
  stuData: Istudents[] = [];
  facData: Ifaculties[] = [];
  subData: Isubject[] = [];
  classData: Iclassroom[] = [];

  ngOnInit(): void {
    this.getAllFaculties();
    this.findAllSubjects();
    this.findAllClass();
    this.facValue = this.formsbuilder.group({
      fName: new FormControl(''),
    }),
    this.subValue = this.formsbuilder.group({
        subName: new FormControl(''),
      }),
    this.classValue = this.formsbuilder.group({
      classroom: new FormControl(''),
    });
  }
  //   finAllStudent() {
  //     this.adminService.findAllStudents()
  //     .subscribe((res:Istudents[])=>{
  // this.stuData=res;
  //     })
  //   }

  //faculties
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }
  postFac() {
    this.facData = this.facValue.value;
    console.log(this.facData);
    this.adminService.addFaculty(this.facValue.value).subscribe((res) => {
      console.log(res, 'faculty post');
    });
  }

  //subjects
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  postSub() {
    this.subData = this.subValue.value;
    console.log(this.subData);
    this.adminService.addSubject(this.subValue.value).subscribe((res) => {
      console.log(res, 'subject post');
    });
  }

  //classroom
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  postClass() {
    this.classData = this.classValue.value;
    console.log(this.classData);
    this.adminService.addClass(this.classValue.value).subscribe((res) => {
      console.log(res, 'class post');
    });
  }
}

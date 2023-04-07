import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  Iclassroom,
  Icourses,
} from 'src/app/shared/interfaces/admin.interface';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.scss'],
})
export class AddclassComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formsbuilder: FormBuilder
  ) {}
  activeIndex: number = 0;
  stuSwitch: boolean = true;
  display: boolean = false;
  uploadDialog: boolean = false;
  AttDisplay: boolean = false;
  displayEdit: boolean = false;
  displayMaximizable: boolean = false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
  }
  importDialog() {
    this.uploadDialog = true;
  }
  courseValue!: FormGroup;
  classValue!: FormGroup;

  courseData: Icourses[] = [];
  classData: Iclassroom[] = [];
  ngOnInit(): void {
    this.adminService.getAllCourses().subscribe((res) => {
      this.courseData = res;
      this.loading = false;
    });
    this.adminService.findAllClass().subscribe((res) => {
      this.classData = res;
      this.loading = false;
    });
    this.getAllCourses();
    this.findAllClass();

    (this.courseValue = this.formsbuilder.group({
      courses: new FormControl(''),
      semester: new FormControl(''),
    })),
      (this.classValue = this.formsbuilder.group({
        class: new FormControl(''),
      }));
  }
  getAllCourses() {
    this.adminService.getAllCourses().subscribe((res: Icourses[]) => {
      this.courseData = res;
      console.log(res, 'courses');
    });
  }
  addCourse() {
    this.courseData = this.courseValue.value;
    console.log(this.courseData);
    this.adminService.addCourse(this.courseValue.value).subscribe((res) => {
      console.log(res, 'course post');
      this.courseValue.reset();
      this.getAllCourses();
    });
  }
  removeCourse(_id: string) {
    this.adminService.removeCourse(_id).subscribe((res) => {
      this.getAllCourses();
      console.log(res, 'delete course');
    });
  }
  recoverCourse(courseData: any) {
    delete courseData.__v;
    this.courseValue.addControl('_id', new FormControl(''));
    this.courseValue.setValue(courseData);
    this.showDialog();
    this.stuSwitch = false;
    console.log(this.courseData, 'course recover');
  }
  updateCourse() {
    const id = this.courseValue.value._id;
    this.adminService
      .updateCourse(id, this.courseValue.value)
      .subscribe((res: any) => {
        this.courseData = res;
        this.stuSwitch = true;
        this.getAllCourses();
      });
    this.courseValue.reset();
  }
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom');
    });
  }
  addClass() {
    this.classData = this.classValue.value;
    console.log(this.classData);
    this.adminService.addClass(this.classValue.value).subscribe((res) => {
      console.log(res, 'class post');
      this.classValue.reset();
      this.findAllClass();
    });
  }
  removeClass(_id: string) {
    this.adminService.removeClass(_id).subscribe((res) => {
      console.log(res, 'delete course');
      this.findAllClass();
    });
  }
  recoverClass(classData: any) {
    delete classData.__v;
    this.classValue.addControl('_id', new FormControl(''));
    this.classValue.setValue(classData);
    this.stuSwitch = false;
    this.showDialog();
    console.log(this.classData, 'course recover');
  }
  updateClass() {
    const id = this.classValue.value._id;
    this.adminService
      .updateClass(id, this.classValue.value)
      .subscribe((res: any) => {
        this.classData = res;
        this.stuSwitch = true;
        this.findAllClass();
      });
    this.classValue.reset();
  }
}

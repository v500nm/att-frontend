import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { Iattendance, Iclassroom, Icourses, Ifaculties, Igroups, Ischedule, Istudents, Isubject, roles } from 'src/app/shared/interfaces/admin.interface';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {
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
  displaySch:boolean=false;
  loading: boolean = true;
  showDialog() {
    this.display = true;
  }
  markAttDisplay() {
    this.AttDisplay = true;
  }
  importDialog() {
    this.uploadDialog = true;
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  showDialogSch() {
    this.displaySch = true;
  }

  stuValue!: FormGroup;
  stuUploadValue!: FormGroup;
  subValue!: FormGroup;
  subUploadValue!: FormGroup;
  classValue!: FormGroup;
  classUploadValue!: FormGroup;
  facValue!: FormGroup;
  facUploadValue!: FormGroup;
  grpValue!: FormGroup;
  attValue!: FormGroup;
  schValue!: FormGroup;

  stuRole = roles;
  attData: Iattendance[] = [];
  facData: Ifaculties[] = [];
  schData: Ischedule[] = [];
  stuData: Istudents[] = [];
  subData: Isubject[] = [];
  grpData: Igroups[] = [];
  classData: Iclassroom[] = [];
  courseData: Icourses[] = [];

  stuExcelData: Istudents[] = [];
  ngOnInit(): void {
    //table
    this.adminService.findAllStudents().subscribe((res) => {
      this.stuData = res;
      this.loading = false;
    });
    this.adminService.findAllSubjects().subscribe((res) => {
      this.subData = res;
      this.loading = false;
    });
    this.adminService.getAllFaculties().subscribe((res) => {
      this.facData = res;
      this.loading = false;
    });
    this.adminService.findAllGroup().subscribe((res) => {
      this.grpData = res;
      this.loading = false;
    });
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });
    this.adminService.findAllClass().subscribe((res) => {
      this.classData = res;
      this.loading = true;
    });
    //forms
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });

    //forms
    this.adminService.findAllSchedule().subscribe((res) => {
      this.schData = res;
      this.loading = false;
    });

    //forms
    this.findAllStudents();
    this.findAllGroup();
    this.findAllStudents();
    this.findAllSchedule();
    this.findAllAtt();
    this.getAllFaculties();
    this.getAllCourses();

    (this.stuValue = this.formsbuilder.group({
      roll: new FormControl(''),
      name: new FormControl(''),
      classGrp: new FormControl(''),
      role: new FormControl(''),
    })),
      (this.stuUploadValue = this.formsbuilder.group({
        file: ['', Validators.required],
      })),
      (this.attValue = this.formsbuilder.group({
        schedules: new FormControl(''),
        // attStat: new FormControl(''),
        students: new FormControl(''),
      })),
      (this.grpValue = this.formsbuilder.group({
        gName: new FormControl(''),
        courses: new FormControl(''),
        students: new FormControl(''),
      })),
      (this.schValue = this.formsbuilder.group({
        scheduleName: new FormControl(''),
        Date: new FormControl(''),
        timing: new FormControl(''),
        duration: new FormControl(''),
        groups: new FormControl(''),
        faculties: new FormControl(''),
        subjects: new FormControl(''),
        classrooms: new FormControl(''),
      }));

    //crud buttons
  }
  getAllCourses() {
    this.adminService.getAllCourses().subscribe((res: Icourses[]) => {
      this.courseData = res
    });
  }
  findAllClass() {
    this.adminService.findAllClass().subscribe((res: Iclassroom[]) => {
      this.classData = res;
      console.log(res, 'classroom get');
    });
  }
  findAllSubjects() {
    this.adminService.findAllSubjects().subscribe((res: Isubject[]) => {
      this.subData = res;
      console.log(res, 'subject get');
    });
  }
  getAllFaculties() {
    this.adminService.getAllFaculties().subscribe((res: Ifaculties[]) => {
      this.facData = res;
      console.log(res, 'faculty get');
    });
  }
  

  //students
  findAllStudents() {
    this.adminService.findAllStudents().subscribe((res: Istudents[]) => {
      this.stuData = res
     
    });
  }

  
  //groups
  findAllGroup() {
    this.adminService.findAllGroup().subscribe((res: Igroups[]) => {
      this.grpData = res;
      console.log(res, 'groups get');
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

  removeAtt(_id: string) {}
  recoverAtt(attData: any) {}
  updateAtt() {}

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
        this.findAllSchedule();
      });
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
    this.showDialogSch();
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
}

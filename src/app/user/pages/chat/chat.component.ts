import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import {
  demo,
  userData,
  Iattendance,
  Ifaculties,
  Igroups,
  Iquestion,
  Ischedule,
  Istudents,
  Isubject,
  Isuggestion,
  AttStatus,
} from '../../service/user.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  title = 'chatbot';
  constructor(private userService: UserService) {}
  chatDemo: demo[] = [];
  demoCH = {
    id: '',
    output: '',
    questions:{
      question: ''
    }
  };

  onSubmit() {
    this.userService.getOut()
    .subscribe((Response: any) => {
      this.userService.getOut()
      .subscribe((Response) => {
        this.chatDemo = Response;
      });
    });
  }



  

  // getOneOut(demoCH:any) {
  //   this.userService.getOneOut(demoCH.id)
  //   .subscribe(Response=>{
  //     this.chatDemo = Response;
  //   })
  // }

  //   stu:Istudents[]=[]
  //   student:Istudents={
  //     roll:'',
  //     name:''
  //   }
  //   fac:Ifaculties[]=[]
  //   faculty:Ifaculties={
  //     fID:'',
  //     name:'',
  //     department:'',
  //     designation:'',
  //   }
  //   att:Iattendance[]=[]
  //   // attS:Iattendance={
  //   //   attID:'',
  //   //   stats:AttStatus

  //   // }
  //   grp:Igroups[]=[]
  //   group:Igroups={
  //     gID: '',
  //     gName: '',
  //   }
  //   sch:Ischedule[]=[]
  //   schedules:Ischedule={
  //     scID:'',
  //     scheduleName:'',
  //     Date:'',
  //     startTime:'',
  //     endTime:'',
  //     duration:'',
  //   }
  //   sub:Isubject[]=[]
  //   subject:Isubject={
  //     subID:'',
  //     subject:'',  }

  //   sug:Isuggestion[]=[]
  //   suggestions:Isuggestion={
  //     sugID:'',
  //     suggestions:'',
  //   }
  //   // console.log(this.user)
  //   ngOnInit(): void {}

  //   //students
  //   findAllStudents(){
  //     this.userService.findAllStudents()
  //     .subscribe(Response=>{
  //       this.stu=Response;
  //     })
  //   }
  //   onSubmitStudent(){
  //     this.userService.registerStudent(this.student)
  //     .subscribe(Response=>{
  //       this.findAllStudents();
  //       this.student={
  //         roll:'',
  //         name:''
  //       }
  //     })
  //   }
  //   removeStudent(roll:string){
  //     this.userService.removeStudent(roll)
  //     .subscribe(Response=>{
  //       this.findAllStudents();
  //     })
  //   }
  //   updateStudent(student:Istudents){
  //     this.userService.updateStudent(student)
  //     .subscribe(Response=>{
  //       this.findAllStudents();
  //       this.student={
  //         roll:'',
  //         name:''
  //       }
  //     })
  //   }

  //   //faculties
  //   getAllFaculties(){
  //     this.userService.getAllFaculties()
  //     .subscribe(Response=>{
  //       this.fac=Response;
  //     })
  //   }
  //   onSubmitFaculty(){
  //     this.userService.addFaculty(this.faculty)
  //     .subscribe(Response=>{
  //       this.getAllFaculties();
  //       this.faculty={
  //         fID:'',
  //         name:'',
  //         department:'',
  //         designation:'',
  //       }
  //     })
  //   }
  //   removeFaculty(fID:string){
  //     this.userService.removeFaculty(fID)
  //     .subscribe(Response=>{
  //       this.getAllFaculties();
  //     })
  //   }
  //   updateFaculty(faculty:Ifaculties){
  //     this.userService.updateFaculty(faculty)
  //     .subscribe(Response=>{
  //       this.getAllFaculties();
  //       this.faculty={
  //         fID:'',
  //         name:'',
  //         department:'',
  //         designation:'',
  //       }
  //     })
  //   }

  //   //attendance

  //   //groups

  //   //schedule
  //   findAllSchedule(){
  //     this.userService.findAllSchedule()
  //     .subscribe(Response=>{
  //       this.sch=Response;
  //     })
  //    }
  //    onSubmitSchedule(){
  //     this.userService.createSchedule(this.schedules)
  //     .subscribe(Response=>{
  //       this.findAllSchedule();
  //       this.schedules={
  //         scID:'',
  //       scheduleName:'',
  //       Date:'',
  //       startTime:'',
  //       endTime:'',
  //       duration:''
  //       }
  //     })
  //    }
  //    removeSchedule(scID:string){
  //     this.userService.removeSchedule(scID)
  //     .subscribe(Response=>{
  //       this.findAllSchedule();
  //     })
  //    }
  //    updateSchedule(schedules:Ischedule){
  //     this.userService.updateSchedule(schedules)
  //     .subscribe(Response=>{
  //       this.findAllSchedule();
  //       this.schedules={
  //         scID:'',
  //         scheduleName:'',
  //         Date:'',
  //         startTime:'',
  //         endTime:'',
  //         duration:''
  //       }
  //     })
  //    }

  //   //subjects
  // findAllSubjects(){
  //     this.userService.findAllSubjects()
  //     .subscribe( Response=>{
  //       this.sub = Response;
  //     })
  //   }
  //   onSubmitSubject(){
  //     this.userService.addSubject(this.subject)
  //     .subscribe(Response=>{
  //       this.findAllSubjects();
  //       this.subject={
  //         subID:'',
  //         subject:''
  //       }
  //     })
  //   }
  //   removeSubject(subID:string){
  //     this.userService.removeSubject(subID)
  //     .subscribe( Response=>{
  //       this.findAllSubjects();
  //     })
  //   }
  //   updateSubject(subject:Isubject){
  //     this.userService.updateSubject(subject)
  //     .subscribe(Response=>{
  //       this.findAllSubjects();
  //       this.subject={
  //         subID:'',
  //         subject:''
  //       }
  //     })
  //   }
}

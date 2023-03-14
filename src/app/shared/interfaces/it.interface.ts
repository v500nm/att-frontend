import { Iclassroom } from "./admin.interface";

export interface Iitstudents{
    _id:string;
    roll:string;
    name:string;
    classGrp:string;
    role:roles
}
export enum roles{
    cr='CR',
    di='DI',
    none='NONE'
}
export interface Iitfaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
}
export interface Iitsubject{
    _id:string;
    subject:string
}
export interface Iitattendance{
    _id:string;
    schedule:Iitschedule[];
    stats:AttStatus;
    markStudents:string[];
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Iitgroups{
    _id:string;
    gName: string;
    students:Iitstudents[];
}
export interface Iitschedule{
    _id:string;
    scheduleName:string;
    Date:string;
    timing:string;
    duration:string;
    groups:Iitgroups[];
    faculties:Iitfaculties[];
    subjects:Iitsubject[];
    classrooms:Iclassroom[];
}

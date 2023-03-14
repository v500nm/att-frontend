import { Iclassroom } from "./admin.interface";

export interface Ibmsstudents{
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
export interface Ibmsfaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
}
export interface Ibmssubject{
    _id:string;
    subject:string
}
export interface Ibmsattendance{
    _id:string;
    schedule:Ibmsschedule[];
    stats:AttStatus;
    markStudents:string[];
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Ibmsgroups{
    _id:string;
    gName: string;
    students:Ibmsstudents[];
}
export interface Ibmsschedule{
    _id:string;
    scheduleName:string;
    Date:string;
    timing:string;
    duration:string;
    groups:Ibmsgroups[];
    faculties:Ibmsfaculties[];
    subjects:Ibmssubject[];
    classrooms:Iclassroom[];
}

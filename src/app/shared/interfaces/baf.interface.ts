import { Iclassroom } from "./admin.interface";

export interface Ibafstudents{
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
export interface Ibaffaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
}
export interface Ibafsubject{
    _id:string;
    subject:string
}
export interface Ibafattendance{
    _id:string;
    schedule:Ibafschedule[];
    stats:AttStatus;
    markStudents:string[];
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Ibafgroups{
    _id:string;
    gName: string;
    students:Ibafstudents[];
}
export interface Ibafschedule{
    _id:string;
    scheduleName:string;
    Date:string;
    timing:string;
    duration:string;
    groups:Ibafgroups[];
    faculties:Ibaffaculties[];
    subjects:Ibafsubject[];
    classrooms:Iclassroom[];
}

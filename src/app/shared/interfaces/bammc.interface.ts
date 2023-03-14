import { Iclassroom } from "./admin.interface";

export interface Ibammcstudents{
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
export interface Ibammcfaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
}
export interface Ibammcsubject{
    _id:string;
    subject:string
}
export interface Ibammcattendance{
    _id:string;
    schedule:Ibammcschedule[];
    stats:AttStatus;
    markStudents:string[];
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Ibammcgroups{
    _id:string;
    gName: string;
    students:Ibammcstudents[];
}
export interface Ibammcschedule{
    _id:string;
    scheduleName:string;
    Date:string;
    timing:string;
    duration:string;
    groups:Ibammcgroups[];
    faculties:Ibammcfaculties[];
    subjects:Ibammcsubject[];
    classrooms:Iclassroom[];
}

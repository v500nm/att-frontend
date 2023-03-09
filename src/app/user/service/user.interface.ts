export interface Istudents{
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
export interface Ifaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
}
export interface Isubject{
    _id:string;
    subject:string
}
export interface Iclassroom{
    _id:string;
    class:string;
}
export interface Iattendance{
    _id:string;
    schedule:Ischedule[];
    stats:AttStatus;
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Igroups{
    _id:string;
    gName: string;
    students:Istudents[];
}
export interface Ischedule{
    _id:string;
    scheduleName:string;
    Date:string;
    timing:string;
    duration:string;
    groups:Igroups[];
    faculties:Ifaculties[];
    subjects:Isubject[];
    classrooms:Iclassroom[];
}

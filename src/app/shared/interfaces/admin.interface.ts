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
export interface Icourses{
    _id:string;
    courses:string;
}
export interface Ifaculties{
    _id:string;
    fname:string;
    department:string;
    designation:string;
    courses:Icourses;
}
export interface Isubject{
    _id:string;
    subject:string
    courses:Icourses;
}
export interface Iclassroom{
    _id:string;
    class:string;
}
export interface Iattendance{
    _id:string;
    schedules:Ischedule;
    // attStat:attStat[];
    students:Istudents[];
}
export enum attStat{
    present="P",
    absent="A"
}
export interface Igroups{
    _id:string;
    gName: string;
    courses:Icourses;
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

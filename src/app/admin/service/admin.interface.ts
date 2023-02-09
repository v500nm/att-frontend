
export interface Istudents{
    _id:string;
    roll:number;
    name:string;
    classGrp:string;
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
    attID:string;
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
    faculty:Ifaculties[];
    subject:Isubject[];
    classroom:Iclassroom[];
}

export interface Iquestion{
    qID:number;
    question:string;
}
export interface Isuggestion{
    sugID:number;
    suggestions:string;
}

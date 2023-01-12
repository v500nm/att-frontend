export interface userData{
    students:Istudents[];
    faculties:Ifaculties[];
    attendance:Iattendance[];
    group:Igroups[];
    schedule:Ischedule[];
    subject:Isubject[];
    question:Iquestion[];
    suggestions:Isuggestion[];
}
export interface demo{
    id:string;
    output:string;
    questions:{
        question:string;
    }
}
export interface Istudents{
    roll:string;
    name:string;
}
export interface Ifaculties{
    fID:string;
    fname:string;
    department:string;
    designation:string;
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
    gID: string;
    gName: string;
}
export interface Ischedule{
    scID:string;
    scheduleName:string;
    Date:string;
    startTime:string;
    endTime:string;
    groups:Igroups[];
    faculty:Ifaculties[];
    subject:Isubject[];
}
export interface Isubject{
    subID:string;
    subject:string
}
export interface Iquestion{
    qID:string;
    questions:string;
}
export interface Isuggestion{
    sugID:string;
    suggestions:string;
}

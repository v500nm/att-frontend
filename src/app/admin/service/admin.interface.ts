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
export interface Istudents{
    roll:number;
    name:string;
}
export interface Ifaculties{
    fID:number;
    name:string;
    department:string;
    designation:string;
}
export interface Iattendance{
    attID:number;
    stats:AttStatus;
}
export enum AttStatus{
    present = "P",
    absent = "A"
}
export interface Igroups{
    gID: number;
    gName: string;
}
export interface Ischedule{
    scID:number;
    scheduleName:string;
    Date:string;
    startTime:string;
    endTime:string;
    duration:string;
}
export interface Isubject{
    subID:number;
    subject:string
}
export interface Iquestion{
    qID:number;
    question:string;
}
export interface Isuggestion{
    sugID:number;
    suggestions:string;
}


export interface Istudents{
    roll:string;
    name:string;
}
export interface Ifaculties{
    fID:string;
    name:string;
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
    duration:string;
}
export interface Isubject{
    subID:string;
    subject:string
}
export interface Iquestion{
    qID:string;
    question:string;
}
export interface Isuggestion{
    sugID:string;
    suggestions:string;
}

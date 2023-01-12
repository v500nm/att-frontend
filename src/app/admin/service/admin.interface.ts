
export interface Istudents{
    roll:number;
    name:string;
}
export interface Ifaculties{
    fID:number;
    fname:string;
    department:string;
    designation:string;
}
export interface Isubject{
    subID:number;
    subjectName:string
}
export interface Iclassroom{
    clID:number;
    classroom:string;
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
    groups:Igroups[];
    faculty:Ifaculties[];
    subject:Isubject[];
}

export interface Iquestion{
    qID:number;
    question:string;
}
export interface Isuggestion{
    sugID:number;
    suggestions:string;
}

import { IWorkflowColumn } from "../interfaces/IWorkflowColumn";


export interface IDndState {
    inProgress: IWorkflowColumn
    whatsNext: IWorkflowColumn
    experience: IWorkflowColumn
    interests: IWorkflowColumn
    completed: IWorkflowColumn
}
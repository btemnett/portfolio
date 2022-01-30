import { IWorkflowCard } from "./IWorkflowCard";

export interface IWorkflowColumn {
    name: string;
    id: string
    cards: Array<IWorkflowCard>;
}
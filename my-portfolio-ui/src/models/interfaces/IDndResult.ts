

export interface IDndResult {
    draggableId: string
    type: string
    source: {index: number, droppableId: string}
    reason: string
    destination: {droppableId: string, index: number}
    [x:string]: any
}
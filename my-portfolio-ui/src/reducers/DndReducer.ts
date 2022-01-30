import { accordionActionsClasses } from "@mui/material";
import { IDndState } from "../models/state/IDndState";
import * as dndActions from "../actions/DndActions"
import { IWorkflowColumn } from "../models/interfaces/IWorkflowColumn";
import { IDndResult } from "../models/interfaces/IDndResult";


export const DNDReducer = (state: IDndState, action:any): IDndState => {
    
    switch(action.type) {
        case dndActions.GET_IN_PROGRESS_CARDS: {
            return {
                ...state
            }
        }

        case dndActions.HANDLE_ON_DRAG_START : {

            console.log("DRAG START")
            console.log(`result: ${JSON.stringify(action.result)}`);

            return {
                ...state
            }
        }

        case dndActions.HANDLE_ON_DRAG_END: {

            const result: IDndResult = action.result

            if (result.reason === "DROP") {
                if (!result.destination) {
                    return {
                        ...state
                    }
                }

                const fromColumnName = action.result.source.droppableId;
                const fromCardIndex = action.result.source.index;
                const fromWorkflowColumn = getWorkflowColumn(state)(fromColumnName) as IWorkflowColumn;

                const toColumnName = action.result.destination.droppableId;
                const toCardIndex = action.result.destination.index;
                const toWorkflowColumn = getWorkflowColumn(state)(toColumnName) as IWorkflowColumn;

                // get moved card
                const movedCard = fromWorkflowColumn.cards[fromCardIndex];

                // remove card from fromWorfkflowColumn
                fromWorkflowColumn.cards.splice(fromCardIndex, 1);

                // add card to toWorkflowColumn
                toWorkflowColumn.cards.splice(toCardIndex, 0, movedCard);

                return {
                    ...state,
                    [fromColumnName]: fromWorkflowColumn,
                    [toColumnName]: toWorkflowColumn
                }
            }
            
            
            return {
                ...state
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

const getWorkflowColumn = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key]
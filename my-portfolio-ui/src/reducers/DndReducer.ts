import { accordionActionsClasses } from "@mui/material";
import { IDndState } from "../models/state/IDndState";
import * as dndActions from "../actions/DndActions"


export const DNDReducer = (state: IDndState, action:any): IDndState => {
    
    switch(action.type) {
        case dndActions.GET_IN_PROGRESS_CARDS: {
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
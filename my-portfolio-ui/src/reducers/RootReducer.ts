import { combineReducers } from "redux"
import { DNDReducer } from "./DndReducer"

export const RootReducer = combineReducers({
    dnd: DNDReducer
})
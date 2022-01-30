import { combineReducers } from "redux"
import { DNDReducer } from "./DndReducer"
import { SideBarReducer } from "./SideBarReducer"

export const RootReducer = combineReducers({
    dnd: DNDReducer,
    sideBar: SideBarReducer
})
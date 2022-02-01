import { combineReducers } from "redux"
import { AnimationReducer } from "./AnimationReducer"
import { DNDReducer } from "./DndReducer"
import { SideBarReducer } from "./SideBarReducer"

export const RootReducer = combineReducers({
    dnd: DNDReducer,
    sideBar: SideBarReducer,
    animation: AnimationReducer
})
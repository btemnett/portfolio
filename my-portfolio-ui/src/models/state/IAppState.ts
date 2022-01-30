import { IDndState } from "./IDndState";
import { ISideBarState } from "./ISideBarState";



export interface IAppState {
    dnd: IDndState,
    sideBar: ISideBarState
}
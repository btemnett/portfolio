import { ISideBarState } from "../models/state/ISideBarState";
import * as sideBarActions from "../actions/SideBarActions";


export const SideBarReducer = (state: ISideBarState, action:any): ISideBarState => {
    
    switch(action.type) {
        case sideBarActions.HANDLE_TOGGLE_SIDEBAR: {
            console.log(`${sideBarActions.HANDLE_TOGGLE_SIDEBAR}`);

            return {
                ...state,
                toggled: !state.toggled,
                collapsed: !state.collapsed

            }
        }

        case sideBarActions.HANDLE_COLLAPSED_CHANGE: {
            console.log(`${sideBarActions.HANDLE_COLLAPSED_CHANGE}`);

            return {
                ...state,
                collapsed: !state.collapsed
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

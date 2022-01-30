


export const HANDLE_TOGGLE_SIDEBAR = "HANDLE_TOGGLE_SIDEBAR";
export const HANDLE_COLLAPSED_CHANGE = "HANDLE_COLLAPSED_CHANGE";


export const handleToggleSideBar = () => {
    return {
        type: HANDLE_TOGGLE_SIDEBAR
    }
}

export const handleCollapsedChange = () => {
    return {
        type: HANDLE_COLLAPSED_CHANGE
    }
}
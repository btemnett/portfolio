


export const GET_IN_PROGRESS_CARDS = "GET_IN_PROGRESS_CARDS";
export const HANDLE_ON_DRAG_END = "HANDLE_ON_DRAG_END"
export const HANDLE_ON_DRAG_START = "HANDLE_ON_DRAG_START"

export const getInProgressCards = () => {
    return {
        type: GET_IN_PROGRESS_CARDS
    }
}

export const handleOnDragStart = (result: any) => {
    return {
        type: HANDLE_ON_DRAG_START,
        result
    }
}

export const handleOnDragEnd = (result: any) => {
    return {
        type: HANDLE_ON_DRAG_END,
        result
    }
}


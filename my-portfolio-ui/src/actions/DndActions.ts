


export const HANDLE_ON_DRAG_END = "HANDLE_ON_DRAG_END"
export const HANDLE_ON_DRAG_START = "HANDLE_ON_DRAG_START"
export const GET_IN_PROGRESS_DATA = "GET_IN_PROGRESS_DATA";
export const GET_IN_PROGRESS_DATA_SUCCESS = "GET_IN_PROGRESS_DATA_SUCCESS";
export const GET_IN_PROGRESS_DATA_FAIL = "GET_IN_PROGRESS_DATA_FAIL";
export const GET_WHATS_NEXT_DATA = "GET_WHATS_NEXT_DATA";
export const GET_WHATS_NEXT_DATA_SUCCESS = "GET_WHATS_NEXT_DATA_SUCCESS";
export const GET_WHATS_NEXT_DATA_FAIL = "GET_WHATS_NEXT_DATA_FAIL";
export const GET_EXPERIENCE_DATA = "GET_EXPERIENCE_DATA";
export const GET_EXPERIENCE_DATA_SUCCESS = "GET_EXPERIENCE_DATA_SUCCESS";
export const GET_EXPERIENCE_DATA_FAIL = "GET_EXPERIENCE_DATA_FAIL";
export const GET_INTERESTS_DATA = "GET_INTERESTS_DATA";
export const GET_INTERESTS_DATA_SUCCESS = "GET_INTERESTS_DATA_SUCCESS";
export const GET_INTERESTS_DATA_FAIL = "GET_INTERESTS_DATA_FAIL";
export const GET_COMPLETED_DATA = "GET_COMPLETED_DATA";
export const GET_COMPLETED_DATA_SUCCESS = "GET_COMPLETED_DATA_SUCCESS";
export const GET_COMPLETED_DATA_FAIL = "GET_COMPLETED_DATA_FAIL";


export const getInProgressData = () => {
    return {
        type: GET_IN_PROGRESS_DATA,
        payload: {
            request: {
                url: `${getUrl()}/in-progress`,
                method: "GET",
                Headers: {
                    Accept: 'application/json'
                }
            }
        }
    }
}

export const getWhatsNextData = () => {
    return {
        type: GET_WHATS_NEXT_DATA,
        payload: {
            request: {
                url: `${getUrl()}/whats-next`,
                method: "GET",
                Headers: {
                    Accept: 'application/json'
                }
            }
        }
    }
}

export const getExperienceData = () => {
    return {
        type: GET_EXPERIENCE_DATA,
        payload: {
            request: {
                url: `${getUrl()}/experience`,
                method: "GET",
                Headers: {
                    Accept: 'application/json'
                }
            }
        }
    }
}

export const getInterestsData = () => {
    return {
        type: GET_INTERESTS_DATA,
        payload: {
            request: {
                url: `${getUrl()}/interests`,
                method: "GET",
                Headers: {
                    Accept: 'application/json'
                }
            }
        }
    }
}

export const getCompletedData = () => {
    return {
        type: GET_COMPLETED_DATA,
        payload: {
            request: {
                url: `${getUrl()}/completed`,
                method: "GET",
                Headers: {
                    Accept: 'application/json'
                }
            }
        }
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

const getUrl = () => {
    return "http://localhost:3001/portfolio"
}
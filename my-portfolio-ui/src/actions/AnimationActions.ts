import { IAnimationElement } from "../models/interfaces/IAnimationElement";


export const UPDATE_BOUNDARY_VALUES = "UPDATE_BOUNDARY_VALUES";
export const GET_ANIMATION_ELEMENTS = "GET_ANIMATION_ELEMENTS";
export const UPDATE_ANIMATION_ELEMENT_POSITION = "UPDATE_ANIMATION_ELEMENT_POSITION";
export const BIND_ELEMENT_RESIZE_EVENT_LISTENER = "BIND_ELEMENT_RESIZE_EVENT_LISTENER";
export const SET_RESIZED = "SET_RESIZED";

export const udpateBoundaryValues = () => {
    return {
        type: UPDATE_BOUNDARY_VALUES
    }
}

export const getAnimationElements = () => {
    return {
        type: GET_ANIMATION_ELEMENTS
    }
}

export const updateAnimationElementPosition = (element: IAnimationElement) => {
    return {
        type: UPDATE_ANIMATION_ELEMENT_POSITION,
        element
    }
}

export const bindElementResizeEventListener = (setResized: any) => {
    return {
        type: BIND_ELEMENT_RESIZE_EVENT_LISTENER,
        setResized

    }
}

export const setResized = () => {
    return {
        type: SET_RESIZED,
    }
}
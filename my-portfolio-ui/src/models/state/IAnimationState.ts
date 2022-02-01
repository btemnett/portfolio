import { IAnimationElement } from "../interfaces/IAnimationElement";

export interface IAnimationState {
    ready: boolean
    topBoundary: number
    bottomBoundary: number
    leftBoundary: number
    rightBoundary: number
    animationElements: Array<IAnimationElement>,
    elementResizeEventListenerBound: boolean,
    resized: boolean
}
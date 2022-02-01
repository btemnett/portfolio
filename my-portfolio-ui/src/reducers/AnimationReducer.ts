
import { IAnimationState } from "../models/state/IAnimationState";
import * as animationActions from "../actions/AnimationActions";


const elementResizeEvent = require("element-resize-event");
let X_ANIMATION_ELEMENT_ADJUSTEMENT = 1;
let Y_ANIMATION_ELEMENT_ADJUSTEMENT = 1;
const X_INITIAL_POSITION_OFFSET = 1;
const Y_INITIAL_POSITION_OFFSET = 1;


export const AnimationReducer = (state: IAnimationState, action:any): IAnimationState => {
    
    switch(action.type) {
        case animationActions.BIND_ELEMENT_RESIZE_EVENT_LISTENER: {

            const element = document.getElementById("portfolioHeader")

            if(element) {
                console.log(`Action in bind: ${JSON.stringify(action)}`)

                elementResizeEvent(element, action.setResized);

                return {
                    ...state,
                    elementResizeEventListenerBound: true,
                    animationReady: true
                }
            }
            
            return {
                ...state
            }
        }

        case animationActions.SET_RESIZED: {
            console.log(animationActions.SET_RESIZED);

            const js = document.getElementById("JS")
            if(js){
                const parent = js.offsetParent
                if(parent) {
                    console.log(`Parent: ${JSON.stringify(parent.toString())}`)
                    
                }
                const details = js.getBoundingClientRect();
                console.log(`details: ${JSON.stringify(details)}`)
            }

            return {
                ...state,
                resized: true
            }
        }

        case animationActions.UPDATE_BOUNDARY_VALUES: {
            console.log(`${animationActions.UPDATE_BOUNDARY_VALUES}`);

            const boundingElement = document.getElementById("portfolioHeader");

            if(boundingElement) {
                const boundaryValues = boundingElement.getBoundingClientRect();
                console.log(`boundary values :${JSON.stringify(boundaryValues)}`);

                const animationElements = getAnimationElements(animationObjects, boundaryValues.left, boundaryValues.top)

                return {
                    ...state,
                    topBoundary: Math.floor(boundaryValues.top),
                    bottomBoundary: Math.floor(boundaryValues.bottom) - 10,
                    leftBoundary: Math.floor(boundaryValues.left),
                    rightBoundary: Math.floor(boundaryValues.right),
                    resized: false,
                    animationReady: true,
                    animationElements
                }
            }
            const tst = {
                "x":103.1875,
                "y":8,
                "width":1808.796875,
                "height":79.3125,
                "top":8,
                "right":1911.984375,
                "bottom":87.3125,
                "left":103.1875
            }

            return {
                ...state
            }
        }

        case animationActions.GET_ANIMATION_ELEMENTS: {
            console.log(`${animationActions.GET_ANIMATION_ELEMENTS}`);

            if(state.bottomBoundary && state.leftBoundary && state.rightBoundary && state.topBoundary) {
                const animationElements = getAnimationElements(animationObjects, state.leftBoundary, state.rightBoundary)

                return {
                    ...state,
                    animationElements
                }
            }

            return {
                ...state,
                animationReady: true
            }
        }

        case animationActions.UPDATE_ANIMATION_ELEMENT_POSITION: {

            const foundAnimationElementIndex = state.animationElements.findIndex(animationElement => animationElement === action.element);
            if (foundAnimationElementIndex >= 0){

                const elementToBeUpdated = state.animationElements[foundAnimationElementIndex];

                const element = document.getElementById(elementToBeUpdated.id)
                
                if (element) {
                    const elementWidth = element.offsetWidth
                    const elementHeight = element.offsetHeight

                    let xAdjustement = X_ANIMATION_ELEMENT_ADJUSTEMENT;
                    let yAdjustement = Y_ANIMATION_ELEMENT_ADJUSTEMENT;
                    // console.log(`X: ${elementToBeUpdated.xPosition}`);
                    // console.log(`Y: ${elementToBeUpdated.yPosition}`);


                    if (elementToBeUpdated.xPosition + elementWidth >= state.rightBoundary ||
                        elementToBeUpdated.xPosition <= state.leftBoundary) {
                        // console.log(`XADJ: position => X: ${elementToBeUpdated.xPosition} / Y: ${elementToBeUpdated.yPosition}`);
                        X_ANIMATION_ELEMENT_ADJUSTEMENT = -X_ANIMATION_ELEMENT_ADJUSTEMENT;
                        xAdjustement = X_ANIMATION_ELEMENT_ADJUSTEMENT;
                    }

                    if (elementToBeUpdated.yPosition + elementHeight >= state.bottomBoundary ||
                        elementToBeUpdated.yPosition <= state.topBoundary) {
                        // console.log(`YADJ: position => X: ${elementToBeUpdated.xPosition} / Y: ${elementToBeUpdated.yPosition}`);
                        Y_ANIMATION_ELEMENT_ADJUSTEMENT = -Y_ANIMATION_ELEMENT_ADJUSTEMENT;
                        yAdjustement = Y_ANIMATION_ELEMENT_ADJUSTEMENT;
                    }

                    state.animationElements[foundAnimationElementIndex] = {
                        ...elementToBeUpdated,
                        xPosition: elementToBeUpdated.xPosition + xAdjustement,
                        yPosition: elementToBeUpdated.yPosition + yAdjustement,
                    }

                    return {
                        ...state
                    }
                }
            }

            return {
                ...state
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

// const getWorkflowColumn = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key]

const animationObjects = [
    {
        text: "JS"
    }
]

const getAnimationElements = (animationObjects: any, leftBoundary: any, topBoundary: any) => {
    const animationElements = animationObjects.map((obj: any) => {
        return {
            id: obj.text,
            text: obj.text,
            xPosition: Math.floor(leftBoundary) + X_INITIAL_POSITION_OFFSET,
            yPosition: Math.floor(topBoundary) + Y_INITIAL_POSITION_OFFSET
        }
    })
    return animationElements
}
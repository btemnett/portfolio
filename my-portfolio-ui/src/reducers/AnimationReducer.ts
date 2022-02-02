
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

            return {
                ...state,
                resized: true
            }
        }

        case animationActions.UPDATE_BOUNDARY_VALUES: {
            console.log(`${animationActions.UPDATE_BOUNDARY_VALUES}`);

            const boundingElement = document.getElementById("portfolioHeader");
            const sideBarContainerElement = document.getElementById("sideBarContainer");
            const sideBarElement = document.getElementById("sideBar");

            if(boundingElement && sideBarContainerElement && sideBarElement) {

                const boundingElementBoundaryValues = boundingElement.getBoundingClientRect();
                console.log(`bounding element boundary values :${JSON.stringify(boundingElementBoundaryValues)}`);

                if(
                    Math.abs(boundingElementBoundaryValues.top - state.topBoundary) < 2 &&
                    Math.abs(boundingElementBoundaryValues.bottom - state.bottomBoundary) < 2 &&
                    Math.abs(boundingElementBoundaryValues.left - state.leftBoundary) < 2 &&
                    Math.abs(boundingElementBoundaryValues.right - state.rightBoundary) < 2
                ) {
                    return {
                        ...state
                    }
                }

                const sideBarContainerElementBoundaryValues = sideBarContainerElement.getBoundingClientRect();
                console.log(`sidebar container element boundary values :${JSON.stringify(sideBarContainerElementBoundaryValues)}`);

                const sideBarBoundaryValues = sideBarElement.getBoundingClientRect();
                console.log(`sideBar element boundary values :${JSON.stringify(sideBarBoundaryValues)}`);

                const sideBarGap = sideBarContainerElementBoundaryValues.right - sideBarContainerElementBoundaryValues.right;
                const gapAdjustement = sideBarGap <= 0 ? 0 : sideBarGap;

                const leftOrigin = boundingElementBoundaryValues.left - sideBarBoundaryValues.right - gapAdjustement;
                const rightOrigin = boundingElementBoundaryValues.right - sideBarBoundaryValues.right - gapAdjustement;
                const topOrigin = boundingElementBoundaryValues.top - boundingElementBoundaryValues.top;
                const bottomOrigin = boundingElementBoundaryValues.bottom - boundingElementBoundaryValues.top;

                const xInitial = getInitialPosition(rightOrigin, leftOrigin)
                const yInitial = getInitialPosition(bottomOrigin, topOrigin);

                const animationElements = getAnimationElements(animationObjects, xInitial, yInitial);

                return {
                    ...state,
                    topBoundary: Math.floor(topOrigin),
                    bottomBoundary: Math.floor(bottomOrigin),
                    leftBoundary: Math.floor(leftOrigin),
                    rightBoundary: Math.floor(rightOrigin),
                    resized: false,
                    animationReady: true,
                    animationElements
                }
            }

            return {
                ...state
            }
        }

        case animationActions.GET_ANIMATION_ELEMENTS: {
            console.log(`${animationActions.GET_ANIMATION_ELEMENTS}`);

            if(state.bottomBoundary && state.leftBoundary && state.rightBoundary && state.topBoundary) {
                const xInitial = getInitialPosition(state.rightBoundary, state.leftBoundary)
                const yInitial = getInitialPosition(state.bottomBoundary, state.topBoundary);
                const animationElements = getAnimationElements(animationObjects, xInitial, yInitial)

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

                    let xAdjustement = elementToBeUpdated.xVelocity;
                    let yAdjustement = elementToBeUpdated.yVelocity;
                    let xChanged = false;
                    let yChanged = false;


                    if (elementToBeUpdated.xPosition + elementWidth >= state.rightBoundary ||
                        elementToBeUpdated.xPosition <= state.leftBoundary) {
                        xAdjustement = elementToBeUpdated.xVelocity * (-1);
                        xChanged = true;
                    }

                    if (elementToBeUpdated.yPosition + elementHeight >= state.bottomBoundary ||
                        elementToBeUpdated.yPosition <= state.topBoundary) {
                        yAdjustement = elementToBeUpdated.yVelocity * (-1);
                        yChanged = true;
                    }

                    state.animationElements[foundAnimationElementIndex] = {
                        ...elementToBeUpdated,
                        xPosition: elementToBeUpdated.xPosition + xAdjustement,
                        yPosition: elementToBeUpdated.yPosition + yAdjustement,
                        xVelocity: xChanged ? xAdjustement : elementToBeUpdated.xVelocity,
                        yVelocity: yChanged ? yAdjustement : elementToBeUpdated.yVelocity
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
    },
    {
        text: "C#"
    },
    {
        text: "Python"
    },
    {
        text: "AWS"
    },
    {
        text: "AGILE"
    },
    {
        text: "React"
    },
    {
        text: "TS"
    },
    {
        text: "Bash"
    },
    {
        text: "Linux"
    },
    {
        text: "Terraform"
    }
]

const getAnimationElements = (animationObjects: any, x: any, y: any) => {

    const animationElements = animationObjects.map((obj: any) => {

        const xVelocity = getVelocity();
        console.log(`velocity: ${xVelocity}`)
        const yVelocity = getVelocity();
        console.log(`velocity: ${yVelocity}`)
        const xSignChanger = getSignChanger();
        console.log(`sign changer: ${xSignChanger}`);
        const ySignChanger = getSignChanger();
        console.log(`sign changer: ${ySignChanger}`);


        return {
            id: obj.text,
            text: obj.text,
            xPosition: Math.floor(x),
            yPosition: Math.floor(y),
            xVelocity: xVelocity * xSignChanger,
            yVelocity: yVelocity * ySignChanger
        }
    })

    return animationElements
}

const getInitialPosition = (greaterBound: number, lesserBound: number) => (greaterBound - lesserBound) / 2 + lesserBound;

const getVelocity = () => Number(Math.random().toFixed(2));

const getSignChanger = () => {

    const num = Math.random();

    if(num >= 0.50) {

        return 1
    }

    return -1
}
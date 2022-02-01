


export const InitialState: any = {
    dnd: {
        inProgress: null,
        whatsNext: null,
        experience: null,
        interests: null,
        completed: null,
        dndReady: false
    },
    sideBar: {
        collapsed: true,
        toggled: false
    },
    animation: {
        animationReady: false,
        topBoundary: null,
        bottomBoundary: null,
        leftBoundary: null,
        rightBoundary: null,
        animationElements: [],
        elementResizeEventListenerBound: false,
        resized: false
    }
}

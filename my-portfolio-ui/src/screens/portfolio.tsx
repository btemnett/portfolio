import { Grid } from "@mui/material"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PortfolioHeaderComponent } from "../components/portfolioHeader"
import { WorkflowComponent } from "../components/workflow"
import { IAppState } from "../models/state/IAppState"
import * as dndActions from "../actions/DndActions";
import { SideBarComponent } from "../components/sideBar"
import * as sideBarActions from "../actions/SideBarActions";
import * as animationActions from "../actions/AnimationActions"
import 'react-pro-sidebar/dist/css/styles.css';
import { IAnimationElement } from "../models/interfaces/IAnimationElement";


const FPS = 60;

const animate = (animationElements: Array<IAnimationElement>, updatePositionFunction: any) => {

    setInterval(() => {

        for (let i = 0; i < animationElements.length; i++) {

            updatePositionFunction(animationElements[i]);
        }
        
    }, 1000)
}

export const PortfolioScreen = (props: {
    dndState: any,
    getInProgressData: any,
    getWhatsNextData: any,
    getExperienceData: any,
    getInterestsData: any,
    getCompletedData: any,
    handleOnDragStart: any, 
    handleOnDragEnd: any,
    collapsed: any,
    toggled: any,
    handleToggleSideBar: any,
    handleCollapsedChange: any,
    animationReady: any,
    udpateBoundaryValues: any,
    topBoundary: any,
    bottomBoundary: any,
    leftBoundary: any,
    rightBoundary: any,
    animationElements: any,
    getAnimationElements: any,
    updateAnimationElementPosition: any,
    elementResizeEventListenerBound: any,
    bindElementResizeEventListener: any,
    resized: any,
    setResized: any
}) => {

    useEffect(() => {

        if(!props.dndState.dndReady){
            if(!props.dndState.inProgress) {
                props.getInProgressData();
            }
    
            if(!props.dndState.whatsNext) {
                props.getWhatsNextData();
            }
    
            if(!props.dndState.experience) {
                props.getExperienceData();
            }
    
            if(!props.dndState.interests) {
                props.getInterestsData();
            }
    
            if(!props.dndState.completed) {
                props.getCompletedData();
            }
        }
        
        if(!props.elementResizeEventListenerBound) {
            props.bindElementResizeEventListener(props.setResized)
        }

        if(!props.animationReady && props.elementResizeEventListenerBound){
            props.udpateBoundaryValues();
            props.getAnimationElements();
        }

        if(props.animationReady){
            animate(props.animationElements, props.updateAnimationElementPosition);
        }

        if(props.resized){
            props.udpateBoundaryValues();
        }
    })

    return (
        <Grid
            container
            direction="row"
            style={{"width": "100%", minHeight: "100%"}}
        >
            <Grid
                item
                style={{
                    "width": props.collapsed ? "5%" : "20%"
                }}
                onClick={props.handleToggleSideBar}
                id="sideBarContainer"
            >
                <SideBarComponent 
                    collapsed={props.collapsed}
                    toggled={props.toggled}
                    handleToggleSideBar={props.handleToggleSideBar}
                />
            </Grid>
            <Grid 
                item
                justifyContent="center"
                alignItems="center"
                style={{"width": props.collapsed ? "95%" : "80%"}}
            >
                <PortfolioHeaderComponent
                    topBoundary={props.topBoundary}
                    bottomBoundary={props.bottomBoundary}
                    leftBoundary={props.leftBoundary}
                    rightBoundary={props.rightBoundary}
                    animationElements={props.animationElements}
                    animationReady={props.animationReady}
                />
                <WorkflowComponent
                    dndState={props.dndState}
                    handleOnDragStart={props.handleOnDragStart}
                    handleOnDragEnd={props.handleOnDragEnd}
                />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state: IAppState) => ({
    dndState: state.dnd,
    collapsed: state.sideBar.collapsed,
    toggled: state.sideBar.toggled,
    animationReady: state.animation.animationReady,
    topBoundary: state.animation.topBoundary,
    bottomBoundary: state.animation.bottomBoundary,
    leftBoundary: state.animation.leftBoundary,
    rightBoundary: state.animation.rightBoundary,
    animationElements: state.animation.animationElements,
    elementResizeEventListenerBound: state.animation.elementResizeEventListenerBound,
    resized: state.animation.resized
})

const mapDispatchToProps = {
    getInProgressData: dndActions.getInProgressData,
    getWhatsNextData: dndActions.getWhatsNextData,
    getExperienceData: dndActions.getExperienceData,
    getInterestsData: dndActions.getInterestsData,
    getCompletedData: dndActions.getCompletedData,
    handleOnDragStart: dndActions.handleOnDragStart,
    handleOnDragEnd: dndActions.handleOnDragEnd,
    handleToggleSideBar: sideBarActions.handleToggleSideBar,
    handleCollapsedChange: sideBarActions.handleCollapsedChange,
    udpateBoundaryValues: animationActions.udpateBoundaryValues,
    getAnimationElements: animationActions.getAnimationElements,
    updateAnimationElementPosition: animationActions.updateAnimationElementPosition,
    bindElementResizeEventListener: animationActions.bindElementResizeEventListener,
    setResized: animationActions.setResized
}

export const PortfolioScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioScreen)


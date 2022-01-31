import { Grid } from "@mui/material"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PortfolioHeader } from "../components/portfolioHeader"
import { WorkflowComponent } from "../components/workflow"
import { IAppState } from "../models/state/IAppState"
import * as dndActions from "../actions/DndActions";
import { SideBarComponent } from "../components/sideBar"
import * as sideBarActions from "../actions/SideBarActions";
import 'react-pro-sidebar/dist/css/styles.css';



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
    handleCollapsedChange: any
}) => {

    useEffect(() => {
        // if there are no cards then go get them
        // will need to set the intial state of the cards to empty arrays
        // once the api is hooked up

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

        // if(!props.collapsed) {
        //     props.handleCollapsedChange(false);
        // }

        // if(props.toggled) {
        //     props.handleToggleSideBar();
        // }
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
                <PortfolioHeader/>
                <WorkflowComponent dndState={props.dndState} handleOnDragStart={props.handleOnDragStart} handleOnDragEnd={props.handleOnDragEnd}/>
            </Grid>
        </Grid>
        
    )
}

const mapStateToProps = (state: IAppState) => ({
    dndState: state.dnd,
    collapsed: state.sideBar.collapsed,
    toggled: state.sideBar.toggled
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
    handleCollapsedChange: sideBarActions.handleCollapsedChange
}

export const PortfolioScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioScreen)


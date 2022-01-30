import { Grid } from "@mui/material"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PortfolioHeader } from "../components/portfolioHeader"
import { WorkflowComponent } from "../components/workflow"
import { IAppState } from "../models/state/IAppState"
import * as dndActions from "../actions/DndActions";

export const PortfolioScreen = (props: {
    dndState: any,
    getInProgressData: any,
    getWhatsNextData: any,
    getExperienceData: any,
    getInterestsData: any,
    getCompletedData: any,
    handleOnDragStart: any, 
    handleOnDragEnd: any
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
    })

    return (
        <Grid 
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
                <PortfolioHeader/>
                <WorkflowComponent dndState={props.dndState} handleOnDragStart={props.handleOnDragStart} handleOnDragEnd={props.handleOnDragEnd}/>
        </Grid>
    )
}

const mapStateToProps = (state: IAppState) => ({
    dndState: state.dnd
})

const mapDispatchToProps = {
    getInProgressData: dndActions.getInProgressData,
    getWhatsNextData: dndActions.getWhatsNextData,
    getExperienceData: dndActions.getExperienceData,
    getInterestsData: dndActions.getInterestsData,
    getCompletedData: dndActions.getCompletedData,
    handleOnDragStart: dndActions.handleOnDragStart,
    handleOnDragEnd: dndActions.handleOnDragEnd
}

export const PortfolioScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioScreen)


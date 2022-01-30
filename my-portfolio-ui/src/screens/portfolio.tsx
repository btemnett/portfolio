import { Grid } from "@mui/material"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PortfolioHeader } from "../components/portfolioHeader"
import { WorkflowComponent } from "../components/workflow"
import { IAppState } from "../models/state/IAppState"
import * as dndActions from "../actions/DndActions";

export const PortfolioScreen = (props: {
    dndState: any,
    handleOnDragStart: any, 
    handleOnDragEnd: any
}) => {

    useEffect(() => {
        // if there are no cards then go get them
        // will need to set the intial state of the cards to empty arrays
        // once the api is hooked up
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
    handleOnDragStart: dndActions.handleOnDragStart,
    handleOnDragEnd: dndActions.handleOnDragEnd
}

export const PortfolioScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioScreen)


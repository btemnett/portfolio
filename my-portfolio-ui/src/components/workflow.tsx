import { WorkflowColumnComponent } from './workflowColumn';
import { Card, CardContent, Grid } from '@mui/material';
import { styles } from '../styles';
import { DragDropContext } from "react-beautiful-dnd";
import * as dndActions from "../actions/DndActions";
import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { ReactNode } from 'react';


export const WorkflowComponent = (props: {
    dndState: any,
    handleOnDragStart: any,
    handleOnDragEnd: any
}) => {
    if(!props.dndState.dndReady){
        return (
            <div></div>
        )
    }
    return (
        <Grid
            id="workflowContainer"
            container
            direction="row"
            justifyContent="center"
            style={{...styles.workflowContainerStyles}}>
                <DragDropContext onDragStart={props.handleOnDragStart} onDragEnd={props.handleOnDragEnd}>
                    {
                        renderWorkflow(props)
                    }
                </DragDropContext>
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

export const WorkflowComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkflowComponent)

const renderWorkflow = (props: any): ReactNode => {

    const keys = Object.keys(props.dndState);
    const validKeys = keys.filter(key => key !== "dndReady");
    
    return validKeys.map((dndStateKey, i) => {

        return (
            <WorkflowColumnComponent key={i} columnData={props.dndState[dndStateKey]}/>
        )
    })
}
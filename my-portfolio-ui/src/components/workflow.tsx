import { WorkflowColumnComponent } from './workflowColumn';
import { Card, CardContent, Grid } from '@mui/material';
import { styles } from '../styles';
import { DragDropContext } from "react-beautiful-dnd";
import * as dndActions from "../actions/DndActions";
import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';


export const WorkflowComponent = (props: {
    dndState: any,
    handleOnDragStart: any,
    handleOnDragEnd: any
}) => {
    return (
        <Grid
            id="workflowContainer"
            container
            direction="row"
            justifyContent="center"
            style={{...styles.workflowContainerStyles}}>
                <DragDropContext onDragStart={props.handleOnDragStart} onDragEnd={props.handleOnDragEnd}>
                    {
                        
                        Object.keys(props.dndState).map((dndStateKey, i) => {
                            return (
                                <WorkflowColumnComponent key={i} columnData={props.dndState[dndStateKey]}/>
                            )
                        })
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
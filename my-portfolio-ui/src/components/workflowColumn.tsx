import { Card, CardContent, Grid } from '@mui/material';
import { styles } from '../styles';
import { WorkflowCard } from './workflowCard';
import { WorkflowColumnHeader } from './workflowColumnHeader';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import * as dndActions from "../actions/DndActions";

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // TODO: set styles based on isDragging
    // background: isDragging ? 'lightgreen' : 'grey'
    ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
    // TODO: set styles for the list based on isDraggingOver
    // background: isDraggingOver ? 'lightblue' : 'lightgrey'
});

export const WorkflowColumnComponent = (props: {
    columnData: any
}) => {
    return (
        <Card 
            variant="outlined"
            style={{...styles.workflowColumnContainerStyles}}>
            <CardContent>
                <Grid 
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{}}>
                        <WorkflowColumnHeader name={props.columnData.name}/>
                        <Droppable droppableId={props.columnData.id} type="CARD">
                            {
                                (provided, snapshot) => {
                                    return (
                                        <Grid 
                                        container
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        style={getListStyle(snapshot.isDraggingOver)}>
                                            {
                                                props.columnData.cards?.map((cardData:any, i:any) => {
                                                    return (
                                                        <Draggable key={cardData.name} draggableId={cardData.name} index={i}>
                                                            {
                                                                (provided, snapshot) =>{
                                                                    return (
                                                                        <Grid 
                                                                            container
                                                                            direction="column"
                                                                            alignItems="center"
                                                                            justifyContent="center"
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={getItemStyle(
                                                                                snapshot.isDragging,
                                                                                provided.draggableProps.style
                                                                            )}>
                                                                                <WorkflowCard key={i} name={cardData.name}/>
                                                                            </Grid>
                                                                    )
                                                                }
                                                            }
                                                        </Draggable>
                                                    )
                                                })
                                            }
                                            {provided.placeholder}
                                        </Grid>
                                    )
                                }
                            }
                        </Droppable>
                </Grid>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state: IAppState) => ({
    dndState: state.dnd
})

const mapDispatchToProps = {
    handleOnDragEnd: dndActions.handleOnDragEnd
}

export const WorkflowComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkflowColumnComponent)
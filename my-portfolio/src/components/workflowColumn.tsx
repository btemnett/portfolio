import { Card, CardContent, Grid } from '@mui/material';
import { styles } from '../styles';
import { WorkflowCard } from './workflowCard';
import { WorkflowColumnHeader } from './workflowColumnHeader';


const columnCards = [
    {
        name: 1
    },
    {
        name: 2
    },
    {
        name: 3
    },
    {
        name: 4
    },
    {
        name: 5
    }
]

export const WorkflowColumn = (props: any) => {
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
                        {
                            props.columnData.cards.map((cardData:any, i:any) => {
                                return (
                                    <WorkflowCard key={i} name={cardData.name}/>
                                )
                            })
                        }
                </Grid>
            </CardContent>
        </Card>
        
    )
}
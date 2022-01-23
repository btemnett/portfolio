import { Card, CardContent, Grid } from '@mui/material';
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

export const WorkflowColumn = (props:any) => {
    return (
        <Grid 
            container
            spacing={5}
            direction="column"
            columns={1}
            style={{
                height: "100%",
                width: "100%",
                maxWidth: "300px",
                paddingLeft: "30px",
                paddingRight: "30px",
                paddingTop: "30px",
                paddingBottom: "30px"
            }}>
            <Card variant="outlined">
                <CardContent>
                    <WorkflowColumnHeader name={props.name}/>
                        {
                            columnCards.map((cardData, i) =>{
                                return (
                                    <WorkflowCard key={i} name={cardData.name}/>
                                )
                            })
                        }
                </CardContent>
            </Card>
            
        </Grid>
    )
}
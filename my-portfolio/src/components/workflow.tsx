import { WorkflowColumn } from './workflowColumn';
import { Card, CardContent, Grid } from '@mui/material';


const workflowColumns = [
    {
        name: "backlog"
    },
    {
        name: "In Progress"
    }
]

export const Workflow = () => {
    return (
        <Grid 
            container
            style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                height: "1000px"
                }}>
            <Card variant="outlined" sx={{ width: "100%" }}>
                <CardContent>
                    <Grid
                        container
                        rowSpacing={2}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        style={{paddingTop: "20px"}}>
                            {
                                workflowColumns.map((columnData, i) => {
                                    return (
                                        <WorkflowColumn key={i} name={columnData.name}/>
                                    )
                                })
                            }
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { WorkflowColumn } from './workflowColumn';

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
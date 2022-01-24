import { Card, CardContent, Grid, Typography } from "@mui/material"
import { styles } from '../styles'


export const WorkflowCard = (props:any) => {
    return (
        <Card
            variant="outlined"
            sx={{...styles.workflowCardStyles}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
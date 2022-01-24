import { Card, CardContent, Grid, Typography } from "@mui/material"
import { styles } from "../styles"


export const WorkflowColumnHeader = (props:any) => {
    return (
        <Card 
            variant="outlined" 
            sx={{...styles.workflowColumnHeaderCardStyles}}>
            <CardContent>
                <Typography style= {{textAlign: 'center'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    )
}
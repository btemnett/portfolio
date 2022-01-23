import { Card, CardContent, Grid, Typography } from "@mui/material"




export const WorkflowColumnHeader = (props:any) => {
    return (
        <Grid>
            <Card 
                variant="outlined" 
                sx={{ 
                    width: "100%",
                    maxWidth: 275 }}>
                <CardContent>
                    <Typography style= {{textAlign: 'center'}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
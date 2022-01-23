import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export const WorkflowCard = (props:any) => {
    return (
        <Grid
        item xs={6}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ 
            minHeight: '100px',
            paddingTop: "10px",
            paddingBlock: "10px"}}>
            <Card
                variant="outlined"
                sx={{
                    width: "100%",
                    maxWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
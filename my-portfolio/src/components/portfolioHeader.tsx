import spaceHeaderPhoto from '../images/spaceHeaderPhoto.jpg'
import { Card, CardContent, Grid, Typography } from "@mui/material"


export const PortfolioHeader = () => {
    return (
        <Grid container  style={{ 
            backgroundImage: `url(${spaceHeaderPhoto})`,
            height: 'auto',
            maxHeight: '500px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            justifyContent: 'center',
            paddingBottom: "50px"}}>
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
                    paddingBottom: "10px"}}>
                <Card sx={{ maxWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} variant="body2">
                            What did I do yesterday?
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} variant="body2">
                            I worked on my Portfolio
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} variant="body2">
                            What am I doing today?
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} variant="body2">
                            I am working on my Portfolio
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} variant="body2">
                            Are there any blockers?
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} variant="body2">
                            NOPE!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
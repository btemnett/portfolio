'use client'

import { Grid, Card, CardContent, Typography } from '@mui/material'
import AnimationElement from './animationElement'
import { IBoundaryBox } from '@/interfaces/IBoundaryBox'

export default function ScreenSaverComponent(
    {
        animationElementskillsArray,
        boundaryBox,
        showScreensaver
    }: {
        animationElementskillsArray: Array<{ skill: string }>;
        boundaryBox: IBoundaryBox | null;
        showScreensaver: boolean;
    }
) {

    console.log(`B BOX in main: ${JSON.stringify(boundaryBox)}`)

    return (
        <Grid
            container
            spacing={0}
            className="fixed inset-0 bg-black"
            style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: "center",
                position: "relative",
                zIndex: 99999
            }}
            id="portfolioHeader"
        >
            {
                showScreensaver && animationElementskillsArray && animationElementskillsArray.length > 0 ? animationElementskillsArray.map((element: { skill: string }, i: number) => {
                    return (
                        <AnimationElement key={i} element={element.skill} boundaryBox={boundaryBox} />
                    )
                }) : undefined
            }
            <Card
                sx={{ maxWidth: 275, maxHeight: 200 }}
                style={{ position: "relative", zIndex: 1 }}
            >
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
    )
}
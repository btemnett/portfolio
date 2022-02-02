import { Card, CardContent, Grid, Typography } from "@mui/material";
import { IAppState } from '../models/state/IAppState';
import { connect } from 'react-redux';
import { IAnimationElement } from "../models/interfaces/IAnimationElement";
import { AnimationElement } from "./animationElement";




export const PortfolioHeaderComponent = (props: {
    topBoundary: any,
    bottomBoundary: any,
    leftBoundary: any,
    rightBoundary: any,
    animationElements: any,
    animationReady: any
}) => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            spacing={0}
            justifyContent="center"
            style={{ 
                height: '30%',
                justifyContent: 'center',
                backgroundColor: "red",
                position: "relative"
            }}
            id="portfolioHeader"
        >
            {
                props.animationElements.map((element: IAnimationElement, i: number) => {
                    return (
                        <AnimationElement key={i} element={element}/>
                    )
                })
            }
            <Card
                sx={{ maxWidth: 275 }}
                style={{position: "relative", zIndex: 1}}
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

const mapStateToProps = (state: IAppState) => ({
    topBoundary: state.animation.topBoundary,
    bottomBoundary: state.animation.bottomBoundary,
    leftBoundary: state.animation.leftBoundary,
    rightBoundary: state.animation.rightBoundary,
    animationElements: state.animation.animationElements,
    animationReady: state.animation.animationReady
})

const mapDispatchToProps = {
}

export const PortfolioHeaderComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioHeaderComponent)
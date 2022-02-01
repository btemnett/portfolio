import { Card, CardContent, Grid, Typography } from "@mui/material";
import { IAppState } from '../models/state/IAppState';
import { connect } from 'react-redux';
import { IAnimationElement } from "../models/interfaces/IAnimationElement";




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
            style={{ 
                height: '30%',
                justifyContent: 'center',
                paddingBottom: "10px",
                backgroundColor: "red",
                position: "relative"
            }}
            id="portfolioHeader"
        >
            <Grid 
                container
                direction="column"
                alignItems="center"
                spacing={0}
                justifyContent="center"
                style={{ 
                    minHeight: '100px',
                    paddingTop: "10px",
                    paddingBottom: "10px"}}>
                {
                    props.animationElements.map((element: IAnimationElement, i: number) => {
                        return (
                            <span 
                                style={{
                                    position: props.animationReady ? "absolute" : "static",
                                    top: element.yPosition,
                                    left: element.xPosition
                                }}
                                id={element.id}
                                key={i}
                            >
                                {element.text}
                            </span>
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
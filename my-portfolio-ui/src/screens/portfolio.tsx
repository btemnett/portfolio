import { Grid } from "@mui/material"
import { useEffect } from "react"
import { connect } from "react-redux"
import { PortfolioHeader } from "../components/portfolioHeader"
import { Workflow } from "../components/workflow"
import { IAppState } from "../models/state/IAppState"

export const PortfolioScreen = (props: {

}) => {

    useEffect(() => {

    })

    return (
        // <Grid 
        //     item
        //     container
        //     direction="row"
        //     justifyContent="center"
        //     alignItems="center">
        //         <PortfolioHeader/>
        //         <Workflow/>
        // </Grid>
            <div>Hello World</div>
    )
}

const mapStateToProps = (state: IAppState) => ({

})

const mapDispatchToProps = {

}

export const PortfolioScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioScreen)


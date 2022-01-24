import { Grid } from "@mui/material"
import { PortfolioHeader } from "../components/portfolioHeader"
import { Workflow } from "../components/workflow"

export const Portfolio = () => {
    return (
        <Grid 
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
                <PortfolioHeader/>
                <Workflow/>
        </Grid>
            
    )
}
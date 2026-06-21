'use client'

import { Grid } from '@mui/material';
import SideBarComponent from './sideBarComponent';
import MainComponent from './mainComponent';
import { useEffect, useState } from 'react'
import { IBoundaryBox } from '@/interfaces/IBoundaryBox';


const getBoundaryBox = () => {
    const htmlElement = document.getElementById("portfolioHeader");

    if (htmlElement) {
        const boundingElement = htmlElement.getBoundingClientRect() as IBoundaryBox
        return {
            x: boundingElement.x,
            y: boundingElement.y,
            width: boundingElement.width,
            height: boundingElement.height,
            top: boundingElement.top,
            right: boundingElement.right,
            bottom: boundingElement.bottom,
            left: boundingElement.left
        }
    } else {
        return null;
    }
}


export default function PortfolioComponent(
    { 
        animationElementskillsArray 
    }: { 
        animationElementskillsArray: Array<{ skill: string }> 
    }
) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const [boundaryBox, setBoundaryBox] = useState<IBoundaryBox | null>(null)

    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);
    }, [])

    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);

    }, [isCollapsed])


    const handleSideBarOnClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <Grid
            container
            direction="row"
            style={{ "width": "100%", minHeight: "100%" }}
        >
            <Grid
                style={{
                    "width": isCollapsed ? "10%" : "30%"
                }}
                onClick={() => handleSideBarOnClick()}
                id="sideBarContainer"
            >
                <SideBarComponent propIsCollasped={isCollapsed} />
            </Grid>
            <Grid
                style={{ "width": isCollapsed ? "90%" : "70%" }}
            >
                <MainComponent animationElementskillsArray={animationElementskillsArray} boundaryBox={boundaryBox} />
            </Grid>
        </Grid>
    )
}
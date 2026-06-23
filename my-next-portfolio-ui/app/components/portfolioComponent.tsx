'use client'

import { Grid } from '@mui/material';
import ScreenSaverComponent from './screenSaverComponent';
import { useEffect, useState } from 'react'
import { IBoundaryBox } from '@/interfaces/IBoundaryBox';
import { useInactivityTimer } from '../hooks/screenSaverHook';
import Image from 'next/image';


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
    const { seconds, resetTimer } = useInactivityTimer();
    const showScreensaver = seconds >= 10;

    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);
    }, [])

    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);

    }, [isCollapsed]);

    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);
    }, [showScreensaver]);

    return (
        <Grid
            container
            style={{ 
                "width": "100%", 
                minHeight: "100%",
                overflow: "hidden"
            }}
        >
            {
                showScreensaver && (
                    <ScreenSaverComponent animationElementskillsArray={animationElementskillsArray} boundaryBox={boundaryBox} showScreensaver={showScreensaver} />
                )
            }
            <Grid
                style={{
                    height: "100%", 
                    width: "100%", 
                    overflow: "hidden", 
                    position: "relative"
                }}    
            >
                <Image
                    src="/desktop_background.jpg"
                    alt="Desktop background"
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                />
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderShadow: "5px 10px 20px rgba(0,0,0,0.4)",
                    backdropFilter: "blur(2px)",
                    backgroundColor: "rgba(36,240,56,0.5)"
                }}
                style={{minHeight: "5%", width: "100%", position: "absolute", bottom: 0, zIndex: 5000, color: "green",}}
            >
                
                <Grid size={2}
                    // style={{
                    //     position: "relative"
                    // }}
                >
                    <Image
                        src="/ben_os_icon.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                    />
                </Grid>
                <Grid size={2}>test1</Grid>
                <Grid size={2}>test1</Grid>
                <Grid size={2}>test1</Grid>
                <Grid size={2}>test1</Grid>
            </Grid>
        </Grid>
    )
}
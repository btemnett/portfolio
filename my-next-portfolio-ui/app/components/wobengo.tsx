import { Grid } from "@mui/material";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { percentageToPixels } from "../utils/percentageToPixels";
import { useMousePosition } from "../hooks/mousePositionHook";



export default function WobengoComponent(
    {
        setShowWobengoComponent,
        appPosition,
        onDragStart,
        onDragOver,
        onDrop
    }: {
        setShowWobengoComponent: Dispatch<SetStateAction<boolean>>
        appPosition: any
        onDragStart: any
        onDragOver: any
        onDrop: any
    }
) {

    const handleClose = () => {
        setShowWobengoComponent(false)
    }

    useEffect(() => {
        
    }, []);


    return (
        <Grid
            container
            id={"webengo"}
            draggable
            onDragStart={(e: any) => onDragStart(e, "webengo")}
            onDragOver={onDragOver}
            onDrop={(e: any) => onDrop(e, "webengo")}
            sx={{
                position: "absolute",
                color: "green",
                boxShadow: "0 0 10px rgba(36, 240, 56,1)",
                backdropFilter: "blur(2px)",
                borderRadius: "10px 10px 0 0",
                top: `${appPosition.y}px`,
                left: `${appPosition.x}px`,
                height: "50%",
                width: "50%"
            }}
        >
            <Grid onClick={handleClose}>XXXXXXX</Grid>
            <Grid>THINGINSGINSGILNGOSINGDS</Grid>
        </Grid>
    )
}
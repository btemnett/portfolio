import { Grid } from "@mui/material";
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { App } from "@/enums/App";



export default function InbentoryComponent(
    {
        setShowInbentoryComponent,
        appPosition,
        onDragStart,
        onDragOver,
        onDrop,
        desktopContainerRef
    }: {
        setShowInbentoryComponent: Dispatch<SetStateAction<boolean>>
        appPosition: any
        onDragStart: any
        onDragOver: any
        onDrop: any
        desktopContainerRef: RefObject<HTMLDivElement | null>
    }
) {

    const [inbentoryMaxWidth, setInbentoryMaxWidth] = useState<string>("50%")
    const [inbentoryMaxHeight, setInbentoryMaxHeight] = useState<string>("50%")

    useEffect(() => {
        if (desktopContainerRef?.current) {

            const containerWidth = desktopContainerRef.current.clientWidth;
            const containerHeight = desktopContainerRef.current.clientHeight;

            setInbentoryMaxWidth(containerWidth.toString())
            setInbentoryMaxHeight(containerHeight.toString())
        }
    }, [desktopContainerRef])

    const handleClose = () => {
        setShowInbentoryComponent(false)
    }

    return (
        <Grid
            container
            id={App.INBENTORY}
            draggable
            onDragStart={(e: any) => onDragStart(e, App.INBENTORY)}
            onDragOver={onDragOver}
            onDrop={(e: any) => onDrop(e, App.INBENTORY)}
            sx={{
                position: "absolute",
                color: "green",
                boxShadow: "0 0 10px rgba(36, 240, 56,1)",
                backdropFilter: "blur(2px)",
                borderRadius: "10px 10px 0 0",
                top: `${appPosition.y}px`,
                left: `${appPosition.x}px`,
                height: "50%",
                width: "50%",
                resize: "both",
                overflow: "auto",
                maxWidth: inbentoryMaxWidth,
                maxHeight: inbentoryMaxHeight
            }}
        >
            <Grid
                container
                direction={"row"}
                sx={{
                    width: "100%"
                }}
            >
                <Grid
                    sx={{
                        width: "90%"
                    }}
                >
                    {App.INBENTORY}
                </Grid>
                <Grid
                    onClick={handleClose}
                    sx={{
                        width: "10%"
                    }}
                >
                    X
                </Grid>
            </Grid>
            <Grid>THINGS</Grid>
        </Grid>
    )
}
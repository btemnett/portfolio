import { Grid } from "@mui/material";
import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { App } from "@/enums/App";



export default function BHolderComponent(
    {
        setShowBholderComponent,
        appPosition,
        onDragStart,
        onDragOver,
        onDrop,
        desktopContainerRef
    }: {
        setShowBholderComponent: Dispatch<SetStateAction<boolean>>
        appPosition: any
        onDragStart: any
        onDragOver: any
        onDrop: any
        desktopContainerRef: RefObject<HTMLDivElement | null>
    }
) {

    const [webengoMaxWidth, setWebengoMaxWidth] = useState<string>("50%")
    const [webengoMaxHeight, setWebengoMaxHeight] = useState<string>("50%")

    useEffect(() => {
        if (desktopContainerRef?.current) {

            const containerWidth = desktopContainerRef.current.clientWidth;
            const containerHeight = desktopContainerRef.current.clientHeight;

            setWebengoMaxWidth(containerWidth.toString())
            setWebengoMaxHeight(containerHeight.toString())
        }
    }, [desktopContainerRef])

    const handleClose = () => {
        setShowBholderComponent(false)
    }

    return (
        <Grid
            container
            id={App.BHOLDER}
            draggable
            onDragStart={(e: any) => onDragStart(e, App.BHOLDER)}
            onDragOver={onDragOver}
            onDrop={(e: any) => onDrop(e, App.BHOLDER)}
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
                maxWidth: webengoMaxWidth,
                maxHeight: webengoMaxHeight
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
                    {App.BHOLDER}
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
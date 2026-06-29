import { Grid } from "@mui/material";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { App } from "@/enums/App";



export default function BenttyComponent(
    {
        setShowBenttyComponent,
        appPosition,
        onDragStart,
        onDragOver,
        onDrop,
        desktopContainerRef
    }: {
        setShowBenttyComponent: Dispatch<SetStateAction<boolean>>
        appPosition: any
        onDragStart: any
        onDragOver: any
        onDrop: any
        desktopContainerRef: RefObject<HTMLDivElement | null>
    }
) {

    const containerRef = useRef<HTMLDivElement>(null);

    const [benttyMaxWidth, setBenttyMaxWidth] = useState<string>("50%")
    const [benttyMaxHeight, setBenttyMaxHeight] = useState<string>("50%")
    const [command, setCommand] = useState<string>("50%")
    const displayTextRef = useRef<string>("");

    useEffect(() => {
        if (containerRef.current) {
            // Creates a dynamic style rule directly for this element instance
            const sheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;

            // Target the container dynamically using a data attribute
            sheet.insertRule('[data-no-scrollbar]::-webkit-scrollbar { display: none; }', 0);
        }
    }, []);


    useEffect(() => {
        if (desktopContainerRef?.current) {

            const containerWidth = desktopContainerRef.current.clientWidth;
            const containerHeight = desktopContainerRef.current.clientHeight;

            setBenttyMaxWidth(containerWidth.toString())
            setBenttyMaxHeight(containerHeight.toString())
        }
    }, [desktopContainerRef])

    const handleClose = () => {
        setShowBenttyComponent(false)
    }

    return (
        <Grid
            container
            id={App.BENTTY}
            draggable
            onDragStart={(e: any) => onDragStart(e, App.BENTTY)}
            onDragOver={onDragOver}
            onDrop={(e: any) => onDrop(e, App.BENTTY)}
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
                overflow: "hidden",
                maxWidth: benttyMaxWidth,
                maxHeight: benttyMaxHeight
            }}
        >
            <Grid
                sx={{
                    width: "100%",
                    height: "95%",
                    backgroundColor: "rgba(12, 13, 12, 0.80)",
                    overflowY: "auto",
                    position: "relative",
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}
            >
                <Grid
                    sx={{
                        width: "100%",
                        height: "5%",
                    }}
                >
                    Ben OS 42.256.1500-bos0-1 (tty1)
                </Grid>
                <Grid
                    container
                    direction={"row"}
                    spacing={1}
                    sx={{
                        width: "100%",
                        height: "5%",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Grid
                        id="ps"
                        sx={{
                            height: "5%",
                        }}
                    >
                        {"[ root@bt 10:25 /]=>"}
                    </Grid>
                    <Grid>
                        { }
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                sx={{
                    width: "100%",
                    height: "5%",
                    backgroundImage: "linear-gradient(to left, rgba(36, 240, 56, 0.3), rgba(71, 10, 87, 0.5))",
                    position: "relative"
                }}
            >
                <Grid
                    sx={{
                        width: "90%"
                    }}
                >
                    {App.BENTTY}
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
        </Grid>
    )
}
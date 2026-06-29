'use client'

import { Grid } from '@mui/material';
import ScreenSaverComponent from './screenSaverComponent';
import { useEffect, useRef, useState } from 'react'
import { IBoundaryBox } from '@/interfaces/IBoundaryBox';
import { useInactivityTimer } from '../hooks/screenSaverHook';
import Image from 'next/image';
import LoaderComponent from './loaderComponent';
import { App } from '@/enums/App';
import WobengoComponent from './wobengo';
import { useMousePosition } from '../hooks/mousePositionHook';
import { percentageToPixels } from '../utils/percentageToPixels';
import InbentoryComponent from './inbentory';
import BHolderComponent from './beholder';
import BenttyComponent from './bentty';
import BeepBoopBopComponent from './beepBoopBop';
import BenOsComponent from './benOs';


export default function PortfolioComponent(
    {
        animationElementskillsArray
    }: {
        animationElementskillsArray: Array<{ skill: string }>
    }
) {

    const desktopContainerRef = useRef<HTMLDivElement>(null);

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const [boundaryBox, setBoundaryBox] = useState<IBoundaryBox | null>(null)
    const [app, setApp] = useState<App>(App.BEN_OS);

    const { mousex, mousey } = useMousePosition();

    // loader component
    const [showLoaderComponent, setShowLoaderComponent] = useState<boolean>(false);

    // screen saver
    const { seconds, resetTimer } = useInactivityTimer();
    const showScreensaver = seconds >= 100;

    // ben os icon
    const [showBenOsComponent, setShowBenOsComponent] = useState<boolean>(false);
    const [benOsPosition, setBenOsPosition] = useState({ x: 10, y: 10 });


    const handleBenOsIconOnClick = () => {
        if (!showBenOsComponent) {
            setShowLoaderComponent(true);
            setApp(App.BEN_OS);
        }
    }

    // wobengo
    const [showWobengoComponent, setShowWobengoComponent] = useState<boolean>(false);
    const [wobengoPosition, setWebengoPosition] = useState({ x: 10, y: 10 });

    const handleWobengoIconOnClick = () => {
        if (!showWobengoComponent) {
            setShowLoaderComponent(true);
            setApp(App.WOBENGO);
        }
    }

    // bentty
    const [showBenttyComponent, setShowBenttyComponent] = useState<boolean>(false);
    const [benttyPosition, setBenttyPosition] = useState({ x: 10, y: 10 });


    const handleBenttyIconOnClick = () => {
        if (!showBenttyComponent) {
            setShowLoaderComponent(true);
            setApp(App.BENTTY);
        }
    }

    // bholder
    const [showBholderComponent, setShowBholderComponent] = useState<boolean>(false);
    const [bholderPosition, setBholderPosition] = useState({ x: 10, y: 10 });


    const handleBholderIconOnClick = () => {
        if (!showBholderComponent) {
            setShowLoaderComponent(true);
            setApp(App.BHOLDER);
        }
    }

    // inbentory
    const [showInbentoryComponent, setShowInbentoryComponent] = useState<boolean>(false);
    const [inbentoryPosition, setInbentoryPosition] = useState({ x: 10, y: 10 });


    const handleInbentoryIconOnClick = () => {
        if (!showInbentoryComponent) {
            setShowLoaderComponent(true);
            setApp(App.INBENTORY);
        }
    }

    // beep boop bop
    const [showBeepBoopBopComponent, setShowBeepBoopBopComponent] = useState<boolean>(false);
    const [beepBoopBopPosition, setBeepBoopBopPosition] = useState({ x: 10, y: 10 });

    const handleBeepBoopBopIconOnClick = () => {
        if (!showBeepBoopBopComponent) {
            setShowLoaderComponent(true);
            setApp(App.BEEP_BOOP_BOP);
        }
    }

    const onDragStart = (e: any, id: string) => {

        const rect = e.currentTarget?.getBoundingClientRect();
        const obj = {
            id,
            appPositionX: rect.left,
            appPositionY: rect.top,
            mousex,
            mousey
        }
        console.log(JSON.stringify(obj))
        e.dataTransfer?.setData("text/plain", JSON.stringify(obj));
    };

    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDrop = (e: any) => {
        e.preventDefault();
        const stringifiedObj = e.dataTransfer?.getData("text/plain");
        const obj = JSON.parse(stringifiedObj)

        const initialXDiff = obj.mousex - obj.appPositionX;
        const initialYDiff = obj.mousey - obj.appPositionY;
        const newPositionCoords = { x: e.clientX - initialXDiff, y: e.clientY - initialYDiff }

        switch (obj.id) {
            case App.WOBENGO:
                setWebengoPosition(newPositionCoords)
                break;
            case App.BEN_OS:
                setBenOsPosition(newPositionCoords)
                break;
            case App.BENTTY:
                setBenttyPosition(newPositionCoords)
                break;
            case App.INBENTORY:
                setInbentoryPosition(newPositionCoords)
                break;
            case App.BHOLDER:
                setBholderPosition(newPositionCoords)
                break;
            case App.BEEP_BOOP_BOP:
                setBeepBoopBopPosition(newPositionCoords)
                break;
            default:
                break
        }
    };

    // use effects
    useEffect(() => {
        const currentBoundaryBox = getBoundaryBox();
        setBoundaryBox(currentBoundaryBox);
        if (desktopContainerRef.current) {

            const containerWidth = desktopContainerRef.current.clientWidth;
            const containerHeight = desktopContainerRef.current.clientHeight;

            const calculatedPxWidth = percentageToPixels(25, containerWidth);
            const calculatedPxHeight = percentageToPixels(25, containerHeight);
            setWebengoPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
            setBenOsPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
            setInbentoryPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
            setBenttyPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
            setBeepBoopBopPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
            setBholderPosition({ x: calculatedPxWidth, y: calculatedPxHeight })
        }
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
                    <ScreenSaverComponent
                        animationElementskillsArray={animationElementskillsArray}
                        boundaryBox={boundaryBox}
                        showScreensaver={showScreensaver}
                    />
                )
            }
            <Grid
                style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }}
                ref={desktopContainerRef}
            >
                <Image
                    src="/desktop_background.jpg"
                    alt="Desktop background"
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                    onDragOver={onDragOver}
                    onDrop={(e: any) => onDrop(e)}
                />
                {
                    showLoaderComponent && (
                        <LoaderComponent
                            setShowLoaderComponent={setShowLoaderComponent}
                            app={app}
                            setShowBenOsComponent={setShowBenOsComponent}
                            setShowWobengoComponent={setShowWobengoComponent}
                            setShowBenttyComponent={setShowBenttyComponent}
                            setShowBholderComponent={setShowBholderComponent}
                            setShowInbentoryComponent={setShowInbentoryComponent}
                            setShowBeepBoopBopComponent={setShowBeepBoopBopComponent}
                        />
                    )
                }
                {
                    showWobengoComponent && (
                        <WobengoComponent
                            setShowWobengoComponent={setShowWobengoComponent}
                            appPosition={wobengoPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
                {
                    showBenOsComponent && (
                        <BenOsComponent
                            setShowBenOsComponent={setShowBenOsComponent}
                            appPosition={benOsPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
                {
                    showBeepBoopBopComponent && (
                        <BeepBoopBopComponent
                            setShowBeepBoopBopComponent={setShowBeepBoopBopComponent}
                            appPosition={beepBoopBopPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
                {
                    showBenttyComponent && (
                        <BenttyComponent
                            setShowBenttyComponent={setShowBenttyComponent}
                            appPosition={benttyPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
                {
                    showBholderComponent && (
                        <BHolderComponent
                            setShowBholderComponent={setShowBholderComponent}
                            appPosition={bholderPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
                {
                    showInbentoryComponent && (
                        <InbentoryComponent
                            setShowInbentoryComponent={setShowInbentoryComponent}
                            appPosition={inbentoryPosition}
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            desktopContainerRef={desktopContainerRef}
                        />
                    )
                }
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
                    backgroundImage: "radial-gradient(circle at 60% 50%, rgba(36, 240, 56, 0.3), rgba(71, 10, 87, 0.5))"
                }}
                style={{ minHeight: "5%", width: "100%", position: "absolute", bottom: 0, zIndex: 5000, color: "green", }}
            >

                <Grid size={2}>
                    <Image
                        src="/ben_os_icon.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                        priority
                        onClick={handleBenOsIconOnClick}
                    />
                </Grid>
                <Grid size={2}>
                    <Image
                        src="/beholder.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                        priority
                        onClick={handleBholderIconOnClick}
                    />
                </Grid>
                <Grid size={2}>
                    <Image
                        src="/bentty.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                        priority
                        onClick={handleBenttyIconOnClick}
                    />
                </Grid>
                <Grid size={2}>
                    <Image
                        src="/inbentory.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                        priority
                        onClick={handleInbentoryIconOnClick}
                    />
                </Grid>
                <Grid size={2}>
                    <Image
                        src="/wobengo.png"
                        alt="Desktop background"
                        quality={100}
                        width={55}
                        height={55}
                        priority
                        onClick={handleWobengoIconOnClick}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}


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
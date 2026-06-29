import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { Grid } from "@mui/material";
import LoaderOutputComponent from "./loaderOutputComponent";
import { Dispatch, SetStateAction } from "react";
import { App } from "@/enums/App";


export default function LoaderComponent(
    {
        setShowLoaderComponent,
        app,
        setShowBenOsComponent,
        setShowWobengoComponent,
        setShowBenttyComponent,
        setShowBholderComponent,
        setShowInbentoryComponent,
        setShowBeepBoopBopComponent
    }: {
        setShowLoaderComponent: Dispatch<SetStateAction<boolean>>
        app: App
        setShowBenOsComponent: Dispatch<SetStateAction<boolean>>
        setShowWobengoComponent: Dispatch<SetStateAction<boolean>>
        setShowBenttyComponent: Dispatch<SetStateAction<boolean>>
        setShowBholderComponent: Dispatch<SetStateAction<boolean>>
        setShowInbentoryComponent: Dispatch<SetStateAction<boolean>>
        setShowBeepBoopBopComponent: Dispatch<SetStateAction<boolean>>
    }
) {
    
    return (
        <Grid
            container
            sx={{
                position: "absolute",
                color: "green",
                boxShadow: "0 0 10px rgba(36, 240, 56,1)",
                backdropFilter: "blur(2px)",
                borderRadius: "10px 10px 0 0",
                top: "25%",
                left: "25%",
                right: "25%",
                bottom: "25%",
                overflow: "hidden"
            }}
        >
            <LoaderOutputComponent 
                setShowLoaderComponent={setShowLoaderComponent}
                app={app}
                setShowBenOsComponent={setShowBenOsComponent}
                setShowWobengoComponent={setShowWobengoComponent}
                setShowBenttyComponent={setShowBenttyComponent}
                setShowBholderComponent={setShowBholderComponent}
                setShowInbentoryComponent={setShowInbentoryComponent}
                setShowBeepBoopBopComponent={setShowBeepBoopBopComponent}
            />
            <Grid
                sx={{
                    width: "100%",
                    height: "5%",
                    backgroundImage: "linear-gradient(to left, rgba(36, 240, 56, 0.3), rgba(71, 10, 87, 0.5))",
                    // borderRadius: "0 0 10px 10px",
                    position: "relative"
                }}
            >
                BenTty
            </Grid>
        </Grid>
    )
}
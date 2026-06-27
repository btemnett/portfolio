import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { Grid } from "@mui/material";
import LoaderOutputComponent from "./loaderOutputComponent";
import { Dispatch, SetStateAction } from "react";


export default function LoaderComponent(
    {
        applicationDetails,
        setShowLoaderComponent
    }: {
        applicationDetails: IApplicationDetails,
        setShowLoaderComponent: Dispatch<SetStateAction<boolean>>
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
            <LoaderOutputComponent applicationDetails={applicationDetails} setShowLoaderComponent={setShowLoaderComponent}/>
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
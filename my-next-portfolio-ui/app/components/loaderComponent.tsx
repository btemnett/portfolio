import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { Grid } from "@mui/material";


export default function LoaderComponent(
    {
        applicationDetails
    }: {
        applicationDetails: IApplicationDetails
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
                borderRadius: "10px 10px 10px 10px",
                top: "25%",
                left: "25%",
                right: "25%",
                bottom: "25%",
                overflow: "hidden"
            }}
        >
            <Grid
                sx={{
                    width: "100%",
                    height: "95%",
                    backgroundColor: "rgba(12, 13, 12, 0.80)",
                    position: "relative"
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
                <Grid>
                    {"[ root@bt 10:25 /]=>" + " " + `${applicationDetails.prefixes.join(" ")} ${applicationDetails.path} ${applicationDetails.flags.join(" ")}`}
                </Grid>
            </Grid>
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
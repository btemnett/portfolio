import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { ICommand } from "@/interfaces/ICommand";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";


const cliPrompt = "[ root@bt 10:25 /]=>";


export default function LoaderOutputComponent(
    {
        applicationDetails
    }: {
        applicationDetails: IApplicationDetails
    }
) {

    // const applicationDetails = {
    //     name: "Ben OS",
    //     path: "/usr/bin/ben_os",
    //     prefixes: [
    //         "nohup"
    //     ],
    //     flags: [
    //         "--startup",
    //         "--debug=false",
    //         "&"
    //     ],
    //     postFixes: [
    //         {
    //             prefixes: [],
    //             path: "/bin/run",
    //             flags: ["flag1", "flag2"],
    //             postFixes: []
    //         },
    //         {
    //             prefixes: [],
    //             path: "/bin/run",
    //             flags: ["flag1", "flag2"],
    //             postFixes: []
    //         },
    //         {
    //             prefixes: [],
    //             path: "/bin/run",
    //             flags: ["flag1", "flag2"],
    //             postFixes: []
    //         }
    //     ]
    // }

    const [currentOutputIndex, setCurrentOutputIndex] = useState(0);
    const [writingToOutput, setWritingToOutput] = useState(false);

    let outputArray = [
        "Ben OS 42.256.1500-bos0-1 (tty1)"
    ]

    const getNextOutput = !writingToOutput && currentOutputIndex < outputArray.length;

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        outputArray.push(
            cliPrompt + " " + `${applicationDetails.prefixes.join(" ")} ${applicationDetails.path} ${applicationDetails.flags.join(" ")}`
        );

        outputArray = outputArray.concat(getPostFixOutputArray(applicationDetails.postFixes))

    }, [applicationDetails]);

    let speed = 1000

    useEffect(() => {
        let i = 0;
        setDisplayedText("");

        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [getNextOutput]);

    // useEffect(() => {
    //     let i = 0;
    //     setDisplayedText(""); // Reset text on change

    //     const typingInterval = setInterval(() => {
    //         if (i < text.length) {
    //             setDisplayedText((prev) => prev + text.charAt(i));
    //             i++;
    //         } else {
    //             clearInterval(typingInterval);
    //         }
    //     }, speed);

    //     return () => clearInterval(typingInterval);
    // }, [text, speed]);



    return (
        <Grid
            sx={{
                width: "100%",
                height: "95%",
                backgroundColor: "rgba(12, 13, 12, 0.80)",
                position: "relative"
            }}
        >
            {

                applicationDetails && outputArray.map(x => {
                    return (
                        <Grid
                            sx={{
                                width: "100%",
                                height: "5%",
                            }}
                        >
                            {`${x}`}
                        </Grid>
                    )
                })

            }

            <Grid>
                {"[ root@bt 10:25 /]=>" + " " + `${applicationDetails.prefixes.join(" ")} ${applicationDetails.path} ${applicationDetails.flags.join(" ")}`}
            </Grid>
        </Grid>
    )
}

const getPostFixOutputArray = (providedPostfixes: Array<ICommand>) => {

    let returnedPostfixes: Array<string> = []

    let currentPostFixIndex = 0;
    while (currentPostFixIndex < providedPostfixes.length) {
        const postFix = `${providedPostfixes[currentPostFixIndex].prefixes.join(" ")} ${providedPostfixes[currentPostFixIndex].path} ${providedPostfixes[currentPostFixIndex].flags.join(" ")}`;

        if (providedPostfixes[currentPostFixIndex].postFixes.length > 0) {
            returnedPostfixes = returnedPostfixes.concat([postFix]).concat(getPostFixOutputArray(providedPostfixes[currentPostFixIndex].postFixes));
        } else {
            returnedPostfixes.push(postFix);
        }
        currentPostFixIndex++;
    }

    return returnedPostfixes;
}
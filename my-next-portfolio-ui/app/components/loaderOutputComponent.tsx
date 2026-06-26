import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { ICommand } from "@/interfaces/ICommand";
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


export default function LoaderOutputComponent(
    {
        applicationDetails
    }: {
        applicationDetails: IApplicationDetails
    }
) {
    const [commandArray, setCommandArray] = useState<Array<{
        command: string;
        id: string;
        func: Dispatch<SetStateAction<string>>;
    }>>([])

    const [prefixMain, setPrefixMain] = useState("");
    const [pathMain, setPathMain] = useState("");
    const [flagMain, setFlagMain] = useState("");

    const [path1, setPath1] = useState("");
    const [flag1, setFlag1] = useState("");

    const [path2, setPath2] = useState("");
    const [flag2, setFlag2] = useState("");

    const [path3, setPath3] = useState("");
    const [flag3, setFlag3] = useState("");

    const [path4, setPath4] = useState("");
    const [flag4, setFlag4] = useState("");

    const [path5, setPath5] = useState("");
    const [flag5, setFlag5] = useState("");

    const [path6, setPath6] = useState("");
    const [flag6, setFlag6] = useState("");

    const [path7, setPath7] = useState("");
    const [flag7, setFlag7] = useState("");

    const [path8, setPath8] = useState("");
    const [flag8, setFlag8] = useState("");

    const [path9, setPath9] = useState("");
    const [flag9, setFlag9] = useState("");

    const [path10, setPath10] = useState("");
    const [flag10, setFlag10] = useState("");

    const pathFuncs = [
        setPath1,
        setPath2,
        setPath3,
        setPath4,
        setPath5,
        setPath6,
        setPath7,
        setPath8,
        setPath9,
        setPath10,
    ]
    const flagFuncs = [
        setFlag1,
        setFlag2,
        setFlag3,
        setFlag4,
        setFlag5,
        setFlag6,
        setFlag7,
        setFlag8,
        setFlag9,
        setFlag10,
    ]

    let text: string = "";
    const commandCharacterIndex = useRef(0);
    const commandIndex = useRef(0);
    const displayTextRef = useRef("");

    // let commandArray: Array<{
    //     command: string;
    //     id: string;
    //     func: Dispatch<SetStateAction<string>>
    // }> = []

    let j = 0

    useEffect(() => {
        let freshCommandArray = []
        const prefixCommandObject = {
            command: applicationDetails.prefixes.join(" "),
            id: "prefixMain",
            func: setPrefixMain
        }
        freshCommandArray.push(prefixCommandObject)
        const pathCommandObject = {
            command: applicationDetails.path,
            id: "pathMain",
            func: setPathMain
        }
        freshCommandArray.push(pathCommandObject)
        const flagCommandObject = {
            command: applicationDetails.flags.join(" "),
            id: "flagMain",
            func: setFlagMain
        }
        freshCommandArray.push(flagCommandObject)

        for (let i = 0; i < applicationDetails.postFixes.length; i++) {
            const newCommandObjects = [
                {
                    command: applicationDetails.postFixes[i].path,
                    id: `path${i + 1}`,
                    func: pathFuncs[i]
                },
                {
                    command: applicationDetails.postFixes[i].flags.join(" "),
                    id: `flagh${i + 1}`,
                    func: flagFuncs[i]
                }
            ]
            freshCommandArray = freshCommandArray.concat(newCommandObjects);
        }

        setCommandArray(freshCommandArray);
    }, []);

    let speed = 20;


    useEffect(() => {
        if (commandIndex.current === 0 && commandArray.length > 0) {
            text = commandArray[commandIndex.current].command;
        }

        const typingInterval = setInterval(() => {

            if (commandIndex.current < commandArray.length) {

                if (commandCharacterIndex.current < text.length) {

                    displayTextRef.current += text.charAt(commandCharacterIndex.current);
                    commandArray[commandIndex.current].func(() => displayTextRef.current);
                    commandCharacterIndex.current += 1;

                } else {
                    commandIndex.current += 1

                    if (commandIndex.current < commandArray.length) {

                        commandCharacterIndex.current = 0
                        displayTextRef.current = "";
                        text = commandArray[commandIndex.current].command;
                        displayTextRef.current += text.charAt(commandCharacterIndex.current);
                        commandArray[commandIndex.current].func(() => displayTextRef.current);
                        commandCharacterIndex.current += 1;
                    }
                }
            } else {
                clearInterval(typingInterval);
            }
        }, speed);


        console.log("clearing interval")
        return () => clearInterval(typingInterval);

    }, [commandArray]);


    return (
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
                <Grid
                    id="prefixMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {prefixMain}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {pathMain}
                </Grid>
                <Grid
                    id="flagMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flagMain}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path1}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag1}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path2}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag2}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path3}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag3}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path4}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag4}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path5}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag5}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path6}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag6}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path7}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag7}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path8}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag8}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path9}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag9}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
                    id="prefixMain"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="pathMain"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag10}
                </Grid>
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
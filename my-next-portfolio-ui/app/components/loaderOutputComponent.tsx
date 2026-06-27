import { IApplicationDetails } from "@/interfaces/IApplicationDetails";
import { ICommand } from "@/interfaces/ICommand";
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


export default function LoaderOutputComponent(
    {
        applicationDetails,
        setShowLoaderComponent
    }: {
        applicationDetails: IApplicationDetails,
        setShowLoaderComponent: Dispatch<SetStateAction<boolean>>
    }
) {
    const [commandArray, setCommandArray] = useState<Array<{
        command: string;
        id: string;
        func: Dispatch<SetStateAction<string>>;
    }>>([]);

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

    const [path11, setPath11] = useState("");
    const [flag11, setFlag11] = useState("");

    const [path12, setPath12] = useState("");
    const [flag12, setFlag12] = useState("");

    const [path13, setPath13] = useState("");
    const [flag13, setFlag13] = useState("");

    const [path14, setPath14] = useState("");
    const [flag14, setFlag14] = useState("");

    const [path15, setPath15] = useState("");
    const [flag15, setFlag15] = useState("");

    const [path16, setPath16] = useState("");
    const [flag16, setFlag16] = useState("");

    const [path17, setPath17] = useState("");
    const [flag17, setFlag17] = useState("");

    const [path18, setPath18] = useState("");
    const [flag18, setFlag18] = useState("");

    const [path19, setPath19] = useState("");
    const [flag19, setFlag19] = useState("");

    const [path20, setPath20] = useState("");
    const [flag20, setFlag20] = useState("");

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
        setPath11,
        setPath12,
        setPath13,
        setPath14,
        setPath15,
        setPath16,
        setPath17,
        setPath18,
        setPath19,
        setPath20
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
        setFlag11,
        setFlag12,
        setFlag13,
        setFlag14,
        setFlag15,
        setFlag16,
        setFlag17,
        setFlag18,
        setFlag19,
        setFlag20
    ]

    let text: string = "";
    const commandCharacterIndex = useRef(0);
    const commandIndex = useRef(0);
    const displayTextRef = useRef("");
    const bottomRef = useRef<HTMLElement>(null);

    let j = 0
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Creates a dynamic style rule directly for this element instance
            const sheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;

            // Target the container dynamically using a data attribute
            sheet.insertRule('[data-no-scrollbar]::-webkit-scrollbar { display: none; }', 0);
        }
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

    let speed = 1;


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

                    if (commandIndex.current > 20 && commandIndex.current % 2 === 0) {

                        bottomRef.current = document.getElementById("c1")

                        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }
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
                setShowLoaderComponent(false)
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
                overflowY: "auto",
                position: "relative",
                msOverflowStyle: 'none',  // IE/Edge inline
                scrollbarWidth: 'none',   // Firefox inline
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
                id="c1"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path1"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path1}
                </Grid>
                <Grid
                    id="flag1"
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
                id="c2"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path2"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path2}
                </Grid>
                <Grid
                    id="flag2"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag2}
                </Grid>
            </Grid>
            <Grid
                container
                id="c3"
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
                    id="path3"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path3}
                </Grid>
                <Grid
                    id="flag3"
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
                id="c4"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path4"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path4}
                </Grid>
                <Grid
                    id="flag4"
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
                id="c5"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path5"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path5}
                </Grid>
                <Grid
                    id="flag5"
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
                id="c6"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path6"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path6}
                </Grid>
                <Grid
                    id="flag6"
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
                id="c7"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path7"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path7}
                </Grid>
                <Grid
                    id="flag7"
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
                id="c8"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path8"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path8}
                </Grid>
                <Grid
                    id="flag8"
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
                id="c9"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path9"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path9}
                </Grid>
                <Grid
                    id="flag9"
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
                id="c10"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path10"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path10}
                </Grid>
                <Grid
                    id="flag10"
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
                id="c11"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path11"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path11}
                </Grid>
                <Grid
                    id="flag11"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag11}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c12"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path12"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path12}
                </Grid>
                <Grid
                    id="flag12"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag12}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c13"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path13"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path13}
                </Grid>
                <Grid
                    id="flag13"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag13}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c14"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path14"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path14}
                </Grid>
                <Grid
                    id="flag14"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag14}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c15"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path15"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path15}
                </Grid>
                <Grid
                    id="flag15"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag15}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c16"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path16"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path16}
                </Grid>
                <Grid
                    id="flag16"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag16}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c17"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path17"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path17}
                </Grid>
                <Grid
                    id="flag17"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag17}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c18"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path18"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path18}
                </Grid>
                <Grid
                    id="flag18"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag18}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c19"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path19"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path19}
                </Grid>
                <Grid
                    id="flag19"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag19}
                </Grid>
            </Grid>
            <Grid
                container
                direction={"row"}
                spacing={1}
                id="c20"

                sx={{
                    width: "100%",
                    height: "5%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Grid
                    id="path20"
                    sx={{
                        paddingLeft: "10%",
                        height: "5%",
                    }}
                >
                    {path20}
                </Grid>
                <Grid
                    id="flag20"
                    sx={{
                        height: "5%",
                    }}
                >
                    {flag20}
                </Grid>
            </Grid>
        </Grid>
    )
}


const getNewOrder = (order: Array<string>) => {
    console.log(`Old order: ${JSON.stringify(order)}`)
    const indexOfDummy = order.findIndex(x => x === "dummy");
    console.log(`index of dumm7: ${indexOfDummy}`)
    const frontHalf = order.slice(0, indexOfDummy);
    console.log(`front: ${JSON.stringify(frontHalf)}`)
    const backHalf = order.slice(indexOfDummy + 2);

    console.log(`back: ${JSON.stringify(backHalf)}`)

    const shiftedOrder = order[indexOfDummy + 1];
    console.log(`shift: ${JSON.stringify(shiftedOrder)}`)

    let newOrder = frontHalf

    if (shiftedOrder) {
        newOrder.push(shiftedOrder)
    }

    newOrder.push("dummy");
    newOrder = newOrder.concat(backHalf)
    console.log(JSON.stringify(newOrder))
    return newOrder;
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
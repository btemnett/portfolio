

export const AnimationElement = (props:any) => {
    return (
        <span 
            style={{
                position: "absolute",
                top: props.element.yPosition,
                left: props.element.xPosition
            }}
            id={props.element.id}
            key={props.i}
        >
            {props.element.text}
        </span>
    )
}
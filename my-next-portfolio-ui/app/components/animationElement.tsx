import { IBoundaryBox } from "@/interfaces/IBoundaryBox";
import { useState, useRef, useEffect } from "react";


const getVelocity = () => {
    let randomNumber = Number(Math.random().toFixed(2))
    while (randomNumber < 0.5) {
        randomNumber = Number(Math.random().toFixed(2))
    }

    let signRandom = Math.random();

    if (signRandom < 0.5) {
        return randomNumber * -1;
    } else {
        return randomNumber;
    }
}

export default function AnimationElement(
    {
        element,
        boundaryBox
    }: {
        element: string,
        boundaryBox: IBoundaryBox | null
    }
) {

    const boxRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const physics = useRef({
        x: 0,
        y: 0,
        dX: getVelocity(),
        dY: getVelocity(),
    });

    let animationFrameId: number;

    useEffect(() => {

        setPosition({
            x: 0,
            y: 0
        })
        physics.current.x = 0
        physics.current.y = 0

        const updatePhysics = () => {
            
            if (!boundaryBox) return
            if (!boxRef.current) return;

            const boxWidth = boxRef.current.offsetWidth;
            const boxHeight = boxRef.current.offsetHeight;

            const leftOrigin = -1 * (boundaryBox.width / 2);
            const rightOrigin = boundaryBox.width / 2;
            const topOrigin = -1 * (boundaryBox.height / 2);
            const bottomOrigin = boundaryBox.height / 2;

            // Move the coordinates forward
            physics.current.x += physics.current.dX;
            physics.current.y += physics.current.dY;

            // Bounce off Left / Right boundary box walls
            if (physics.current.x <= leftOrigin) {
                physics.current.x = leftOrigin;
                physics.current.dX = -physics.current.dX;
            } else if (physics.current.x + boxWidth >= rightOrigin) {
                physics.current.x = rightOrigin - boxWidth;
                physics.current.dX = -physics.current.dX;
            }

            // Bounce off Top / Bottom boundary box walls
            if (physics.current.y <= topOrigin) {
                physics.current.y = topOrigin;
                physics.current.dY = -physics.current.dY;
            } else if (physics.current.y + boxHeight >= bottomOrigin) {
                physics.current.y = bottomOrigin - boxHeight;
                physics.current.dY = -physics.current.dY;
            }

            // Update React state to trigger the visual move
            setPosition({ x: physics.current.x, y: physics.current.y });

            // Request next screen frame
            animationFrameId = requestAnimationFrame(updatePhysics);
        };

        // Start the animation loop
        animationFrameId = requestAnimationFrame(updatePhysics);

        // Clean up animation loop if the user leaves the page
        return () => cancelAnimationFrame(animationFrameId);
    }, [boundaryBox]);

    return (
        <div
            ref={boxRef}
            style={{
                position: "absolute",
                color: "green",
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                willChange: 'transform',
            }}
        >
            {element}
        </div>
    );
}
import React, { useState, useEffect } from "react";

const Cursor = (props) => {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveMouse = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveMouse);
        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, []);

    return (
        <div
            className="mainCursor"
            style={{
                position: "fixed",
                left: cursor.x - 10,  // Adjust cursor position
                top: cursor.y - 10,   // Adjust cursor position
                width: "20px",        // Cursor size
                height: "20px",       // Cursor size
                backgroundColor: "red", // Cursor color
                pointerEvents: "none", // Prevent interaction with cursor
                clipPath: "polygon(82% 72%, 41% 64%, 12% 95%, 23% 6%)", // Custom shape
                ...props.style, // Apply any extra styles passed as props
            }}
        />
    );
};

export default Cursor;

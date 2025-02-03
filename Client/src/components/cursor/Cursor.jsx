import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
const Cursor = (props) => {
    const [cursor, setCursor] = useState({x: 0, y: 0});
    console.log(cursor)
    useEffect(() => {
        const moveMouse = (e) => {
            const x = e.clientX
            const y = e.clientY
            setCursor({x: x, y: y});

        };

        window.addEventListener('mousemove', moveMouse);
        return () => {
            window.removeEventListener('mousemove', moveMouse);
        };

    }, []);

    const variants={
         default: {
             x:cursor.x - 16,
             y:cursor.y - 16
         }
    }

    return (
        <div>
            <div className="container">
                <motion.div className="main_cursor"
                            variants={variants}
                            animate={cursor}
                            style={{...props.style || props.homeStyle,zIndex:"10"}}


                ></motion.div>
            </div>
        </div>
    );
};

export default Cursor;
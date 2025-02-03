import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "../components/cursor/Cursor.jsx";

const Nav = () => {
    const [dynamicstyle,setDynamicstyle] = useState({});
    let mouseHover =()=>{
        setDynamicstyle({
            mixBlendMode: "difference",
            backgroundColor: "red",
            width: '20px',
            height: '20px',
            borderRadius: '30px',
            transition:"none",
            clipPath:"polygon(82% 72%, 41% 64%, 12% 95%, 23% 6%)",



        })
    }
    let disHover = () => {
        setDynamicstyle(null);  // Reset to default position
    };



    const [menuActive, setMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu function
    const toggleMenu = () => {
        setMenuActive((prev) => !prev);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close the menu only if clicked outside and not on the menu icon
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('#crose')) {
                setMenuActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close menu when clicking a link
    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <header id="nav" className={isScrolled ? "stck" : ""}>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <a href="#">
                            <img
                                src={`https://mdrohan551.github.io/ASSIGNMENT1/images/logo/logo.png`}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div
                        id="crose"
                        className={`manu_icon ${menuActive ? "active" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div className="bars" style={{ display: menuActive ? "none" : "block" }}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="crose" style={{ display: menuActive ? "block" : "none" }}>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className={`main_menu ${menuActive ? "active" : ""}`} ref={menuRef}>
                        <ul>
                            <li onMouseEnter={mouseHover} onMouseLeave={disHover}><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li onMouseEnter={mouseHover} onMouseLeave={disHover}><Link to="/about" onClick={closeMenu}>About us</Link></li>
                            <li onMouseEnter={mouseHover} onMouseLeave={disHover}><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                            <li onMouseEnter={mouseHover} onMouseLeave={disHover}><Link to="/service" onClick={closeMenu}>Service</Link></li>
                            <li onMouseEnter={mouseHover} onMouseLeave={disHover}><Link to="/contact" onClick={closeMenu}>Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cursor
            style={dynamicstyle}

            />
        </header>
    );
};

export default Nav;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "../components/cursor/Cursor.jsx";
import AnimatedModal from "../components/Dashboard/AnimatedModal.jsx"; // Ensure correct path
import DashboardStore from "../store/DashboardStore.js";


const Nav = () => {
    const { isLogin } = DashboardStore();
    const [menuActive, setMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);  // State to control modal visibility
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

    // Handle modal show/hide
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

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
                            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>About us</Link></li>
                            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                            <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
                            <li><Link to="/contact" onClick={closeMenu}>Contact us</Link></li>

                            {
                                isLogin() === true ?
                                    <li><Link to="/dashboard" className="btn btn-success p-2" onClick={handleClose}>Dashboard</Link></li>
                                    :
                                    <li><button className="btn btn-outline-danger p-2" onClick={handleShow}>Login</button></li>

                                // Add more login/logout options based on your requirement
                            }

                        </ul>

                    </div>
                </div>
            </div>
            <Cursor />

            {/* AnimatedModal receives showModal and handleClose to control modal visibility */}
            <AnimatedModal show={showModal} handleClose={handleClose} />
        </header>
    );
};

export default Nav;

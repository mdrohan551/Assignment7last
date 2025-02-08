import React, { lazy, Suspense } from 'react';
import {Toaster} from "react-hot-toast";

const Nav = lazy(() => import('./Nav.jsx'));
const Footer = lazy(() => import('./Footer.jsx'));

const MasterLayout = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Nav/>
            <Toaster
                position="top-center"
                toastOptions={{
                    className: "",
                    duration: 4000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                        fontSize: "16px",
                        borderRadius: "10px",
                    },
                }}
            />

            {props.children}
            <Footer/>
        </Suspense>
    );
};

export default MasterLayout;
import React, { lazy, Suspense } from 'react';

const Nav = lazy(() => import('./Nav.jsx'));
const Footer = lazy(() => import('./Footer.jsx'));

const MasterLayout = (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Nav/>
            {props.children}
            <Footer/>
        </Suspense>
    );
};

export default MasterLayout;
import React from 'react';
import MasterLayout from '../Layout/MasterLayout';
import Home from '../components/Home';
import BLog from "../components/BLog/BLog.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
           <Home/>
           <BLog/>
        </MasterLayout>
    );
};

export default HomePage;
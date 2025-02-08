import React, { useEffect } from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import About from "../components/about/About.jsx";
import GetDataStore from "../store/GetDataStore.js";

const AboutPage = () => {
    const { TeamDetailsRequest,getAboutRequest } = GetDataStore();

    // Fetch data when the component is mounted
    useEffect(() => {
        const fetchData = async () => {
            await TeamDetailsRequest();  // Fetch team details
            await getAboutRequest();  // Fetch team details
        };
        fetchData();
    }, [TeamDetailsRequest,getAboutRequest]);

    return (
        <MasterLayout>
            <About /> {/* About component will use the fetched data */}
        </MasterLayout>
    );
};

export default AboutPage;

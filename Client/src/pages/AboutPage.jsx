import React, {useEffect} from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import About from "../components/about/About.jsx";
import GetDataStore from "../store/GetDataStore.js";

const AboutPage = () => {
    const { TeamDetailsRequest}=GetDataStore();
    useEffect(() => {
        (async ()=>{
            await TeamDetailsRequest()
        })()
    }, []);
    return (
        <MasterLayout>
            <About/>
        </MasterLayout>
    );
};

export default AboutPage;
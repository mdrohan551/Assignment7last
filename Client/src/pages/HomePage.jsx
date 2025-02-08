import React, {useEffect} from 'react';
import MasterLayout from '../Layout/MasterLayout';
import Home from '../components/Home';
import BLog from "../components/BLog/BLog.jsx";
import useGetDataStore from "../store/GetDataStore.js";

const HomePage = () => {


    const {homeDataReq, BlogDataReq} = useGetDataStore(); // Correct Zustand usage
    useEffect(() => {
        (async () => {
            await homeDataReq(); // Call API on mount
            await BlogDataReq(); // Call API on mount
        })()
    }, [BlogDataReq]);

    return (
        <MasterLayout>
            <Home/>
            <BLog/>
        </MasterLayout>
    );
};

export default HomePage;


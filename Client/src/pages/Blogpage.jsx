import React, { useEffect } from 'react';  // Importing useEffect
import MasterLayout from "../Layout/MasterLayout.jsx";
import BLog from "../components/BLog/BLog.jsx";
import GetDataStore from '../store/GetDataStore.js';

const Blogpage = () => {
    const { BlogDataReq, blogData } = GetDataStore();  // Accessing BlogDataReq and blogData from the store

    useEffect(() => {
        (async () => {
            await BlogDataReq();  // Fetch blog data when the component is mounted
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BlogDataReq]);  // Add BlogDataReq as dependency to ensure re-run when it changes

    return (
        <MasterLayout>
            <BLog data={blogData} />  {/* Passing the fetched data to BLog component */}
        </MasterLayout>
    );
};

export default Blogpage;

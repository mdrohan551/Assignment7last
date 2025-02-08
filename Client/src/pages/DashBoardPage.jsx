import React, { useEffect } from 'react';
import MasterLayout from '../Layout/MasterLayout.jsx';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardStore from '../store/DashboardStore.js';
import GetDataStore from '../store/GetDataStore.js';

const DashBoardPage = () => {
    const { contactgetDataReq } = DashboardStore();
    const { BlogDataReq, ServiceDetailsRequest, TeamDetailsRequest } = GetDataStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    contactgetDataReq(),
                    BlogDataReq(),
                    ServiceDetailsRequest(),
                    TeamDetailsRequest()
                ]);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [contactgetDataReq, BlogDataReq, ServiceDetailsRequest, TeamDetailsRequest]);

    return (
        <MasterLayout>
            <Dashboard />
        </MasterLayout>
    );
};

export default DashBoardPage;

import React, {useEffect} from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import BlogDetails from "../components/Details/BlogDetails.jsx";
import {useParams} from "react-router-dom";
import useGetDataStore from "../store/GetDataStore.js";

const DetailsPage = () => {

    const { BLogDetailsRequest } =useGetDataStore() // Correct Zustand usage
    const {slug}= useParams();
    useEffect(() => {
        (async ()=>{
            await BLogDetailsRequest(slug)
        })()
    }, []);

    return (
        <MasterLayout>
            <div className="container py-5">
                <div className="row item-center">
                    <div className="col-12  col-lg-10 ">
                        <BlogDetails />
                    </div>
                    <div className="col-4  col-lg-2 ">
                        <div className="BlogSide">
                            <img src={'https://cdn.prod.website-files.com/6495758c052e260635fe09fd/64cbc832fdc69b0456786a64_melissa-doug.gif'} className="w-100 h-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default DetailsPage;
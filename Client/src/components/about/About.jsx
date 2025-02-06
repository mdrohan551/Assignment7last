import React, { useEffect } from 'react';
import TeamSection from "../Team/TeamSection.jsx";
import GetDataStore from "../../store/GetDataStore.js";

const About = () => {
    const { TeamDetails, imgURl, TeamDetailsRequest } = GetDataStore();

    // useEffect will run only once, when the component is mounted
    useEffect(() => {
        // Fetch team details on component mount
        TeamDetailsRequest();
    }, [TeamDetailsRequest]);  // Now it will depend on TeamDetailsRequest

    // Ensure the image URL is correct
    let img = `${imgURl}/${TeamDetails?.data?.image}`

    console.log(TeamDetails);  // Check the full image URL

    return (
        <>
            <div>
                <div className="bg-black">
                    <div className="main_title">
                        <h1>About us</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 py-5">
                            <div className="about_img">
                                <img
                                    src={img}
                                    className="w-100 h-100"
                                    alt="About Us Image"  // Alt text for accessibility
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 py-2 py-lg-5">
                            <div className="about_text py-0 py-lg-5">
                                <h1>{TeamDetails?.data?.name}</h1>
                                <p className="mt-3">{TeamDetails?.data?.designation}</p>
                            </div>
                            <a href="/contact" className="btn btn-outline-warning mt-3 mt-lg-0">Contact Us</a>
                        </div>

                        <TeamSection />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

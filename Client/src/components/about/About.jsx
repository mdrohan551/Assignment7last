import React from 'react';
import TeamSection from "../Team/TeamSection.jsx";
import GetDataStore from "../../store/GetDataStore.js";
import { Link } from 'react-router-dom';

const About = () => {
    const { getAbout, imgURl } = GetDataStore();  // Correctly destructure `imgURl`
    const aboutData = getAbout?.data?.[0]; // Access first element in data array

    // Construct the image URL safely
    const img = aboutData?.image ? `${imgURl}/${aboutData.image}` : "/default-avatar.png";

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
                                    alt="About us"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 py-2 py-lg-5">
                            <div className="about_text py-0 py-lg-5">
                                <h1>{aboutData?.name || 'Default Title'}</h1>
                                <p className="mt-3">{aboutData?.description || 'Default Description'}</p>
                            </div>
                            <Link className="btn btn-outline-warning mt-3 mt-lg-0" to={'/contact'}>Contact us</Link>
                        </div>

                        {/* Render Team Section */}
                        <TeamSection />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

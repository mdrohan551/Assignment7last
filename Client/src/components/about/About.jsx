import React from 'react';
import TeamSection from "../Team/TeamSection.jsx";

const About = () => {
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
                        <div className="col-lg-6 col-12 py-5 ">
                            <div className="about_img">
                                <img
                                    src={'https://cdn.ostad.app/public/upload/2024-10-02T14-43-31.171Z-Course%20Thumbnail%2005%20v2.jpg'}
                                    className="w-100 h-100" alt="About us"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 py-2 py-lg-5 ">
                            <div className="about_text py-0 py-lg-5">
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, beatae.</h1>
                                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                                    magnam minima non odio quas ullam.</p>
                            </div>
                            <button className="btn btn-outline-warning mt-3 mt-lg-0">contact us</button>
                        </div>


                        <TeamSection/>


                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
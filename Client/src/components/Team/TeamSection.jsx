import React, { useEffect } from "react";
import GetDataStore from "../../store/GetDataStore.js";

const TeamSection = () => {
    const { TeamDetails, imgURl, TeamDetailsRequest } = GetDataStore();

    // useEffect will run only once, when the component is mounted
    useEffect(() => {
        // Fetch team details on component mount
        TeamDetailsRequest();
    }, [TeamDetailsRequest]);  // Now it will depend on TeamDetailsRequest

    // Ensure the image URL is correct
    return (
        <section id="team" className="team content-section py-5">
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col-md-12">
                        <h2 className="section-title">Our Team</h2>
                        <h3 className="caption gray">Meet the people who make awesome stuff</h3>
                    </div>
                </div>

                <div className="row g-3 justify-content-center">
                    {/* Ensure TeamDetails.data exists and is an array */}
                    {TeamDetails?.data?.length > 0 && TeamDetails.data.map((member, index) => {
                        const img = `${imgURl}/${member.image}`;  // Image URL construction
                        return (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team-member">
                                    <figure className="team-img">
                                        <img src={img} alt={member.name} className="img-fluid rounded-circle" />
                                    </figure>
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-role">{member.designation}</p> {/* Assuming 'designation' holds the role */}
                                    <p className="team-description text-black-50">{member.description}</p> {/* Assuming 'description' exists */}
                                    <ul className="social-links">
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

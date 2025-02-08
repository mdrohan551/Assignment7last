import React, { useEffect } from "react";
import GetDataStore from "../../store/GetDataStore.js";

const TeamSection = () => {
    const { TeamDetails, imgURl, TeamDetailsRequest } = GetDataStore();

    // Fetch team details only if not already available
    useEffect(() => {
        if (!TeamDetails?.data || TeamDetails.data.length === 0) {
            TeamDetailsRequest();
        }
    }, [TeamDetails, TeamDetailsRequest]);

    // Debugging logs


    // Ensure data is actually team data, not blog data
    if (!TeamDetails?.data || TeamDetails.data.length === 0) {
        return <div className="text-center">Loading...</div>;
    }

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
                    {TeamDetails.data.map((member, index) => {
                        // Ensure correct data mapping
                        const img = `${imgURl}/${member.image || "default-avatar.png"}`;

                        return (
                            <div key={member._id} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="team-member">
                                    <figure className="team-img">
                                        <img src={img} alt={member.name} className="img-fluid rounded-circle" />
                                    </figure>
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-role">{member.designation || "Unknown Role"}</p>
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

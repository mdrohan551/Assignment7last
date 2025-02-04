import React from "react";

const TeamSection = () => (
    <section id="team" className="team content-section py-5">
        <div className="container">
            <div className="row text-center mb-4">
                <div className="col-md-12">
                    <h2 className="section-title">Our Team</h2>
                    <h3 className="caption gray">Meet the people who make awesome stuff</h3>
                </div>
            </div>

            <div className="row g-3 justify-content-center">
                {[
                    {
                        name: "Lauren Cox",
                        role: "Creative Director",
                        img: "http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg",
                        description: "Creative mind behind our designs. Passionate about art and aesthetics.",
                    },
                    {
                        name: "Jessie Barnett",
                        role: "UI/UX Designer",
                        img: "http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg",
                        description: "Designs user-friendly interfaces that elevate user experience.",
                    },
                    {
                        name: "Terry Fletcher",
                        role: "Web Developer",
                        img: "http://www.mauritiusdsilva.com/themes/hallooou/assets/images/terry-fletcher.jpg",
                        description: "Builds fast, secure, and scalable web applications.",
                    },
                ].map((member, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="team-member">
                            <figure className="team-img">
                                <img src={member.img} alt={member.name} className="img-fluid rounded-circle" />
                            </figure>
                            <h4 className="team-name">{member.name}</h4>
                            <p className="team-role">{member.role}</p>
                            <p className="team-description text-black-50">{member.description}</p>
                            <ul className="social-links">
                                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TeamSection;

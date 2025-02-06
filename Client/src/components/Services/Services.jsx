import React, { useEffect } from 'react';
import GetDataStore from "../../store/GetDataStore.js";

const Services = () => {
    const { ServiceDetailsRequest, ServiceDetails } = GetDataStore();

    useEffect(() => {
        ServiceDetailsRequest(); // Fetch data when the component mounts
    }, []);

    // List of Bootstrap icons to cycle through
    const icons = [
        "bi bi-graph-up",
        "bi bi-person-lines-fill",
        "bi bi-globe",
        "bi bi-wallet2",
        "bi bi-check-circle",
        "bi bi-person-check"
    ];

    return (
        <div>
            <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h1 className="fw-bold fs-1 text-uppercase">
                                Our Services
                            </h1>
                            <p className="sec-icon text-white">
                                <i className="bi bi-gear"></i> {/* Bootstrap icon */}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                        {ServiceDetails?.data?.map((service, index) => (
                            <div className="col" key={service._id}>
                                <div className="service-card">
                                    <div className="icon-wrapper">
                                        <i className={icons[index % icons.length]}></i> {/* Ensure all items get an icon */}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

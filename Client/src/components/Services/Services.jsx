import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="section-header text-center">
                            <h1 className="fw-bold fs-1 text-uppercase">
                                Our
                              Services
                            </h1>
                            <p className="sec-icon text-white ">
                                <i className="bi bi-gear"></i> {/* Bootstrap icon */}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-graph-up"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Tracking Lead</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-person-lines-fill"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Advanced Targeting solution</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-globe"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Global Reach & Quality Traffic</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-wallet2"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Flexible pricing models</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-check-circle"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Advanced optimization technologies & methodologies</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-card">
                                <div className="icon-wrapper">
                                    <i className="bi bi-person-check"></i> {/* Bootstrap icon */}
                                </div>
                                <h3>Dedicated account management team</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quisquam consequatur necessitatibus eaque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

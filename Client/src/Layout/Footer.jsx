import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-main bg-dark ">
                <div className="container">
                    <div className="row address-main">
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <i className="bi bi-geo-alt"></i> {/* Bootstrap icon for location */}
                                </div>
                                <div className="add-content">
                                    <h5>Address</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut veniam </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <i className="bi bi-telephone"></i> {/* Bootstrap icon for phone */}
                                </div>
                                <div className="add-content">
                                    <h5>Phone</h5>
                                    <p> +(91) 000000000 <br/>
                                        +(91) 000000000 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="address-box clearfix">
                                <div className="add-icon">
                                    <i className="bi bi-envelope"></i> {/* Bootstrap icon for email */}
                                </div>
                                <div className="add-content">
                                    <h5>Email</h5>
                                    <p><a href="mailto:collab@codewithfaraz.com"
                                          style={{textDecoration: 'none'}}>collab@codewithfaraz.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Footer */}
                <footer className="bg-dark text-center text-white">
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="bi bi-facebook"></i> {/* Bootstrap icon for Facebook */}
                            </a>

                            {/* Twitter */}
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="bi bi-twitter"></i> {/* Bootstrap icon for Twitter */}
                            </a>

                            {/* Google */}
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="bi bi-google"></i> {/* Bootstrap icon for Google */}
                            </a>

                            {/* Instagram */}
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i className="bi bi-instagram"></i> {/* Bootstrap icon for Instagram */}
                            </a>
                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}

                    {/* Copyright */}
                    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        codewithfaraz © 2023 All Rights Reserved.
                    </div>
                    {/* Copyright */}
                </footer>
            </footer>

        </div>
    );
};

export default Footer;
import React from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import Contact from "../components/contact/Contact.jsx";

const ContactPage = () => {
    return (
        <MasterLayout>
            <div className="main_title">
                <h1>contact us</h1>
            </div>
            <div className="container py-5 ">

                <div className="row">
                    <div className="col-lg-12  justify-content-center d-flex">
                        <Contact/>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default ContactPage;
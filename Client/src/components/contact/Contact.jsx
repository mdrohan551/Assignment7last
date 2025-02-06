import React, { useState } from "react";
import GetDataStore from "../../store/GetDataStore.js";
import CommonButton from "./CommonButton.jsx";
import toast from "react-hot-toast";

const Contact = () => {
    const { ContactForm, FormChange, ContactFormRequest } = GetDataStore();

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);  // Add a loading state

    const handleSubmit = async (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        e.preventDefault();
        if (!ContactForm.name) {
            toast.error("আপনার নাম লিখুন!");
            return;
        }

        if (!ContactForm.subject) {
            toast.error(`${ContactForm.name}, অনুগ্রহ করে বিষয় লিখুন!`);
            return;
        }

        if (!ContactForm.email || !emailRegex.test(ContactForm.email)) {
            toast.error(`${ContactForm.name}, অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন!`);
            return;
        }

// Proceed with sending the data if both subject and valid email are present


        if (!ContactForm.message) {
            toast.error(`${ContactForm.name}, অনুগ্রহ করে আপনার বার্তা লিখুন!`);
            return;
        }

        setLoading(true);  // Set loading to true before the API request
        let res = await ContactFormRequest(ContactForm);
        setLoading(false);  // Reset loading after receiving the response

        if (res.success === false) {
            alert(res.message);

        } else {
            toast.success(res.message);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000); // Reset after 4 seconds
        }
    };

    return (
        <div className="contact-container">
            {!submitted ? (
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={ContactForm.name}
                        onChange={(e) => { FormChange("name", e.target.value) }}
                    />
                    <input
                        type="text"
                        placeholder="Your subject"
                        required
                        value={ContactForm.subject}
                        onChange={(e) => { FormChange("subject", e.target.value) }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={ContactForm.email}
                        onChange={(e) => { FormChange("email", e.target.value) }}
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        value={ContactForm.message}
                        onChange={(e) => { FormChange("message", e.target.value) }}
                    ></textarea>

                    {/* Disable button while loading */}
                    <CommonButton
                        className="text-uppercase"
                        onClick={handleSubmit}
                        text="Send"
                        disabled={loading}  // Disable the button when loading
                    >
                        {loading ? "Sending..." : "Send"}  {/* Change text when loading */}
                    </CommonButton>
                </div>
            ) : (
                <div className="success-message">
                    <div className="checkmark">✔</div>
                    <p>Thank you so much!</p>
                </div>
            )}
        </div>
    );
};

export default Contact;

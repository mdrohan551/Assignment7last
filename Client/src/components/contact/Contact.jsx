import React, { useState } from "react";


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000); // ৪ সেকেন্ড পর রিসেট হবে
    };

    return (
        <div className="contact-container">
            {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
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

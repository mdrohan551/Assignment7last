import React from "react";
import DashboardStore from "../../../store/DashboardStore.js";
import toast from "react-hot-toast";
import Image from "../Image.jsx";

const CreateAbout = () => {
    const { CreateAbout, FormChangeAbout, CreateAboutRequest,UpdateSocialLinks } = DashboardStore();

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation to ensure all fields are filled
        if (!CreateAbout.name || !CreateAbout.description || !CreateAbout.image) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }
        const success = await CreateAboutRequest(CreateAbout);
        if (success.success === true) {
            toast.success("About section created successfully!");
        } else {
            toast.error("About creation failed!");
        }
    };

    return (
        <div className="card p-3">
            <form onSubmit={handleSubmit}>
                {/* Image Upload */}
                <Image imageFormChangeBlogs={FormChangeAbout} />

                {/* Name */}
                <input
                    type="text"
                    onChange={(e) => FormChangeAbout("name", e.target.value)}
                    value={CreateAbout.name}
                    className="input mt-3 fs-3"
                    placeholder="About Name"
                />

                {/* Description */}
                <textarea
                    onChange={(e) => FormChangeAbout("description", e.target.value)}
                    value={CreateAbout.description}
                    className="input mt-3 fs-5"
                    placeholder="Full About Content"
                    style={{ resize: "both", width: "100%", minHeight: "100px" }}
                />

                {/* Social Links */}
                <input
                    type="text"
                    onChange={(e) => FormChangeAbout("socialLinks.facebook", e.target.value)}
                    value={CreateAbout.socialLinks?.facebook || ""}
                    className="input mt-3 fs-5"
                    placeholder="Facebook Link"
                />
                <input
                    type="text"
                    onChange={(e) => FormChangeAbout("socialLinks.linkedin", e.target.value)}
                    value={CreateAbout.socialLinks?.linkedin || ""}
                    className="input mt-3 fs-5"
                    placeholder="LinkedIn Link"
                />
                <input
                    type="text"
                    onChange={(e) => FormChangeAbout("socialLinks.twitter", e.target.value)}
                    value={CreateAbout.socialLinks?.twitter || ""}
                    className="input mt-3 fs-5"
                    placeholder="Twitter Link"
                />

                <button type="submit" className="btn btn-primary mt-3">
                    Create About
                </button>
            </form>
        </div>
    );
};

export default CreateAbout;

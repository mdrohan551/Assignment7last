import React from "react";

import toast from "react-hot-toast";
import Image from "../Image.jsx";
import DashboardStore from "../../../store/DashboardStore.js";

const CreateService = () => {
    const { CreateService, FormChangeService, CreateServiceRequest, FormChangeBlogs } = DashboardStore()

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation to ensure all fields are filled
        if (!CreateService.title || !CreateService.description || !CreateService.image) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }

        const success = await CreateServiceRequest(CreateService);
        if (success.success === true) {
            toast.success("Service created successfully!");
        } else {
            toast.error("Service creation failed!");
        }
    };

    return (
        <div className="card p-3">
            <form onSubmit={handleSubmit}>
                {/* Image Upload */}
                <Image/>

                {/* Title */}
                <input
                    type="text"
                    onChange={(e) => FormChangeService("title", e.target.value)}
                    value={CreateService.title}
                    className="input mt-3 fs-3"
                    placeholder="Service Title"
                />

                {/* Description */}
                <textarea
                    onChange={(e) => FormChangeService("description", e.target.value)}
                    value={CreateService.description}
                    className="input mt-3 fs-5"
                    placeholder="Service Description"
                    style={{ resize: "both", width: "100%", minHeight: "100px" }}
                />

                <button type="submit" className="btn btn-primary mt-3">
                    Create Service
                </button>
            </form>
        </div>
    );
};

export default CreateService;

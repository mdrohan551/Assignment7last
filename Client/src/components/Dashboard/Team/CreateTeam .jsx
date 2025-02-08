import React from "react";

import toast from "react-hot-toast";
import Image from "../Image.jsx";
import DashboardStore from "../../../store/DashboardStore.js";

const CreateTeam = () => {
    const { CreateTeam, FormChangeTeam, CreateTeamRequest } = DashboardStore()

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!CreateTeam.name || !CreateTeam.designation || !CreateTeam.image) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }

        const success = await CreateTeamRequest(CreateTeam);
        if (success.success === true) {
            toast.success("Team member added successfully!");
        } else {
            toast.error("Failed to add team member!");
        }
    };

    return (
        <div className="card p-3">
            <form onSubmit={handleSubmit}>
                {/* Image Upload */}
                <Image />

                {/* Name */}
                <input
                    type="text"
                    onChange={(e) => FormChangeTeam("name", e.target.value)}
                    value={CreateTeam.name}
                    className="input mt-3 fs-3"
                    placeholder="Team Member Name"
                />

                {/* Designation */}
                <input
                    type="text"
                    onChange={(e) => FormChangeTeam("designation", e.target.value)}
                    value={CreateTeam.designation}
                    className="input mt-3 fs-5"
                    placeholder="Designation"
                />

                <button type="submit" className="btn btn-primary mt-3">
                    Create Team Member
                </button>
            </form>
        </div>
    );
};

export default CreateTeam;

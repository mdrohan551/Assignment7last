import React from "react";
import DashboardStore from "../../../store/DashboardStore.js";
import toast from "react-hot-toast";
import Image from "../Image.jsx";

const HeroCreate = () => {
    const { CreateHero, FormChangeHero, CreateHeroRequest } = DashboardStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!CreateHero.title || !CreateHero.subtile) {  // Make sure to check for image here as well
            toast.error("Please fill in all fields and upload an image.");
            return;
        }

        const success = await CreateHeroRequest(CreateHero);
        console.log(CreateHero)
        if (success.success === true) {
            toast.success("Hero section created successfully!");
        } else {
            toast.error("Hero section creation failed!");
        }
    };

    return (
        <div className="card p-3">
            <form onSubmit={handleSubmit}>
                {/* Pass FormChangeHero to Image component */}
                <Image  /> {/* Only pass FormChangeHero for Hero */}

                <input
                    type="text"
                    onChange={(e) => FormChangeHero("title", e.target.value)}
                    value={CreateHero.title}
                    className="input mt-3 fs-3"
                    placeholder="Title"
                />
                <textarea
                    onChange={(e) => FormChangeHero("subtile", e.target.value)}
                    value={CreateHero.subtile}
                    className="input mt-3 fs-5"
                    placeholder="Subtitle"
                    style={{ resize: "both", width: "100%", minHeight: "100px" }}
                />
                <button type="submit" className="btn btn-primary mt-3">
                    Create Hero Section
                </button>
            </form>
        </div>
    );
};

export default HeroCreate;

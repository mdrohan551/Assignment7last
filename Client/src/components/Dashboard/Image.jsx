import React, { useState } from 'react';
import toast from "react-hot-toast";
import DashboardStore from "../../store/DashboardStore.js";

const Image = (props) => {
    const { multerImage } = DashboardStore();
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Handle Image Upload
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            toast.error("No file selected");
            return;
        }
        setUploading(true); // Set uploading state to true
        let res = await multerImage(file);
        console.log("multerImage response:", res);
        setUploading(false); // Set uploading state to false after response

        if (res) {
            setSelectedImage(res);
            props.imageFormChangeBlogs("image", res); // Send image URL to parent
        }
    };

    return (
        <div>
            <label htmlFor="file" className="d-block mb-2 text-center">
                <i className="bi bi-cloud-arrow-up" style={{ fontSize: "60px" }}></i>
            </label>
            <input id="file" type="file" hidden onChange={handleImageUpload} />

            {uploading && <p>Uploading image...</p>} {/* Show loading text */}
            {selectedImage && (
                <p>Image uploaded: <a href={selectedImage} target="_blank" rel="noopener noreferrer">View Image</a></p> // Display the uploaded image
            )}
        </div>
    );
};

export default Image;

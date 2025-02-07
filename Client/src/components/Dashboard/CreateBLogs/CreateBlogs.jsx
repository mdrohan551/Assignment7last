import React, {useState} from "react";
import DashboardStore from "../../../store/DashboardStore.js";
import toast from "react-hot-toast";

const CreateBlogs = () => {
    const {CreateBlog, FormChangeBlogs, CreateBLogsrequest, multerImage} = DashboardStore();

    // State to track file upload status
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
        setUploading(false); // Set uploading state to false after response
        if (res) {
            setSelectedImage(res);
            FormChangeBlogs("image", res); // শুধুমাত্র URL পাঠাও
        }
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation to ensure all fields are filled
        if (!CreateBlog.title || !CreateBlog.content || !CreateBlog.author || !CreateBlog.category || !CreateBlog.image) {
            toast.error("Please fill in all fields and upload an image.");
            return;
        }
        const success = await CreateBLogsrequest(CreateBlog);
        if (success.success === true) {
            toast.success("Blog created successfully!");
        } else {
            toast.error("Blog creation failed!");
        }
    };

    return (
        <div className="card p-3">
            <form onSubmit={handleSubmit}>
                <label htmlFor="file" className="d-block mb-2 text-center">
                    <i className="bi bi-cloud-arrow-up" style={{fontSize: "60px"}}></i>
                </label>
                <input id="file" type="file" hidden onChange={handleImageUpload}/>

                {uploading && <p>Uploading image...</p>} {/* Show loading text */}
                {selectedImage &&
                    <p>Image uploaded: <a href={selectedImage} target="_blank" rel="noopener noreferrer">View Image</a>
                    </p>} {/* Show uploaded image link */}

                <input
                    type="text"
                    onChange={(e) => FormChangeBlogs("title", e.target.value)}
                    value={CreateBlog.title}
                    className="input mt-3 fs-3"
                    placeholder="Blog Title"
                />
                <textarea
                    onChange={(e) => FormChangeBlogs("content", e.target.value)}
                    value={CreateBlog.content}
                    className="input mt-3 fs-5"
                    placeholder="Content"
                    style={{resize: "both", width: "100%", minHeight: "100px"}}
                />
                <input
                    type="text"
                    onChange={(e) => FormChangeBlogs("author", e.target.value)}
                    value={CreateBlog.author}
                    className="input mt-3 fs-5"
                    placeholder="Author"
                />
                <input
                    type="text"
                    onChange={(e) => FormChangeBlogs("category", e.target.value)}
                    value={CreateBlog.category}
                    className="input mt-3 fs-5"
                    placeholder="Category"
                />
                <button type="submit" className="btn btn-primary mt-3">
                    Create Blog
                </button>
            </form>
        </div>
    );
};

export default CreateBlogs;

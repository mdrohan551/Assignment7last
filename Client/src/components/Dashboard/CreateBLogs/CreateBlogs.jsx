import React from "react";
import DashboardStore from "../../../store/DashboardStore.js";
import toast from "react-hot-toast";
import Image from "../Image.jsx";

const CreateBlogs = () => {
    const { CreateBlog, FormChangeBlogs, CreateBLogsrequest } = DashboardStore();

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
                {/* Pass FormChangeBlogs to Image component */}
                <Image imageFormChangeBlogs={FormChangeBlogs}/>

                <input
                    type="text"
                    onChange={(e) => FormChangeBlogs("title", e.target.value)}
                    value={CreateBlog.title}
                    className="input mt-3 fs-3"
                    placeholder="Blog Title"
                />
                <textarea
                    onChange={(e) => {
                        const value = e.target.value;
                        const words = value.split(' ');  // Split the text into words
                        let formattedText = '';

                        words.forEach((word, index) => {
                            formattedText += word + ' ';
                            // After every 5th word, add a line break
                            if ((index + 1) % 5 === 0) {
                                formattedText += '\n';
                            }
                        });

                        // Update the state with formatted text
                        FormChangeBlogs("content", formattedText.trim());
                    }}
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

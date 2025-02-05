import React from "react";
import useGetDataStore from "../../store/GetDataStore.js";
import { Link } from "react-router-dom";

const Blog = () => {
    const { BlogData, imgURl } = useGetDataStore(); // Ensure fetch function is available

    if (!BlogData || !BlogData.data || BlogData.data.length === 0) {
        return <p>Loading...</p>;
    }

    // Function to truncate content to 80 words
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "... (Read more)";
        }
        return text;
    };

    return (
        <div>
            <div className="main_title">
                <h1>Our Blog</h1>
            </div>
            <div className="container py-5">
                <div className="row g-3">
                    {BlogData.data.map((item, index) => (
                        <Link to={`/details/${item.slug}`} key={index} className="col-lg-4 col-6 ">
                            <div className="card w-100 h-50 ">
                                <img
                                    src={`${imgURl}/${item.image}`}
                                    className="card-img-top img-fixed"
                                    alt="Blog Image"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        {truncateText(item.content, 80)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

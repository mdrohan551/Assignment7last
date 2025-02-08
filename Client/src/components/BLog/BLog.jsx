import React from "react";
import useGetDataStore from "../../store/GetDataStore.js";
import { Link } from "react-router-dom";

const Blog = () => {
    const { BlogData, imgURl } = useGetDataStore(); 

    if (!BlogData || !BlogData.data || BlogData.data.length === 0) {
        return <p>Loading...</p>;
    }

    // Function to truncate content
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "... Read More"
            : text;
    };

    // Function to show time ago
    const timeAgo = (dateString) => {
        const now = new Date();
        const createdDate = new Date(dateString);
        const diffInSeconds = Math.floor((now - createdDate) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInMonths / 12);

        if (diffInYears > 0) return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
        if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
        if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
        if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
        if (diffInMinutes > 0) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
        return "Just now";
    };

    return (
        <div>
            <div className="main_title">
                <h1>Our Blog</h1>
            </div>
            <div className="container py-5">
                <div className="row g-2">
                    {BlogData.data.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-4 mb-4" key={index}>
                            <Link to={`/details/${item.slug}`} className="blog-card">
                                <div className="cards">
                                    <div className="headers">
                                        <div className="images">
                                            <img
                                                src={`${imgURl}/${item.image}`}
                                                className="img"
                                                alt={item.title}
                                            />
                                            <span className="tags">{timeAgo(item.createdAt)}</span>
                                        </div>
                                        <div className="dates">
                                            <span>{item.category}</span>
                                        </div>
                                    </div>
                                    <div className="infos">
                                        <span className="titles ">{item.title}</span>
                                        <p className="descriptions">
                                            {truncateText(item.content, 18)}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

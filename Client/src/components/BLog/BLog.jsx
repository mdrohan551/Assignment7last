import React, { useEffect } from 'react';
import useGetDataStore from "../../store/GetDataStore.js";
import { Link } from "react-router-dom";

const Blog = () => {
    const { BlogData } = useGetDataStore(); // Ensure fetch function is available

    if (!BlogData || !BlogData.data || BlogData.data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="main_title"><h1>Our Blog</h1></div>
            <div className="container py-5">
                <div className="row g-3">
                    {BlogData.data.map((item, index) => (
                        <div key={index} className="col-lg-4 col-6">
                            <div className="card w-100 h-100">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.content}</p>
                                    <Link to={`/details/${item.slug}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

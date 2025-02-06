import React from 'react';
import GetDataStore from "../../store/GetDataStore.js";

const BlogDetails = () => {
    const {detailsBLog,imgURl} = GetDataStore()
    let img = `${imgURl}/${detailsBLog?.data?.image}`
    return (
        <div>
            <div className="blog">
                <div className="row">
                    <div className="col-12 ">
                        <div className="blog_img d-flex ">
                            <img
                                src={img}
                                className="img_details"
                                alt="blog_img"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="blog_text">
                            <blockquote style={{fontStyle: "italic"}}>
                                <h1 style={{fontSize: "24px", fontWeight: "bold"}}>
                                    {detailsBLog?.data?.title}<sub
                                    className="fw-normal"> ~ {detailsBLog?.data?.author}</sub>
                                </h1>
                            </blockquote>
                            <div className="meta">
                                <span className="pt-3"> <cite> {detailsBLog?.data?.category}</cite></span>
                            </div>
                            <p className="card-text pt-3">{detailsBLog?.data?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
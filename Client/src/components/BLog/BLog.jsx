import React from 'react';

const BLog = () => {
    return (
        <div>
            <div className="main_title "><h1>Our Blog</h1></div>
            <div className="container py-5">

                <div className="row g-3">
                    {
                        Array.from(Array(6).keys()).map((_, i) => (
                            <div className="col-lg-4 col-6">
                                <div className="card w-100 h-100">
                                    <img
                                        src={'https://cdn.ostad.app/public/upload/2024-10-02T14-43-31.171Z-Course%20Thumbnail%2005%20v2.jpg'}
                                        className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up
                                            the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BLog;
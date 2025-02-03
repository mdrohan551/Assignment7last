import React from 'react';
import myImg from "/my-img.png";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-5">
                        <div className="Hero_text">
                            <p className="fs-3 text-capitalize">Hello !!!</p>
                            <h1 className="text-white">I'm a <span className=" main_color">web designer </span>based in
                                Bangladesh</h1>
                            <button className="button mt-5">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Download CV
                                <i className="bi bi-download ps-2"></i>

                            </button>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-7">
                        <div className="Hero_image">
                            <img src={myImg} alt="img" className="w-100 h-100 mainImg"/>
                            <div className="img_bg"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home; 
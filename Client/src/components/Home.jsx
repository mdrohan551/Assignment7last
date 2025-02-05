import React, { useEffect, useState } from 'react';
import myImg from "/my-img.png";
import Cursor from "./cursor/Cursor.jsx";
import actof from "/actof.png";
import useGetDataStore from "../store/GetDataStore.js";
import GetDataStore from "../store/GetDataStore.js"; // Correct import

const Home = () => {
    const { homeData, detailsBLog} = useGetDataStore(); // Correct Zustand usage
    const [cursor, setCursor] = useState({});
    let img = `http://localhost:4000/${detailsBLog?.data?.image}`
    const onHover = () => {
        setCursor({
            width: "200px",
            height: "100px",
            zIndex: "1",
            clipPath: "none",
            backgroundImage: `url(${actof})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            borderRadius: "5px",
            border: "1px solid yellow",
        });
    };

    const onLeave = () => {
        setCursor({});
    };

    return (
        <>
            {homeData?.success ? (  // Check if homeData.success exists

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12 order-md-1 order-2 order-sm-1">
                            <div className="Hero_text">
                                <p className="fs-3 text-capitalize">Hello ,</p>
                                <h1 className="text-white">
                                    I'm a <span className="main_color">{homeData?.data.title}</span> based in
                                    Bangladesh
                                </h1>
                                <p className="fw-light paragrap">{homeData?.data.subtile}</p>
                                <button className="button mt-5">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Download CV
                                    <i className="bi bi-download ps-2"></i>
                                </button>

                                <div className="iconarea">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-12   order-sm-2 d-flex justify-content-sm-end px-md-0 p-px-md-0">
                            <div className="Hero_image">

                                <img
                                    // src={`${homeData.data.file}`}
                                    src={homeData?.data.file}
                                    alt="img"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onLeave}
                                    className="w-100 h-100 mainImg"
                                />
                                <div className="img_bg"></div>
                            </div>
                        </div>
                    </div>
                    <Cursor style={cursor} />
                </div>
            ) : (
                <p>Loading...</p>  // Show loading message until data loads
            )}
        </>
    );
};

export default Home;

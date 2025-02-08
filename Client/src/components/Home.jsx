import React, { useEffect, useState } from "react";
import myImg from "/my-img.png";
import Cursor from "./cursor/Cursor.jsx";
import useGetDataStore from "../store/GetDataStore.js";
import GetDataStore from "../store/GetDataStore.js"; // Correct import

const Home = () => {
  const { homeData, detailsBLog } = useGetDataStore(); // Correct Zustand usage
  let img = `http://localhost:4000/${homeData?.data?.file}`;

  return (
    <>
      {homeData?.success ? ( // Check if homeData.success exists
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12 order-md-1 order-2 order-sm-1">
              <div className="Hero_text">
                <p className="fs-3 text-capitalize">Hello ,</p>
                <h1 className="text-white">
                  I'm a{" "}
                  <span className="main_color">{homeData?.data.title}</span>{" "}
                  based in Bangladesh
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

                <div className="iconarea"></div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12   order-sm-2 d-flex justify-content-sm-end px-md-0 p-px-md-0">
              <div className="Hero_image">
                <img
                  // src={`${homeData.data.file}`}
                  src={img}
                  alt="img"
                  className="w-100 h-100 mainImg"
                />
                <div className="img_bg"></div>
              </div>
            </div>
          </div>
          <Cursor />
        </div>
      ) : (
        <p>Loading...</p> // Show loading message until data loads
      )}
    </>
  );
};

export default Home;

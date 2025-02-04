import React from 'react';
import myImg from "/my-img.png";
import Cursor from "./cursor/Cursor.jsx";
import actof from "/actof.png"; // Ensure it's correctly imported

const Home = () => {
    const [cursor, setCursor] = React.useState({});

    const onHover = () => {
        setCursor({
            width:"200px",
            height:"100px",
            zIndex: "1",
            clipPath: "none",
            backgroundImage: `url(${actof})`,  // Use `backgroundImage` and pass the correct URL
             backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            borderRadius: "5px",
            border:"1px solid yellow",


        });
    };

    const onLeave = () => {
        setCursor({});
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="Hero_text">
                            <p className="fs-3 text-capitalize">Hello !!!</p>
                            <h1 className="text-white">
                                I'm a <span className="main_color">web designer</span> based in
                                Bangladesh
                            </h1>
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
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="Hero_image">
                            <img
                                src={myImg}
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
        </>
    );
};

export default Home;

import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="container text-center position-absolute bottom-60 start-25">
                <div className="text-center">
                    <div className="btn btn-success" type="button">
                <span className="spinner-border spinner-border-sm"
                      role="status"></span>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Loader;
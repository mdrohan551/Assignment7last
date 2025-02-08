import React from 'react';
import GetDataStore from "../../store/GetDataStore.js";
const CommonButton = (props) => {
    let { isFormSubmit } = GetDataStore();  // This should reflect the form submission state from the store
    if (isFormSubmit === false) {
        return (
            <button
                onClick={props.onClick}
                type="submit"
                className={props.className}
                disabled={props.disabled}
            >
                {props.children || props.text}
            </button>
        );
    }
    return (
        <div>
            <button disabled className={props.className}>
                <div className="spinner-border spinner-border-sm mx-2" role="status"></div>
                {props.text || "Sending..."}
            </button>
        </div>
    );
};


export default CommonButton;
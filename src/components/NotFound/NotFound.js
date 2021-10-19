import React from "react";
import logo404 from "../../images/404.jpg";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid notfound" src={logo404} alt="" />
        </div>
    );
};

export default NotFound;

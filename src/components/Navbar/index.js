import React from "react";
import reactLogo from "../../images/logo.png";
import "./style.css";

export default function Navbar() {
    return(
        <nav>
            <img src={reactLogo} className="logo" alt="React Logo"/>
            <span className="navTitle">ReactFacts</span>
            <span className="navSubTitle">React Course - Project 1</span>    
        </nav>
    );
}
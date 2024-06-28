import React, { useState } from "react";
import "./Menu.css";

function Menu() {
    let [show, setShow] = useState(false);
    let addClass = () => {
        setShow(!show);
    };
    return (
        <div className="main">
            <div className="heading">
                <h1>MenuBaar </h1>
            </div>
            <div className={`lists ${show ? "show" : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="menu-button">
                <button onClick={addClass}>=</button>
            </div>
        </div>
    );
}

export default Menu;

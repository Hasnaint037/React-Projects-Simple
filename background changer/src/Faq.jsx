import React, { useState } from "react";
import "./Faq.css";

function Faq() {
    let [show, setShow] = useState(false);
    let hello = () => {
        setShow(!show);
    };
    return (
        <div className="outer">
            <div className="inner">
                <h1 onClick={hello}>Question is what</h1>
                <p className={show ? "active" : ""}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, culpa reprehenderit! Autem earum quos consectetur
                    iste. Assumenda, veniam doloremque delectus, sequi ea quam
                    consequatur modi ipsa officiis necessitatibus eaque
                    temporibus?
                </p>
            </div>
            <div className="inner">
                <h1 onClick={hello}>Question is what</h1>
                <p className={show ? "active" : ""}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, culpa reprehenderit! Autem earum quos consectetur
                    iste. Assumenda, veniam doloremque delectus, sequi ea quam
                    consequatur modi ipsa officiis necessitatibus eaque
                    temporibus?
                </p>
            </div>
            <div className="inner">
                <h1 onClick={hello}>Question is what</h1>
                <p className={show ? "active" : ""}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, culpa reprehenderit! Autem earum quos consectetur
                    iste. Assumenda, veniam doloremque delectus, sequi ea quam
                    consequatur modi ipsa officiis necessitatibus eaque
                    temporibus?
                </p>
            </div>
        </div>
    );
}

export default Faq;

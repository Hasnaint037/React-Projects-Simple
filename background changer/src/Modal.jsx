import React, { useState } from "react";
import "./Modal.css";

function Modal() {
    let [show, setShow] = useState(false);
    return (
        <div>
            {" "}
            <button className="btn" onClick={() => setShow(!show)}>
                Login
            </button>
            <div className={`modal ${show ? "show-modal" : ""}`}>
                <div className={`form ${show ? "show-form" : ""}`}></div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                neque alias consequuntur, doloribus fuga dignissimos quaerat?
                Excepturi sint quas repellendus fugiat. Facere, velit quod
                molestias doloribus unde praesentium! Ex, magnam.
            </p>
        </div>
    );
}

export default Modal;

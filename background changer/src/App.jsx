import React, { useState } from "react";
import Modal from "./Modal.jsx";
import Faq from "./Faq.jsx";
import Menu from "./Menu.jsx";

export default function App() {
    const [color, setColor] = useState("olive");
    return (
        // <div className="w-full h-screen" style={{ background: color }}>
        //   <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        //     <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-1 rounded-3xl">
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm text-white"
        //         style={{ background: "red" }}
        //         onClick={() => setColor("red")}
        //       >
        //         Red
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm  text-white"
        //         style={{ background: "blue" }}
        //         onClick={() => setColor("blue")}
        //       >
        //         Blue
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm  text-white"
        //         style={{ background: "green" }}
        //         onClick={() => setColor("green")}
        //       >
        //         Green
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm  text-white"
        //         style={{ background: "black" }}
        //         onClick={() => setColor("white")}
        //       >
        //         White
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm  text-black"
        //         style={{ background: "yellow" }}
        //         onClick={() => setColor("yellow")}
        //       >
        //         Yellow
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm  text-white"
        //         style={{ background: "black" }}
        //         onClick={() => setColor("black")}
        //       >
        //         Black
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm bg-pink-600  text-white"
        //         onClick={() => setColor("pink")}
        //       >
        //         Pink
        //       </button>
        //       <button
        //         className="outline-none py-1 px-3 rounded-2xl shadow-sm bg-purple-600  text-white"
        //         onClick={() => setColor("purple")}
        //       >
        //         Purple
        //       </button>
        //     </div>
        //   </div>
        // </div>
        // <Modal></Modal>
        <Faq></Faq>
        // <Menu></Menu>
    );
}

import React from "react";
import img from "./img.png";

function App() {
  return (
    <div
      style={{ background: "#072E33" }}
      className="lg:w-1/5 sm:w-full md:w-1/4 md:mx-1 transition-all hover:scale-105 mt-4 lg:ms-3 rounded-lg border border-md p-3 border-white hover:border-red-700  hover:border-5 select-none cursor-pointer"
    >
      <div>
        <img src={img} alt="" width="100%" height="50%" />
      </div>
      <div>
        <h3 className="font-bold text-lg mt-2 mb-2">Title goes here</h3>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          eaque ut non tempora debitis veniam cumque
        </p>
      </div>
    </div>
  );
}

export default App;

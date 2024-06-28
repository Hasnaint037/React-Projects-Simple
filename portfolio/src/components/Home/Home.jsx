import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="container mx-auto">
      <div className=" w-5/6 mx-auto  mt-20 flex mb-8 justify-between">
        <div>
          <img
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt=""
            width="400px"
            className="img"
          />
        </div>
        <div className="mt-40">
          <button className="bg-red-700 me-20 hover:bg-orange-800 px-8 py-4 rounded text-white">
            Download Now
          </button>
        </div>
        {/* <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" /> */}
      </div>
      <div className="w-5/6 mx-auto mt-40">
        <img
          className="mx-auto img"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt=""
          width="500px"
        />
        <p className="text-center w-1/2 mx-auto mt-10 mb-10 font-semibold text-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet
          eaque corrupti, accusantium fuga, laudantium inventore ullam fugit
          placeat delectus accusamus dolore molestias! Est facilis pariatur
          tempore laborum sunt numquam!
        </p>
      </div>
    </div>
  );
}

export default Home;

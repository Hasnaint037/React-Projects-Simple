import React from "react";

function About() {
  return (
    <div className="container mt-14 mx-auto">
      <div className=" w-5/6  mx-auto flex justify-between">
        <div className="">
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt=""
          />
        </div>
        <div className="text-center w-5/6">
          <p className="text-4xl font-bold">React development is</p>
          <p className="text-4xl font-bold">carried out by passionate</p>
          <p className="text-4xl font-bold">developers</p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            perspiciatis minima incidunt culpa dolore error. Voluptas
            consequuntur repudiandae nisi quam est! Assumenda quibusdam
            laboriosam inventore blanditiis, nemo eius repellendus ipsa.
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            provident officia molestiae. Autem dignissimos corrupti aliquid,
            officia iste blanditiis sequi? Culpa minus sint ratione ullam odit.
            Tempora suscipit hic minima!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className=" w-5/6 mx-auto  mt-20 flex mb-8 justify-around">
        <div className="bg-pink-100 text-center py-5 px-4 rounded">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-normal  text-gray-700 font-medium mt-2">
            Fill in the form to start a conversation
          </p>
          <div className="flex items-center mt-8 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Acme Inc, Street, State, Postal Code
            </div>
          </div>
          <div className="flex items-center mt-4 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              +44 1234567890
            </div>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              info@acme.org
            </div>
          </div>
        </div>
        <div className=" ms-0" style={{ marginLeft: "-150px" }}>
          <input
            type="text"
            className="block mt-3 px-3 py-3  border border-gray-400 bg-white rounded outline-none  focus:border-orange-500 focus:outline-none"
            placeholder="Full Name"
            style={{ width: "300px" }}
          />

          <input
            type="text"
            className="block mt-3 px-3 py-3  border border-gray-400 bg-white rounded outline-none  focus:border-orange-500 focus:outline-none"
            placeholder="Email"
            style={{ width: "300px" }}
          />
          <input
            type="text"
            className="block mt-3 px-3 py-3  border border-gray-400 bg-white rounded outline-none  focus:border-orange-500 focus:outline-none"
            placeholder="Telephone Number"
            style={{ width: "300px" }}
          />
          <button className="px-7 text-white py-2 bg-red-700 mt-3 rounded hover:bg-orange-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

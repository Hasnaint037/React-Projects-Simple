import React from "react";

function Blog() {
  return (
    <div className="text-center">
      <div className="sm:w-4/5 md:w-3/5 lg:w-full">
        <h1 className="text-2xl font-bold mt-8">Registration Form</h1>
        <form action="">
          <div className="h-20">
            <input
              className="px-4 py-2 sm:w-3/4 md:2/4 lg:w-1/4 mt-5 bg-black border  border-x-white rounded-lg"
              type="text"
              placeholder="Enter your name"
            />
            <p className="text-red-500">invalid username or name</p>
            {/* <br /> */}
          </div>
          <div className="h-20">
            <input
              className="px-4 mt-3 py-2 sm:w-3/4 md:2/4 lg:w-1/4 bg-black border  border-x-white rounded-lg"
              type="text"
              placeholder="Enter your email"
            />
            <p className="text-red-500">enter correct email</p>{" "}
          </div>
          <div className="h-20">
            {" "}
            <input
              className="  mt-1 px-4 py-2 sm:w-3/4 md:2/4 lg:w-1/4 bg-black border  border-x-white rounded-lg"
              type="text"
              placeholder="Enter your password"
            />
            <p className="text-red-500">incorrect password or not</p>{" "}
          </div>
          <div className="h-20">
            {" "}
            <input
              className="px-4  py-2 sm:w-3/4 md:2/4 lg:w-1/4 bg-black border  border-x-white rounded-lg"
              type="text"
              placeholder="Confirm password"
            />
            <p className="text-red-500">password does not match</p>{" "}
          </div>

          <input
            className="px-4 mt-1 py-2 bg-blue-700 text-xl font-bold rounded-lg hover:bg-blue-800 cursor-pointer sm:w-2/3  md:2/4 lg:w-1/4"
            type="submit"
            value="Sign up"
          />
        </form>
        <p className="mt-2">
          Already have an account?
          <a className=" ms-2 text-green-500" href="#">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Blog;

import React from "react";

function Login() {
    return (
        <div className="text-center">
            <div className="sm:w-4/5 md:w-3/5 lg:w-full">
                <h1 className="text-2xl font-bold mt-8">Login Form</h1>
                <form action="">
                    <input
                        className="px-4 mt-8 py-2 sm:w-3/4 md:2/4 lg:w-1/4 bg-black border outline-blue-800 border-x-white rounded-lg"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <br />
                    <input
                        className="  mt-8 px-4 py-2 sm:w-3/4 md:2/4 lg:w-1/4 bg-black border outline-blue-800 border-x-white rounded-lg"
                        type="text"
                        placeholder="Enter your password"
                    />
                    <br />

                    <input
                        className="px-4 mt-8 py-2 bg-blue-700 text-xl font-bold rounded-lg hover:bg-blue-800 cursor-pointer sm:w-2/3  md:2/4 lg:w-1/4"
                        type="submit"
                        value="Log in"
                    />
                </form>
                <p className="mt-2">
                    Don't have an account?
                    <a className=" ms-2 text-green-500" href="#">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;

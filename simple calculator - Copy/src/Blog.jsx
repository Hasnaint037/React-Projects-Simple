import React from "react";

function Blog() {
    return (
        <div className="text-center">
            <div className="sm:w-4/5 md:w-3/5 lg:w-full">
                <form action="">
                    <h1 className="text-3xl font-bold mt-5 underline">
                        Submit A Blog
                    </h1>
                    <input
                        className="px-4 py-2 sm:w-3/4 md:2/4 lg:w-2/4 mt-5 bg-black border outline-blue-800 border-x-white rounded-lg"
                        type="text"
                        placeholder="Title"
                    />
                    <br />
                    <div className="flex justify-center">
                        {" "}
                        <p className="mt-8 me-2">Choose a file </p>
                        <input className="mt-8" type="file" />{" "}
                    </div>
                    <textarea
                        placeholder="Description here...."
                        className=" p-4 bg-black sm:w-3/4 md:2/4 lg:w-2/4  border rounded-lg mt-8  border-white "
                        name=""
                        id=""
                        // cols="50"
                        rows="8"
                    ></textarea>
                    <br />
                    <input
                        className="px-4 mt-8 py-2 bg-blue-700 text-xl font-bold rounded-lg hover:bg-blue-800 cursor-pointer sm:w-2/3  md:2/4 lg:w-2/4"
                        type="submit"
                        value="Submit Blog"
                    />
                </form>
            </div>
        </div>
    );
}

export default Blog;

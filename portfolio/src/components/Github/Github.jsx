import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Hasnaint037")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="container mx-auto text-white ">
      <div className=" w-5/6 mx-auto  bg-gray-600  mt-8 px-6 rounded flex mb-8 justify-between py-5">
        <div className="ms-20">
          <img src={data.avatar_url} alt="Git picture" width="300px" />
        </div>
        <div className="mt-8 me-40">
          <span className="text-xl font-bold">Name:</span>
          <p className="text-normal text-orange-500">{data.name}</p>
          <span className="text-xl font-bold">Followers</span>
          <h1 className="text-normal text-orange-500">{data.followers}</h1>
          <span className="text-xl font-bold">Following</span>
          <h1 className="text-normal text-orange-500">{data.following}</h1>
        </div>
      </div>
    </div>
  );
}

export default Github;

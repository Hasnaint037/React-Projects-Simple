import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, multiply, divide, clear } from "./store/numberSlice";

function App() {
  const [numbers, setNumber] = useState();
  let [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  let addition = () => {
    dispatch(add(numbers));
    setCheck(true);
    setNumber("");
  };
  let subtraction = () => {
    dispatch(remove(numbers));
    setCheck(true);
    setNumber("");
  };
  let multiplication = () => {
    dispatch(multiply(numbers));
    setCheck(true);
    setNumber("");
  };
  let division = () => {
    dispatch(divide(numbers));
    setCheck(true);
    setNumber("");
  };
  let clears = () => {
    dispatch(clear());
    setNumber("");
  };
  return (
    <>
      (
      <h1 className="text-center mt-5 text-5xl font-bold  text-white">
        {number == 0 ? " " : number}
      </h1>
      )
      <div className=" mt-3 text-center select-none">
        <input
          value={numbers}
          type="text"
          className="bg-white px-3 py-2  sm:w-1/2 md:w-1/4 outline-yellow-800 rounded"
          placeholder="Enter a number here"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="mt-3">
          {" "}
          <button
            className="bg-yellow-800 text-white font-bold px-8 py-2 rounded-lg hover:bg-yellow-900 me-2"
            onClick={addition}
          >
            {" "}
            +
          </button>
          <button
            className="bg-yellow-800 text-white font-bold px-8 py-2 rounded-lg hover:bg-yellow-900"
            onClick={subtraction}
          >
            -
          </button>
        </div>
        <div className="mt-3">
          {" "}
          <button
            className="bg-yellow-800 text-white font-bold px-8 py-2 rounded-lg hover:bg-yellow-900 me-2"
            onClick={multiplication}
          >
            {" "}
            *
          </button>
          <button
            className="bg-yellow-800 text-white font-bold px-8 py-2 rounded-lg hover:bg-yellow-900"
            onClick={division}
          >
            /
          </button>
        </div>
        <button
          className=" mt-2 sm:w-1/2 md:w-1/4 select-none bg-yellow-700 text-white font-bold px-8 py-2 rounded-lg hover:bg-yellow-800"
          onClick={clears}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { fetchData } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Hello() {
    let selector = useSelector((state) => state.user);
    let [val, setVal] = useState("");
    console.log(selector);
    let dispatch = useDispatch();
    let call = () => {
        dispatch(fetchData(6));
    };
    let hello = (e) => {
        console.log(e.key);
    };
    let hello2 = (e) => {
        setVal(e.target.value);
        console.log(val);
    };
    return (
        <div>
            <h1 className="text-center">Hello World</h1>
            <button onClick={call}>Click Me</button>
            <input type="text" onKeyUp={hello} onChange={hello2} />
        </div>
    );
}

export default Hello;

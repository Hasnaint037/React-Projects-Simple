import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let passwordRef = useRef();
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    } else if (charAllowed) {
      str += "!@#$%^&*()}{?~<>_+";
    }
    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  let copyToClipBoard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <div
        className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-800"
        style={{ userSelect: "none" }}
      >
        <h1 className="text-white text-3xl text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passwordRef}
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-2 px-3 text-xl"
            type="text"
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5"
            onClick={copyToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="flex text-lg gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              style={{ backgroundColor: "rgba(255,0,0,0.5)" }}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              onChange={() => {
                setNumberAllowed((pre) => !pre);
              }}
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

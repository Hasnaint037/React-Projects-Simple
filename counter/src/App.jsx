import { useState } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(0);
  let add = () => {
    if (counter < 20) {
      setCounter(counter + 1);

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // agar aisa karain gy to aik baar hi update ho ga due to fibre kyoon ky wo samajh laita hai ky auik kaam baar baar hi kar rahy hain
      // is kylie hamain previous state laini pary gi agar kjoi aisi situation aa gye to
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
      // setCounter(counter => counter + 1);
    } else {
      return;
    }
  };
  let remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };
  return (
    <div className="main" style={{ display: "grid", placeItems: "center" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>Learning React</h1>
      <h1 style={{ fontFamily: "sans-serif" }}>Counter :{counter}</h1>
      <button className="btn" onClick={add}>
        Add
      </button>
      <button className="btn" onClick={remove}>
        Sub
      </button>
    </div>
  );
}

export default App;

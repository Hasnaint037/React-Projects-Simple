import React, { useState } from "react";
import InputBox from "./components/InputBox";
import CurrencyInfo from "./hooks/useCurrencyInfo";
import pic from "./images/pic.jpg";

export default function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = CurrencyInfo(from);
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  console.log(options);
  const convertCurrency = () => {
    let result = amount * currencyInfo[to];
    setConvertedAmount(result);
  };
  let swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <div
      className="w-full h-screen bg-cover"
      style={{
        background: `url(${pic})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full absolute top-20"
        style={{ background: "rgba(0,0,0,0)" }}
      >
        <div className="max-w-md mx-auto p-9 rounded-3xl backdrop-blur-lg">
          <h1 className="text-white text-3xl font-bold text-center mb-4">
            Currency Converter
          </h1>
          <div className="mb-1">
            {" "}
            <InputBox
              label="from"
              amount={amount}
              onAmountChange={(val) => setAmount(Number(val))}
              selectedCurrency={from}
              onCurrencyChange={(val) => setFrom(val)}
              currencyOptions={options}
            ></InputBox>
          </div>
          <div className="relative w-full h-0.5">
            <button
              className="px-2 py-1 bg-blue-500 rounded-lg text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={swap}
            >
              SWAP
            </button>
          </div>
          <div className="mt-2 mb-2">
            {" "}
            <InputBox
              label="to"
              amount={convertedAmount}
              onAmountChange={(val) => setAmount(Number(val))}
              selectedCurrency={to}
              onCurrencyChange={(val) => setTo(val)}
              currencyOptions={options}
            ></InputBox>
          </div>
          <button
            className="bg-blue-500 rounded-lg text-2xl text-white font-bold x-2 py-3 w-full"
            onClick={convertCurrency}
          >
            {`Conversion from ${from} to ${to}`}
          </button>
        </div>
      </div>
    </div>
  );
}

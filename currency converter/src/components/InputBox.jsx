import React from "react";
import "./InputBox.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label
          htmlFor=""
          className="text-black/40 mb-2 inline-block font-bold text-md"
        >
          {label}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="outline-none w-full bg-transparent py-1.5 text-black font-bold"
          placeholder="amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full"> CURRENCY TYPE</p>
        <select
          name=""
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          id=""
          className=" font-bold rounded-lg px-1 bg-gray-100 cursor-pointer outline-none text-black"
        >
          {currencyOptions.map((currency) => {
            return (
              <option value={currency} id="currency">
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

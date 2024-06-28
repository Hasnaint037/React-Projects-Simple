import { useEffect, useState } from "react";

const currencyInfo = (currency) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/9c81a28f50a97ca977009269/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates));
  }, [currency]);
  console.log(data);
  return data;
};

export default currencyInfo;

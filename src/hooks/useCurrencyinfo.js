import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/3fde16132379b63f99ac9ff2/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
// import { useEffect, useState } from "react";
// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   console.log(currency);
//   useEffect(() => {
//     fetch(
//       `https://v6.exchangerate-api.com/v6/3fde16132379b63f99ac9ff2/latest/USD`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
//   return data;
// }
// export default useCurrencyInfo;

import axios from "axios";

const convertCurrency = ({ setResult, to, from, amount }) => {
  axios
    .get(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: "PonB7hhRsoqKcvLu4Z1eZtdIfutqfb6I",
        },
      }
    )
    .then((data) => {
      setResult(data.data.result);
    })
    .catch((error) => console.log("error", error));
};

export default convertCurrency;

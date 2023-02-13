import axios from "axios";

const getCurrencyList = (setCurrencyList) => {
  let data = [];
  axios
    .get("https://api.apilayer.com/fixer/symbols", {
      headers: {
        apikey: "PonB7hhRsoqKcvLu4Z1eZtdIfutqfb6I",
      },
    })
    .then((result) => {
      const list = { ...result.data.symbols };
      for (let key in list) {
        data.push({
          label: `${list[key]} ( ${key} )`,
          value: key,
        });
      }
      setCurrencyList(data);
    })
    .catch((error) => console.log("error", error));
};

export default getCurrencyList;

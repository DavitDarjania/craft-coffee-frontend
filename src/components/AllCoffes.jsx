import React, { useEffect, useState } from "react";
import {
  CardSections,
  CoffeeHeading,
  CoffeeMainSection,
} from "../styles-components/CoffeeSection";
import useFetch from "../hooks/useFetch";
import CoffeCards from "./CoffeCards";

const AllCoffes = () => {
  const { data, reFetch } = useFetch(
    "https://692c9a77c829d4640070075f.mockapi.io/coffeeShop/coffees"
  );
  const [currency, setCurrency] = useState("GEL");
  const [rate, setRate] = useState(1);
  useEffect(() => {
    async function fetchRate() {
      const apiKey = "af6b5f8aa48d594a7d0eee92";
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/GEL`
      );
      const data = await res.json();
      setRate(data.conversion_rates.USD);
    }
    fetchRate();
  }, []);
  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "GEL" ? "USD" : "GEL"));
  };
  return (
    <CoffeeMainSection>
      <CoffeeHeading>
        <h2>All Coffes</h2>
        <button onClick={toggleCurrency}>
          {currency === "GEL" ? "USD" : "GEL"}
        </button>
      </CoffeeHeading>
      <CardSections>
        {data.map((el) => {
          const convertedPrice =
            currency === "GEL" ? el.price : (el.price * rate).toFixed(2);
          const symbol = currency === "GEL" ? "₾" : "$";

          return (
            <CoffeCards
              key={el.id}
              id={el.id}
              name={el.name}
              price={`${symbol}${convertedPrice}`}
            />
          );
        })}
      </CardSections>
    </CoffeeMainSection>
  );
};

export default AllCoffes;

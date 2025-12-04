import React from "react";
import { CoffeCard } from "../styles-components/CoffeeSection";
import CoffeOne from "../assets/images/coffe1.jpg";
import CoffeTwo from "../assets/images/coffe2.jpg";
import CoffeThree from "../assets/images/coffe3.jpg";
import CoffeFour from "../assets/images/coffe4.jpg";
import CoffeIcon from "../assets/icons/QrCode.png";

const imgArr = [CoffeOne, CoffeTwo, CoffeThree, CoffeFour];

const CoffeCards = ({ name, price, id }) => {
  return (
    <CoffeCard>
      <img src={imgArr[id % 4]} alt="" />
      <div>
        <div>
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
        <img src={CoffeIcon} alt="" />
      </div>
    </CoffeCard>
  );
};

export default CoffeCards;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HunelProvider, HunelCreditCard } from "reactjs-credit-card";

const hunel = new HunelCreditCard({
  middlePartHide: true, //set true to mask credit card number on the card
});

ReactDOM.render(
  <HunelProvider config={hunel}>
    <App />
  </HunelProvider>,
  document.getElementById("root")
);
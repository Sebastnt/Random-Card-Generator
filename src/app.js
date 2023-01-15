/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// ♦ ♥ ♠ ♣
window.onload = function() {
  //write your code here

  const cardList = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suit = ["♥", "♠", "♦", "♣"];
  let randomCardNumber, randomSuit;

  // Query selectors
  const topSymbol = document.querySelector(".card-top");
  const cardNumber = document.querySelector(".card-number");
  const botSymbol = document.querySelector(".card-bot");
  const changeBtn = document.querySelector("button");
  const card = document.querySelector(".card");

  const generateValue = () => {
    randomCardNumber = cardList[Math.floor(Math.random() * cardList.length)];
    randomSuit = suit[Math.floor(Math.random() * suit.length)];
  };

  const changeSymbol = () => {
    topSymbol.innerText = `${randomSuit}`;
    cardNumber.innerHTML = `<b>${randomCardNumber}</b>`;
    botSymbol.innerText = `${randomSuit}`;
  };

  const changeColor = () => {
    if (randomSuit === "♥" || randomSuit === "♦") {
      card.classList.add("red");
    } else {
      card.classList.remove("red");
    }
  };

  const initialConfig = () => {
    generateValue();
    changeSymbol();
    changeColor();
  };

  initialConfig();

  changeBtn.addEventListener("click", initialConfig);

  const changeCard10 = () => {
    setInterval(initialConfig, 10000);
  };

  changeCard10();

  const changeCardSize = () => {
    let width = document.querySelector(".input-width");
    let height = document.querySelector(".input-height");

    const changeWidth = () => {
      card.style.width = Number(width.value) + "px";
    };
    width.addEventListener("change", changeWidth);

    const changeHeight = () => {
      card.style.height = Number(height.value) + "px";
    };
    height.addEventListener("change", changeHeight);
  };

  changeCardSize();
};

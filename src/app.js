/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let klass = ["heart", "spade", "club", "diamond"];
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suit = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };

  function getArrayString(x) {
    let n = Math.floor(Math.random() * x.length);
    let string = x[n];
    return string;
  }

  let randomString = getArrayString(klass);
  let content = document.getElementsByClassName("card");
  for (let i = 0; i < content.length; i++) {
    let card = content[i];
    card.className = card.className + " " + randomString;
    let icon = suit[randomString];
    let element = card.getElementsByTagName("span");

    for (let i = 0; i < element.length; i++) {
      let tag = element[i];
      tag.innerHTML = icon;
    }
  }

  let randomNumber = getArrayString(number);
  let p = document.getElementById("number");
  p.innerHTML = randomNumber;
};

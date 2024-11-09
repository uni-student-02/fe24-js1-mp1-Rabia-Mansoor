document.addEventListener("DOMContentLoaded", function () {
  // ---- Heading Creation ----
  const headings = [
    {
      level: 5,
      text: "Rad 1",
      background: "hsla(173, 89%, 70%, 1)",
      marginTop: "35px",
      marginBottom: "-10px",
    },
    {
      level: 4,
      text: "Rad 2",
      background: "hsla(167, 68%, 73%, 1)",
      marginTop: "25px",
    },
    {
      level: 3,
      text: "Rad 3",
      background: "hsla(154, 100%, 76%, 1)",
      marginTop: "10px",
    },
    {
      level: 2,
      text: "Rad 4",
      background: "hsla(154, 100%, 76%, 1)",
      marginTop: "25px",
    },
    {
      level: 1,
      text: "Rad 5",
      background: "hsla(148, 89%, 78%, 1)",
      marginTop: "35px",
    },
  ];

  headings.forEach((heading) => {
    const headingElement = document.createElement(`h${heading.level}`);
    headingElement.textContent = heading.text;
    headingElement.classList.add("rad-item");

    headingElement.style.background = heading.background;
    if (heading.marginTop) headingElement.style.marginTop = heading.marginTop;
    if (heading.marginBottom)
      headingElement.style.marginBottom = heading.marginBottom;

    document.getElementById("headings-container").appendChild(headingElement);
  });

  // ---- Array Creation ----
  const forwardNumbers = Array.from({ length: 10 }, (_, i) => i);
  const reverseNumbers = Array.from({ length: 10 }, (_, i) => 9 - i);
  const swedishNumbers = [
    "en",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "tio",
  ];

  const specialColor = "#800080";
  const evenColor = "#000";
  const oddColor = "white";

  // 1. Populate Forward Array from 0 to 9
  const forwardArrayContainer = document.querySelector(".forward-array");
  forwardArrayContainer.innerHTML = ""; 
  forwardNumbers.forEach((num) => {
    const forwardItem = document.createElement("div");
    forwardItem.classList.add("array-items", "forward-array-items");
    forwardItem.textContent = num;
    if (num === 4) {
      forwardItem.style.backgroundColor = specialColor;
      forwardItem.style.color = "#fff";
    } else {
      if (num % 2 === 0) {
        forwardItem.style.backgroundColor = evenColor;
        forwardItem.style.color = "#fff";
      } else {
        forwardItem.style.backgroundColor = oddColor;
      }
    }

    forwardArrayContainer.appendChild(forwardItem);
  });

  // 2. Populate Reverse Array from 9 to 0
  const reverseArrayContainer = document.querySelector(".reverse-array");
  reverseArrayContainer.innerHTML = "";
  reverseNumbers.forEach((num) => {
    const reverseItem = document.createElement("div");
    reverseItem.classList.add("array-items", "reverse-array-items");
    reverseItem.textContent = num;
    if (num === 8) {
      reverseItem.style.backgroundColor = specialColor;
      reverseItem.style.color = "#fff";
    } else {
      if (num % 2 === 0) {
        reverseItem.style.backgroundColor = evenColor;
        reverseItem.style.color = "#fff";
      } else {
        reverseItem.style.backgroundColor = oddColor;
      }
    }

    reverseArrayContainer.appendChild(reverseItem);
  });

  // 3. Populate String Array from "en" to "tio"
  const stringArrayContainer = document.querySelector(".string-array");
  stringArrayContainer.innerHTML = "";
  swedishNumbers.forEach((word) => {
    const stringItem = document.createElement("div");
    stringItem.classList.add("array-items", "string-array-items");
    stringItem.textContent = word;
    if (word === "sex") {
      stringItem.style.backgroundColor = specialColor;
      stringItem.style.color = "#fff";
    } else {
      if (swedishNumbers.indexOf(word) % 2 === 0) {
        stringItem.style.backgroundColor = evenColor;
        stringItem.style.color = "#fff";
      } else {
        stringItem.style.backgroundColor = oddColor;
      }
    }
    stringItem.style.paddingRight = "0";
    stringArrayContainer.appendChild(stringItem);
  });
});

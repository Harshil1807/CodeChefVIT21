const cards = document.querySelectorAll(".card");
const [prev, next] = document.querySelectorAll("i");

const counter = (card) => {
  switch (true) {
    case card.className === "card position1":
      return 1;
    case card.className === "card position2":
      return 2;
    case card.className === "card position3":
      return 3;
    case card.className === "card position4":
      return 4;
    default:
      return 5;
  }
};

const maxPosition = (card) => {
  if (counter(card) === 5) {
    return 1;
  }
  return counter(card) + 1;
};

const minPosition = (card) => {
  if (counter(card) === 1) {
    return 5;
  }
  return counter(card) - 1;
};

next.addEventListener("click", () => {
  for (let card of cards) {
    card.classList.replace(
      `position${counter(card)}`,
      `position${maxPosition(card)}`
    );
  }
});

prev.addEventListener("click", () => {
  for (let card of cards) {
    card.classList.replace(
      `position${counter(card)}`,
      `position${minPosition(card)}`
    );
  }
});



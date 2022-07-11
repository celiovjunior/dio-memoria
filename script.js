const cards = document.querySelectorAll('.card');
let hasFlipCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
  if(!hasFlippedCard) {
    hasFlipCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
};

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});
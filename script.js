const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if(!hasFlippedCard) {
    hasFlipCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
};

function checkForMath() {
  if(firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCard();
}

cards.forEach((card) => {
  card.addEventListener('click', flipCard);
});
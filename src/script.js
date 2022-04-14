const diceBtn = document.getElementById('card__btn');
const cardAdviceNumberID = document.getElementById('card__adviceNumberID');
const cardAdviceQuote = document.getElementById('card__adviceQuote');

let quote;

function fetchQuote() {
  fetch('https://api.adviceslip.com/advice').then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }).then((data) => {
    quote = data;
  }).catch((err) => {
    console.warn('Something went wrong.', err);
  });
}
fetchQuote();

diceBtn.addEventListener('click', () => {
  fetchQuote();
  cardAdviceNumberID.textContent = quote.slip.id;
  cardAdviceQuote.textContent = quote.slip.advice;
});

//select from HTML
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const shoo = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

var scores, currentScore, activePlayer, play;

newGame.onclick = () => {
  play = true;
  scores = 0;
  currentScore = 0;
  activePlayer = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  document.querySelector('#name--0').textContent = 'Player 1';
  document.querySelector('#name--1').textContent = 'Player 2';
};
newGame.onclick();

function switchPlayer() {
  if (play) {
    document.querySelector('#current--' + activePlayer).textContent = 0;
    currentScore = 0;
    scores = 0;
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
}

rollDice.addEventListener('click', function () {
  if (play) {
    const dice = Math.floor(Math.random() * 6 + 1);
    shoo.src = './dice-' + dice + '.png';
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(
        '#current--' + activePlayer
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdScore.onclick = () => {
  if (play) {
    scores += currentScore;
    scoreSaver = parseInt(
      document.querySelector('#score--' + activePlayer).textContent
    );
    scoreSaver += scores;
    document.querySelector('#score--' + activePlayer).textContent = scoreSaver;
  }
  if (parseInt(score1.textContent) >= 10) {
    player1.classList.add('player--winner');
    play = false;
    document.querySelector('#name--0').textContent = 'Winner!';
  }
  if (parseInt(score2.textContent) >= 10) {
    player2.classList.add('player--winner');
    play = false;
    document.querySelector('#name--1').textContent = 'Winner!';
  }
  switchPlayer();
};

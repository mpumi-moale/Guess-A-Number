'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent  = message;
}

const setScore = function(score) {
  document.querySelector('.score').textContent = score;
}

const displayGeneratedNumber = function(number) {
  document.querySelector('.number').textContent  = number;
}

// When play click again button
document.querySelector('.restart').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  setScore(score);
  displayGeneratedNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('Enter valid number');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayGeneratedNumber(secretNumber);


    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You have lost the game');
      setScore(0);
    }
  }
});

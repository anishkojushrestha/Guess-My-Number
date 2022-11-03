'use strict';

let score = 20;
let highScore = 0;
const num = Math.trunc(Math.random() * 20) + 1;
console.log(num);

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
  if (guess == num) {
    document.querySelector('.message').textContent = 'hurry....';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (!guess) {
    document.querySelector('.message').textContent = 'no input number';
  } else if (guess != num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > num ? 'To high...' : 'To low...';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    } else {
      document.querySelector('.score').textContent = 'Game Over';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const num = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});

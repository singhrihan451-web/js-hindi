const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevguess.push(guess);
        if (numguess === 10) {
            displayguess(guess);
            displaymessage(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`🎉 You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displaymessage('Too low! Try again.');
    } else if (guess > randomNumber) {
        displaymessage('Too high! Try again.');
    }
}

function displayguess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        window.location.reload();
    });
}

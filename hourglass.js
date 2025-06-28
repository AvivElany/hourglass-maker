// ====================== START HOURGLASS MAKER ======================

const hourglassContainer = document.querySelector('.hourglassContainer');
const box = document.querySelector('.box');
const playground = document.querySelector('.playground');
const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');

const inputSize = document.getElementById('inputSize');
const inputDigit = document.getElementById('inputDigit');
const form = document.querySelector('form');

const hourglassMaker = (size, digit = '@') => {
    // for cleanning the playground
    playground.innerHTML = '';

    for (let i = size; i >= 2; i--) {
        const row = document.createElement('span');
        row.style.display = 'block';
        row.textContent = digit.repeat(i);
        playground.appendChild(row);
    }

    for (let i = 1; i <= size; i++) {
        const row = document.createElement('span');
        row.style.display = 'block';
        row.textContent = digit.repeat(i);
        playground.appendChild(row);
    }
}

// Default hourglass creation
hourglassMaker(4); // create a default hourglass to start with

 // Hourglass by buttons
firstButton.innerText = 'Make a hourglass by 5';
firstButton.addEventListener('click', () => {
    hourglassMaker(5, '@');
});

secondButton.innerText = 'Make a hourglass by 6';
secondButton.addEventListener('click', () => {
    hourglassMaker(6, '@');
});


// Hourglass by form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const size = Number(inputSize.value);
    const digit = inputDigit.value;

    if (!size || size <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    if (size > 15) {
        alert('Size is too big! Please enter a number less than or equal to 15');
        return;
    }

    if (!digit || digit.length === 0) {
        alert('Please enter a valid digit');
        return;
    }

    if (digit.length > 1) {
        alert('Please enter a single character for the digit');
        return;
    }



    hourglassMaker(size, digit);
});

// ====================== FINNISH HOURGLASS MAKER ======================

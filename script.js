const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

countdownForm.addEventListener('submit', updateCountdown);
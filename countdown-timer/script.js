
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let intervalId;
let isPaused = false;

const updateTime = () => {
  // Convert hours, minutes, and seconds to a single total seconds value
  let totalSeconds = (parseInt(hourInput.value) || 0) * 3600 +
    (parseInt(minuteInput.value) || 0) * 60 +
    (parseInt(secondInput.value) || 0);

  // Decrement the total seconds by 1
  totalSeconds--;

  // If the total seconds reaches zero, clear the interval and display an alert
  if (totalSeconds === 0) {
    clearInterval(intervalId);
    alert('Countdown completed!'); 
    resetTimer();

    return;
  }

  // Update the input fields with the remaining time
  hourInput.value = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  minuteInput.value = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  secondInput.value = (totalSeconds % 60).toString().padStart(2, '0');
};

const startTimer = () => {
  // Check if any of the input fields are empty or all zeros. If so, set them to 0.
  if (hourInput.value === '') {
    hourInput.value = '00';
  }
  if (minuteInput.value === '') {
    minuteInput.value = '00';
  }
  if (secondInput.value === '') {
    secondInput.value = '00';
  }

  // Check if the total seconds is zero. If so, display an alert and return.
  const totalSeconds = (parseInt(hourInput.value) || 0) * 3600 +
    (parseInt(minuteInput.value) || 0) * 60 +
    (parseInt(secondInput.value) || 0);
  if (totalSeconds === 0) {
    alert('Invalid input. Please enter a valid time.');
    return;
  }

  isPaused = false;

  startButton.hidden = true;
  pauseButton.hidden = false;
  resetButton.hidden = false;

  hourInput.disabled = true;
  minuteInput.disabled = true;
  secondInput.disabled = true;

  intervalId = setInterval(updateTime, 1000);
};

const pauseTimer = () => {
  isPaused = true;

  startButton.hidden = false;
  pauseButton.hidden = true;

  clearInterval(intervalId);

  hourInput.disabled = false;
  minuteInput.disabled = false;
  secondInput.disabled = false;
};

const resetTimer = () => {
  clearInterval(intervalId);

  startButton.hidden = false;
  pauseButton.hidden = true;
  resetButton.hidden = true;

  hourInput.value = '00';
  minuteInput.value = '00';
  secondInput.value = '00';

  hourInput.disabled = false;
  minuteInput.disabled = false;
  secondInput.disabled = false;
};

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


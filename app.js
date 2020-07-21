// accessing all the elements of HTML here in js
let msecEl = document.getElementById("msec");
let secEl = document.getElementById("sec");
let minEl = document.getElementById("min");
const startButton = document.getElementById("startBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

// a couple variable that we'll require along the way
let count = (msec = sec = min = interval = 0);

// function to increment second after 1000 milliseconds
const incrementSec = () => {
  if (msec >= 100) {
    sec++;
    secEl.innerHTML = sec;
    count = 0;
  }
};

// function to increment minute after 60 seconds
const incrementMin = () => {
  if (sec >= 60) {
    min++;
    minEl.innerHTML = min;
    sec = 0;
  }
};

// main function called when setInterval runs
let timer = () => {
  msec = count;
  msecEl.innerHTML = count;
  count++;

  incrementSec();
  incrementMin();
};

// do this when the startButton is clicked
startButton.addEventListener("click", (event) => {
  interval = setInterval(timer, 10);
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
});

// do this when the pauseButton is clicked
pauseButton.addEventListener("click", (event) => {
  clearInterval(interval);
  pauseButton.disabled = true;
  startButton.disabled = false;
});

// do this when the resetButton is clicked
resetButton.addEventListener("click", (event) => {
  msec = sec = min = 0;
  msecEl.innerHTML = secEl.innerHTML = minEl.innerHTML = 0;
  clearInterval(interval);
  resetButton.disabled = true;
  startButton.disabled = false;
});

let timerInterval;
let startTime;

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  const timerElement = document.querySelector(".timer-display");
  if (timerElement) {
    timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

function pad(number) {
  return String(number).padStart(2, '0');
}

export function startTimer() {
  if (!startTime) {
    startTime = new Date().getTime();
  }
  timerInterval = setInterval(updateTimer, 1000);
}

export function stopTimer() {
  clearInterval(timerInterval);
}

export function startTimer() {
  let startTime = sessionStorage.getItem("start_time");
  if (!startTime) {
    startTime = new Date().getTime();
    sessionStorage.setItem("start_time", startTime);
  }

  function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    const timerElement = document.querySelector(".timer-display");
    if (timerElement) {
      timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(
        seconds
      )}`;
    }
  }

  function pad(number) {
    return number < 10 ? "0" + number : number;
  }

  setInterval(updateTimer, 1000);
}

import { loadPageContent } from "./navigation.js";
import { startTimer } from "./timer.js";

document.addEventListener("DOMContentLoaded", function () {
  loadPageContent(); // Инициализируем навигацию
  startTimer(); // таймер
});


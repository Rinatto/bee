import { loadPageContent } from "./navigation.js";
import { startTimer } from "./timer.js";
import { initializeYandexMap } from "./yandexMap.js";

document.addEventListener("DOMContentLoaded", function () {
  loadPageContent(); // Инициализируем навигацию
  startTimer(); // таймер
});

function handlePageChange(page) {
  if (page === "map") {
    initializeYandexMap(); // Инициализация карты при переходе на страницу с картой
  }
}

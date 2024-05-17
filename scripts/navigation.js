document.addEventListener("DOMContentLoaded", () => {
  const menuElements = document.querySelectorAll(".menu-element");
  menuElements.forEach((element) => {
    element.addEventListener("click", function () {
      // Удаляем класс active-link со всех элементов
      menuElements.forEach((el) => el.classList.remove("active-link"));

      // Добавляем класс active-link к элементу, по которому был клик
      this.classList.add("active-link");

      const page = this.textContent.trim().toLowerCase();
      loadPageContent(page);
    });
  });
});

function loadHTML(url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const contentDiv = document.querySelector(".main");
      contentDiv.innerHTML = html;
      if (callback) callback(); 
    })
    .catch(error => console.error('Failed to load page: ', error));
}

// Модифицированная функция для загрузки содержимого страницы
export function loadPageContent(page) {
  switch (page) {
    case "activity":
      loadHTML("activity.html");
      break;
    case "map":
      loadHTML("map.html", initializeYandexMap); // Инициализация карты после загрузки
      break;
    case "time":
      loadHTML("timer.html");
      break;
    default:
      console.log("Unknown page:", page);
  }
}

import { initializeYandexMap } from "./yandexMap.js";

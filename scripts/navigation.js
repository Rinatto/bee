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

export function loadPageContent(page) {
  const contentDiv = document.querySelector(".main");
  switch (page) {
    case "activity":
      fetch("activity.html")
        .then((response) => response.text())
        .then((html) => (contentDiv.innerHTML = html));
      break;
    case "map":
      fetch("map.html")
        .then((response) => response.text())
        .then((html) => {
          contentDiv.innerHTML = html;
          initializeYandexMap(); // Инициализация карты после загрузки содержимого
        });
      break;
    case "time":
      fetch("timer.html")
        .then((response) => response.text())
        .then((html) => (contentDiv.innerHTML = html));
      break;
  }
}

import { initializeYandexMap } from "./yandexMap.js";

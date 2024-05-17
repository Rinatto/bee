import { initializeYandexMap } from "./yandexMap.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuElements = document.querySelectorAll(".menu-element");
  menuElements.forEach((element) => {
    element.addEventListener("click", function () {
      menuElements.forEach((el) => el.classList.remove("active-link"));
      this.classList.add("active-link");
      
      const page = this.textContent.trim().toLowerCase();
      loadPageContent(page);

      // Обновляем URL без перезагрузки страницы
      history.pushState({ page }, "", `#${page}`);
    });
  });

  // Обрабатываем событие изменения истории (нажатие кнопок "назад"/"вперед")
  window.addEventListener("popstate", (event) => {
    const page = event.state ? event.state.page : "activity";
    loadPageContent(page);
  });

  // Загружаем контент в зависимости от текущего URL при загрузке страницы
  const currentPage = window.location.hash.substring(1) || "activity";
  loadPageContent(currentPage);
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

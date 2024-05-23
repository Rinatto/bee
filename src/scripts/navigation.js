import { initializeYandexMap } from "./yandexMap.js";
import { startTimer, stopTimer } from "./timer.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuElements = document.querySelectorAll(".menu-element");
  menuElements.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // предотвращаем стандартное поведение ссылки
      menuElements.forEach((el) => el.classList.remove("active-link"));
      this.classList.add("active-link");
      const page = this.getAttribute("href").replace("/bee/", "");
      loadPageContent(page, true);
    });
  });

  // Обработчик кликов для всех ссылок <a>
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const page = this.getAttribute("href").replace("/bee/", "");
      loadPageContent(page, true);
    });
  });

  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page) {
      loadPageContent(event.state.page, false);
    } else {
      loadPageContent("index", false);
    }
  });

  const initialPage = window.location.pathname.replace("/bee/", "") || "index";
  loadPageContent(initialPage, false);
});

function loadHTML(url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const contentDiv = document.querySelector(".main");
      contentDiv.innerHTML = html;
      if (callback) callback();
    })
    .catch(error => {
      console.error('Failed to load page: ', error);
      if (url !== "/bee/index.html") {
        history.replaceState(null, null, "/bee/");
        loadPageContent("index", true);
      }
    });
}

export function loadPageContent(page, addToHistory = true) {
  const urlMap = {
    "activity": "activity.html",
    "map": "map.html",
    "timer": "timer.html",
    "resume": "resume.html",
    "index": "index.html"  // Добавляем индексную страницу
  };

  const url = urlMap[page];
  if (!url) {
    console.error("Unknown page:", page);
    history.replaceState(null, null, "/bee/");
    loadPageContent("index", true);
    return;
  }

  if (page !== "timer") {
    stopTimer();
  }

  let callback = null;
  if (page === "map") {
    callback = initializeYandexMap;
  } else if (page === "timer") {
    callback = startTimer;
  }

  loadHTML(`/bee/${url}`, callback);

  if (addToHistory) {
    history.pushState({ page }, null, `/bee/${page}`);
  }
}


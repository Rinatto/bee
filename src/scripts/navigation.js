import { initializeYandexMap } from "./yandexMap.js";
import { startTimer, stopTimer } from "./timer.js";

let pageCache = {}; // Кэш для страниц

document.addEventListener("DOMContentLoaded", () => {
  const menuElements = document.querySelectorAll(".menu-element");

  // Функция для установки активного класса на элемент меню
  function setActiveLink(page) {
    menuElements.forEach((el) => el.classList.remove("active-link"));
    const activeElement = Array.from(menuElements).find(
      (el) => el.getAttribute("href").replace("/", "") === page
    );
    if (activeElement) {
      activeElement.classList.add("active-link");
    }
  }

  menuElements.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault(); // предотвращаем стандартное поведение ссылки
      const page = this.getAttribute("href").replace("/", "");
      loadPageContent(page, true);
    });
  });

  window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page) {
      loadPageContent(event.state.page, false);
      setActiveLink(event.state.page); // Устанавливаем активный класс
    } else {
      loadPageContent("activity", false);
    }
  });

  const initialPage = window.location.pathname.replace("/bee/", "") || "index";
  if (!["activity", "map", "timer", "resume"].includes(initialPage)) {
    history.replaceState(null, null, "/bee/");
    loadPageContent("index", false);
  } else {
    loadPageContent(initialPage, false);
  }
});

function loadHTML(url, callback) {
  if (pageCache[url]) {
    callback(pageCache[url]);
  } else {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        pageCache[url] = html;
        callback(html);
      })
      .catch(error => {
        console.error('Failed to load page: ', error);
        history.replaceState(null, null, "/bee/");
        loadPageContent("index", true);
      });
  }
}

export function loadPageContent(page, addToHistory = true) {
  const urlMap = {
    "activity": "activity.html",
    "map": "map.html",
    "timer": "timer.html",
    "resume": "resume.html"
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

  loadHTML(`/bee/${url}`, (html) => {
    const contentDiv = document.querySelector(".main");
    contentDiv.innerHTML = html;
    if (callback) callback();
  });

  if (addToHistory) {
    history.pushState({ page }, null, `/bee/${page}`);
  }

  setActiveLink(page); // Устанавливаем активный класс при каждом переходе
}

export function initializeYandexMap() {
  const mapContainer = document.getElementById("yandexMap");
  if (mapContainer) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A63706118af642391cec3d71dad5cbaa5a3527b601c8c45292ff0756fdbab281b&width=100%25&height=480&lang=ru_RU&scroll=true";
    script.onload = function () {
      console.log("Yandex Map is loaded and ready to use.");
      hideSpinner(); // Функция для скрытия спиннера
    };
    mapContainer.appendChild(script);
  } else {
    console.error("Map container not found!");
  }
}

function hideSpinner() {
  const spinner = document.querySelector(".rotate-svg");
  if (spinner) {
    spinner.style.display = "none"; // Скрываем спиннер
  }
}

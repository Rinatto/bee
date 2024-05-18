let map;
let mapInitialized = false;

export function initializeYandexMap() {
  const mapContainer = document.getElementById("yandexMap");
  if (mapContainer && !mapInitialized) {
    const apiKey = process.env.REACT_APP_MAPS_API_KEY;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.onload = function () {
      ymaps.ready(init);
      mapInitialized = true; // Устанавливаем флаг, что карта загружена
      hideSpinner();
    };
    mapContainer.appendChild(script);
  } else if (mapInitialized) {
    restoreMap();
    hideSpinner();
  } else {
    console.error("Map container not found!");
  }
}

function init() {
  map = new ymaps.Map("yandexMap", {
    center: [59.843996, 30.360796], // Задание центра карты
    zoom: 14,
  });

  const myPlacemark = new ymaps.Placemark([59.843996, 30.360796], {
    balloonContent: 'Домашний адрес'
  });

  map.geoObjects.add(myPlacemark);
}

function restoreMap() {
  const mapContainer = document.getElementById("yandexMap");
  if (mapContainer) {
    mapContainer.appendChild(map.container.getElement());
  }
}

function hideSpinner() {
  const spinner = document.querySelector(".rotate-svg");
  if (spinner) {
    spinner.style.display = "none"; // Скрываем спиннер
  }
}

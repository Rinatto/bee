export function initializeYandexMap() {
  const mapContainer = document.getElementById("yandexMap");
  if (mapContainer) {
    const apiKey = process.env.REACT_APP_MAPS_API_KEY;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.onload = function () {
      ymaps.ready(init);
      hideSpinner();
    };
    mapContainer.appendChild(script);
  } else {
    console.error("Map container not found!");
  }
}

function init() {
  const map = new ymaps.Map("yandexMap", {
    center: [59.843996, 30.360796], // Задание центра карты
    zoom: 14,
  });

  const myPlacemark = new ymaps.Placemark([59.843996, 30.360796], {
    balloonContent: 'Домашний адрес'
  });

  map.geoObjects.add(myPlacemark);
}

function hideSpinner() {
  const spinner = document.querySelector(".rotate-svg");
  if (spinner) {
    spinner.style.display = "none"; // Скрываем спиннер
  }
}

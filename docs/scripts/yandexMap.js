let map,mapInitialized=!1;export function initializeYandexMap(){const e=document.getElementById("yandexMap");if(e&&!mapInitialized){const n=process.env.APP_MAPS_API_KEY,t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=`https://api-maps.yandex.ru/2.1/?apikey=${n}&lang=ru_RU`,t.onload=function(){ymaps.ready(init),mapInitialized=!0,hideSpinner()},e.appendChild(t)}else mapInitialized?(restoreMap(),hideSpinner()):console.error("Map container not found!")}function init(){map=new ymaps.Map("yandexMap",{center:[59.843996,30.360796],zoom:14});const e=new ymaps.Placemark([59.843996,30.360796],{balloonContent:"Домашний адрес"});map.geoObjects.add(e)}function restoreMap(){const e=document.getElementById("yandexMap");e&&e.appendChild(map.container.getElement())}function hideSpinner(){const e=document.querySelector(".rotate-svg");e&&(e.style.display="none")}
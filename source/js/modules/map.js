const ymaps = window.ymaps;
const pinCoords = [59.937465, 30.322623];

export const initMap = () => {
  ymaps.ready(init);
};

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 16,
    controls: ['routeButtonControl', 'typeSelector', 'zoomControl'],
  }, {
    searchControlProvider: 'yandex#search',
  });

  const myPin = new ymaps.Placemark(pinCoords, {
    hintContent: 'Мы находимся здесь',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '/img/sprite/icon-address.svg',
    // Размеры метки.
    iconImageSize: [18, 22],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(myPin);
}

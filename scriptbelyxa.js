let center =  [49.808048352015035,86.58957266137685];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 13
	});

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/1397/1397898.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-5, -7]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark);
}

ymaps.ready(init);
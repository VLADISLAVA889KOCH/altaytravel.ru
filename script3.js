ymaps.ready(init);

        function init() {
            var points = [
                [51.999392475050435,84.98376219335938],
                [52.54604162797624,85.22152661718746],
                [51.39859743664435,86.00034260185237]
            ];

            var myMap = new ymaps.Map("map", {
                center: [52.0, 85.5],
                zoom: 7
            });

            for (var i = 0; i < points.length; i++) {
                var point = points[i];
                myMap.geoObjects.add(new ymaps.Placemark(point));
            }

            myMap.geoObjects.add(new ymaps.Polyline(points, {}, {
                strokeColor: "#0000FF",
                strokeWidth: 3,
                strokeOpacity: 0.5
            }));
        }
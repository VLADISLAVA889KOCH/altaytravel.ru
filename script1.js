ymaps.ready(init);

        function init() {
            var points = [
                [53.35439291555429,83.78074580468741],
                [52.41971920734489,85.70219584130858],
                [51.831917967139745,85.7765667513427],
                [51.41044601486872,86.00238904492186],
                [51.95959390309458,85.95841152636709],
                [51.794003041144926,87.26467489941402], 
                [51.79364302776345,85.69267585581966],
                [51.953676337534034,85.33972621435547],
                [51.99896864616021,84.98032896582029], 
                [52.54646023210934,85.22083997167968]
            ];

            var myMap = new ymaps.Map("map", {
                center: [52.403868, 85.715418],
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
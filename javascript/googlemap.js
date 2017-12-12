function myMap() {
    var locations = [
        ['Kobal Chicken Manneken Pis', 50.845009, 4.349986],
        ['Kobal Chicken Sainte-Catherine', 50.850740, 4.347578],
        ['Kobal Chicken Laeken', 50.894519, 4.360227],
        ['Kobal Chicken Anderlecht Westland', 50.839536, 4.287151],
        ['Kobal Chicken Schaerbeek', 50.859315, 4.405742]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(50.848588, 4.355157),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
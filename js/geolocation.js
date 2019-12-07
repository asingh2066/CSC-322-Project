var map, infoWindow;

function createMap () {
  var options = {
    center: { lat: 40.730610, lng: -73.935242 },
    zoom: 13
  };

  map = new google.maps.Map(document.getElementById('map'), options);
  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
      var position = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
      };

      infoWindow.setPosition(position);
      infoWindow.setContent('Your location!');
      infoWindow.open(map);
      map.setCenter(position);
    }, function () {
      handleLocationError('Geolocation service failed', map.getCenter());
    });
  } else {
    handleLocationError('No geolocation available.', map.getCenter());
  }
}

function handleLocationError (content, position) {
  infoWindow.setPosition(position);
  infoWindow.setContent(content);
  infoWindow.open(map);
}

var myLatlng = new google.maps.LatLng();
var mapOptions = {
  zoom: 8,
  center: myLatlng,
  mapTypeId: 'roadmap'
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

const mapboxgl = require('mapbox-gl');

const iconURLs = {
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  const div = document.createElement('div');
  div.style.width = '32px';
  div.style.height = '39px';
  div.style.backgroundImage = `url(${iconURLs[type]})`;
  console.log(div.style.backgroundImage);
  return new mapboxgl.Marker(div).setLngLat(coords);
};

module.exports = buildMarker;

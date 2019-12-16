///////////////////////////////////////////////////////////////////
////////// Assignment 17 - Leaflet.js Geomapping Level 1 //////////
///////////////////////////////////////////////////////////////////

///////////////////////////
/// Initial Information ///
///////////////////////////

// Base URL: http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
// Chosen Topic: All Earthquakes From The Past 7 Days
// Chosen URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

///////////////////////////
/////// Begin Script //////
///////////////////////////

// Create a map object
var map = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
// Add tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  }).addTo(map);
  
// set variable for geojson
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Grab the data with d3
// d3.json(url, data => {
//     // Loop through data
//     // data.forEach((d,i) => {
//     //     var location = data[i].location;
//     //     if (location){
//     //         L.marker([location.coordinates[1], location.coordinates[0]]).addTo(map)
//     //     }
//     // })
//     onEachFeature(function(feature, layer) {
//         L.marker(`<p style="color:red">Zip Code: ${feature.properties.ZIP}</p> <hr> MHI: $${feature.properties.MHI2016}`)
//       })
//     // Add our marker cluster layer to the map
//     map.addLayer(markers);
//   });
d3.json(url, data =>{
var layerGroup = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h1>'+feature.properties.f1+'</h1><p>name: '+feature.properties.f2+'</p>');
    }
  }).addTo(map);
});


















///////////////////////////////////////////////////////////////////
////////////////////////// End of Script //////////////////////////
///////////////////////////////////////////////////////////////////
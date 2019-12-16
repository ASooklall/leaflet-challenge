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
    center: [37.09, -95.71],
    zoom: 4
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

// marker size function
function markerSize(magValue) {
    return magValue / 10;
  }
// add markers to map
d3.json(url, data =>{
var layerGroup = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`<p>
      Magnitude: ${feature.properties.mag} <br> 
      Type: ${feature.properties.type} <br>
      Place: ${feature.properties.place} <br> 
      Time: ${new Date(feature.properties.time)} <br>
      <a href="${feature.properties.url}">Click To View USGS Map Details</a> <br>
      <a href="${feature.properties.detail}">Click for More Details (JSON)</a>
      </p>`);
    }
  }).addTo(map);
});


















///////////////////////////////////////////////////////////////////
////////////////////////// End of Script //////////////////////////
///////////////////////////////////////////////////////////////////
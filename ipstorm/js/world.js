// Create map instance
var chart = am4core.create("worlddiv", am4maps.MapChart);

var title = chart.titles.create();
title.text = "Distribution of IPStorm nodes";
title.fontSize = 25;
title.marginBottom = 30;

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#999");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#0b0b0b");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add heat rule
polygonSeries.heatRules.push({
  "property": "fill",
  "target": polygonSeries.mapPolygons.template,
  "min": am4core.color("#999"),
  "max": am4core.color("#e91e63")
});

// Add expectancy data
//
// chart.dataSource.url ="country_stats.json";
polygonSeries.data = [{'id': 'UA', 'value': 154}, {'id': 'HK', 'value': 496}, {'id': 'US', 'value': 97}, {'id': 'IN', 'value': 2}, {'id': 'TW', 'value': 242}, {'id': 'KR', 'value': 360}, {'id': 'VN', 'value': 25}, {'id': 'MO', 'value': 11}, {'id': 'RU', 'value': 101}, {'id': 'NO', 'value': 24}, {'id': 'FR', 'value': 32}, {'id': 'EC', 'value': 10}, {'id': 'CA', 'value': 79}, {'id': 'CN', 'value': 179}, {'id': 'BR', 'value': 125}, {'id': 'KZ', 'value': 9}, {'id': 'SE', 'value': 119}, {'id': 'MX', 'value': 6}, {'id': 'SI', 'value': 10}, {'id': 'ES', 'value': 48}, {'id': 'PL', 'value': 6}, {'id': 'VE', 'value': 37}, {'id': 'BG', 'value': 14}, {'id': 'SG', 'value': 27}, {'id': 'IT', 'value': 13}, {'id': 'DE', 'value': 10}, {'id': 'MY', 'value': 17}, {'id': 'CL', 'value': 23}, {'id': 'GB', 'value': 7}, {'id': 'LV', 'value': 19}, {'id': 'AR', 'value': 3}, {'id': 'PA', 'value': 51}, {'id': 'AZ', 'value': 6}, {'id': 'KW', 'value': 2}, {'id': 'DK', 'value': 2}, {'id': 'IL', 'value': 3}, {'id': 'PT', 'value': 5}, {'id': 'CY', 'value': 22}, {'id': 'GU', 'value': 1}, {'id': 'MD', 'value': 5}, {'id': 'PK', 'value': 4}, {'id': 'MK', 'value': 3}, {'id': 'LA', 'value': 1}, {'id': 'JP', 'value': 3}, {'id': 'AE', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'PY', 'value': 3}, {'id': 'BO', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'CZ', 'value': 2}, {'id': 'UY', 'value': 2}, {'id': 'BE', 'value': 2}, {'id': 'MA', 'value': 2}, {'id': 'CH', 'value': 2}, {'id': 'TR', 'value': 1}, {'id': 'RO', 'value': 4}, {'id': 'BD', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'CW', 'value': 2}, {'id': 'MT', 'value': 1}, {'id': 'GE', 'value': 3}, {'id': 'KH', 'value': 1}, {'id': 'HU', 'value': 2}, {'id': 'UZ', 'value': 1}, {'id': 'NA', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'LT', 'value': 4}, {'id': 'BY', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'CN', 'value': 75}, {'id': 'BR', 'value': 79}, {'id': 'KR', 'value': 189}, {'id': 'PA', 'value': 23}, {'id': 'HK', 'value': 362}, {'id': 'RU', 'value': 99}, {'id': 'TW', 'value': 152}, {'id': 'BA', 'value': 2}, {'id': 'SG', 'value': 14}, {'id': 'AZ', 'value': 3}, {'id': 'ES', 'value': 34}, {'id': 'SE', 'value': 64}, {'id': 'GE', 'value': 2}, {'id': 'MD', 'value': 7}, {'id': 'UA', 'value': 92}, {'id': 'BG', 'value': 5}, {'id': 'VE', 'value': 18}, {'id': 'CW', 'value': 1}, {'id': 'PH', 'value': 1}, {'id': 'MY', 'value': 13}, {'id': 'FR', 'value': 27}, {'id': 'PL', 'value': 3}, {'id': 'NO', 'value': 11}, {'id': 'US', 'value': 44}, {'id': 'CY', 'value': 5}, {'id': 'EC', 'value': 9}, {'id': 'CL', 'value': 5}, {'id': 'DE', 'value': 6}, {'id': 'ZA', 'value': 1}, {'id': 'CA', 'value': 24}, {'id': 'CH', 'value': 4}, {'id': 'LT', 'value': 2}, {'id': 'JP', 'value': 3}, {'id': 'BO', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'LV', 'value': 13}, {'id': 'IL', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'VN', 'value': 15}, {'id': 'PT', 'value': 3}, {'id': 'PY', 'value': 1}, {'id': 'MO', 'value': 7}, {'id': 'CZ', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'GB', 'value': 7}, {'id': 'RO', 'value': 1}, {'id': 'IN', 'value': 3}, {'id': 'AU', 'value': 3}, {'id': 'MX', 'value': 4}, {'id': 'KZ', 'value': 3}, {'id': 'SI', 'value': 7}, {'id': 'CO', 'value': 1}, {'id': 'TR', 'value': 3}, {'id': 'LU', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'BY', 'value': 2}, {'id': 'HU', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'KH', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'BE', 'value': 1}, {'id': 'UZ', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

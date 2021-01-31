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
polygonSeries.data = [{'id': 'RU', 'value': 79}, {'id': 'FR', 'value': 25}, {'id': 'HK', 'value': 262}, {'id': 'LV', 'value': 24}, {'id': 'KR', 'value': 249}, {'id': 'US', 'value': 48}, {'id': 'PA', 'value': 13}, {'id': 'TW', 'value': 88}, {'id': 'CN', 'value': 91}, {'id': 'ES', 'value': 25}, {'id': 'MY', 'value': 11}, {'id': 'BR', 'value': 45}, {'id': 'IT', 'value': 6}, {'id': 'SG', 'value': 11}, {'id': 'UA', 'value': 74}, {'id': 'SE', 'value': 52}, {'id': 'CA', 'value': 39}, {'id': 'VE', 'value': 23}, {'id': 'BG', 'value': 16}, {'id': 'GB', 'value': 3}, {'id': 'VN', 'value': 11}, {'id': 'NO', 'value': 12}, {'id': 'SI', 'value': 8}, {'id': 'CL', 'value': 8}, {'id': 'PL', 'value': 4}, {'id': 'IE', 'value': 4}, {'id': 'CZ', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'TR', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'EC', 'value': 6}, {'id': 'BE', 'value': 4}, {'id': 'IL', 'value': 4}, {'id': 'PT', 'value': 11}, {'id': 'CY', 'value': 2}, {'id': 'DK', 'value': 2}, {'id': 'MO', 'value': 10}, {'id': 'BD', 'value': 3}, {'id': 'PK', 'value': 1}, {'id': 'AU', 'value': 2}, {'id': 'RO', 'value': 3}, {'id': 'DE', 'value': 3}, {'id': 'HU', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'GE', 'value': 2}, {'id': 'KZ', 'value': 2}, {'id': 'CH', 'value': 2}, {'id': 'MD', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'AZ', 'value': 2}, {'id': 'IN', 'value': 1}, {'id': 'ZA', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

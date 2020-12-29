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
polygonSeries.data = [{'id': 'HK', 'value': 405}, {'id': 'SE', 'value': 83}, {'id': 'CN', 'value': 89}, {'id': 'CA', 'value': 52}, {'id': 'KR', 'value': 213}, {'id': 'MY', 'value': 16}, {'id': 'TW', 'value': 112}, {'id': 'UA', 'value': 84}, {'id': 'CL', 'value': 12}, {'id': 'BG', 'value': 9}, {'id': 'US', 'value': 57}, {'id': 'RU', 'value': 56}, {'id': 'IN', 'value': 1}, {'id': 'PA', 'value': 24}, {'id': 'BR', 'value': 63}, {'id': 'FR', 'value': 22}, {'id': 'NO', 'value': 15}, {'id': 'LV', 'value': 14}, {'id': 'HU', 'value': 1}, {'id': 'MD', 'value': 4}, {'id': 'LT', 'value': 4}, {'id': 'AU', 'value': 7}, {'id': 'VE', 'value': 30}, {'id': 'KZ', 'value': 24}, {'id': 'UY', 'value': 32}, {'id': 'PY', 'value': 3}, {'id': 'PT', 'value': 3}, {'id': 'CY', 'value': 6}, {'id': 'EC', 'value': 6}, {'id': 'CR', 'value': 1}, {'id': 'GE', 'value': 3}, {'id': 'SI', 'value': 4}, {'id': 'SG', 'value': 16}, {'id': 'IL', 'value': 1}, {'id': 'VN', 'value': 21}, {'id': 'MT', 'value': 1}, {'id': 'TR', 'value': 2}, {'id': 'ES', 'value': 21}, {'id': 'PL', 'value': 3}, {'id': 'MX', 'value': 3}, {'id': 'IT', 'value': 3}, {'id': 'NA', 'value': 1}, {'id': 'MO', 'value': 12}, {'id': 'DE', 'value': 4}, {'id': 'CZ', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'BD', 'value': 2}, {'id': 'CH', 'value': 1}, {'id': 'GB', 'value': 2}, {'id': 'BE', 'value': 2}, {'id': 'FI', 'value': 1}, {'id': 'CI', 'value': 1}, {'id': 'HN', 'value': 1}, {'id': 'CW', 'value': 2}, {'id': 'ZA', 'value': 2}, {'id': 'DK', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'PH', 'value': 1}, {'id': 'UZ', 'value': 1}, {'id': 'AZ', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

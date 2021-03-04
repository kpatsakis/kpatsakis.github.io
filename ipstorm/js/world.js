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
polygonSeries.data = [{'id': 'KR', 'value': 352}, {'id': 'HK', 'value': 204}, {'id': 'RU', 'value': 41}, {'id': 'CN', 'value': 177}, {'id': 'VE', 'value': 20}, {'id': 'BR', 'value': 63}, {'id': 'SE', 'value': 56}, {'id': 'US', 'value': 32}, {'id': 'MY', 'value': 8}, {'id': 'UA', 'value': 47}, {'id': 'PA', 'value': 14}, {'id': 'KZ', 'value': 2}, {'id': 'TW', 'value': 73}, {'id': 'CL', 'value': 12}, {'id': 'ES', 'value': 21}, {'id': 'LV', 'value': 11}, {'id': 'GU', 'value': 1}, {'id': 'DE', 'value': 5}, {'id': 'BA', 'value': 3}, {'id': 'CA', 'value': 31}, {'id': 'VN', 'value': 5}, {'id': 'TR', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'TN', 'value': 1}, {'id': 'FR', 'value': 12}, {'id': 'MX', 'value': 3}, {'id': 'NL', 'value': 2}, {'id': 'EG', 'value': 1}, {'id': 'NO', 'value': 6}, {'id': 'MK', 'value': 1}, {'id': 'JP', 'value': 6}, {'id': 'BZ', 'value': 2}, {'id': 'PT', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'SG', 'value': 4}, {'id': 'BG', 'value': 10}, {'id': 'SA', 'value': 2}, {'id': 'HU', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'EC', 'value': 3}, {'id': 'MD', 'value': 2}, {'id': 'IT', 'value': 2}, {'id': 'IN', 'value': 2}, {'id': 'MO', 'value': 8}, {'id': 'DO', 'value': 1}, {'id': 'AU', 'value': 3}, {'id': 'ZA', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'HN', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'MA', 'value': 4}, {'id': 'CH', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'GB', 'value': 3}, {'id': 'BE', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'AM', 'value': 2}, {'id': 'UZ', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'GH', 'value': 1}, {'id': 'EE', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

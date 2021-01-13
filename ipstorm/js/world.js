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
polygonSeries.data = [{'id': 'TW', 'value': 220}, {'id': 'CA', 'value': 68}, {'id': 'HK', 'value': 503}, {'id': 'UA', 'value': 157}, {'id': 'CN', 'value': 208}, {'id': 'LV', 'value': 13}, {'id': 'PA', 'value': 35}, {'id': 'JP', 'value': 6}, {'id': 'KR', 'value': 339}, {'id': 'SE', 'value': 112}, {'id': 'BR', 'value': 125}, {'id': 'VE', 'value': 33}, {'id': 'SG', 'value': 18}, {'id': 'RU', 'value': 111}, {'id': 'ES', 'value': 44}, {'id': 'US', 'value': 102}, {'id': 'UY', 'value': 50}, {'id': 'MX', 'value': 7}, {'id': 'IT', 'value': 11}, {'id': 'BG', 'value': 15}, {'id': 'FR', 'value': 30}, {'id': 'NO', 'value': 29}, {'id': 'MO', 'value': 14}, {'id': 'PT', 'value': 4}, {'id': 'GE', 'value': 5}, {'id': 'DE', 'value': 33}, {'id': 'CY', 'value': 21}, {'id': 'CL', 'value': 20}, {'id': 'SI', 'value': 13}, {'id': 'FI', 'value': 2}, {'id': 'VN', 'value': 25}, {'id': 'PL', 'value': 10}, {'id': 'AR', 'value': 4}, {'id': 'MY', 'value': 24}, {'id': 'IN', 'value': 1}, {'id': 'LT', 'value': 3}, {'id': 'MD', 'value': 3}, {'id': 'EC', 'value': 14}, {'id': 'DK', 'value': 4}, {'id': 'GB', 'value': 16}, {'id': 'NL', 'value': 2}, {'id': 'IL', 'value': 4}, {'id': 'TR', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'IE', 'value': 3}, {'id': 'KZ', 'value': 4}, {'id': 'CH', 'value': 3}, {'id': 'AU', 'value': 3}, {'id': 'CZ', 'value': 3}, {'id': 'TH', 'value': 2}, {'id': 'BE', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'PY', 'value': 2}, {'id': 'ZA', 'value': 3}, {'id': 'MM', 'value': 1}, {'id': 'KH', 'value': 1}, {'id': 'CO', 'value': 4}, {'id': 'HR', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'UZ', 'value': 1}, {'id': 'BD', 'value': 2}, {'id': 'HN', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'BO', 'value': 1}, {'id': 'CR', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

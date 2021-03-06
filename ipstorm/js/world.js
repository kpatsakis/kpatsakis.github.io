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
polygonSeries.data = [{'id': 'ES', 'value': 20}, {'id': 'KR', 'value': 329}, {'id': 'UA', 'value': 55}, {'id': 'BR', 'value': 31}, {'id': 'CA', 'value': 37}, {'id': 'HK', 'value': 198}, {'id': 'CN', 'value': 102}, {'id': 'PA', 'value': 7}, {'id': 'TW', 'value': 62}, {'id': 'RU', 'value': 37}, {'id': 'SE', 'value': 39}, {'id': 'EC', 'value': 3}, {'id': 'FR', 'value': 8}, {'id': 'LV', 'value': 17}, {'id': 'VE', 'value': 13}, {'id': 'US', 'value': 29}, {'id': 'CR', 'value': 1}, {'id': 'MA', 'value': 2}, {'id': 'GB', 'value': 4}, {'id': 'HU', 'value': 4}, {'id': 'IE', 'value': 2}, {'id': 'VN', 'value': 7}, {'id': 'PK', 'value': 1}, {'id': 'HN', 'value': 1}, {'id': 'MO', 'value': 4}, {'id': 'JP', 'value': 4}, {'id': 'BG', 'value': 5}, {'id': 'BA', 'value': 1}, {'id': 'SG', 'value': 6}, {'id': 'BY', 'value': 1}, {'id': 'MY', 'value': 13}, {'id': 'AU', 'value': 3}, {'id': 'NO', 'value': 3}, {'id': 'NA', 'value': 1}, {'id': 'RO', 'value': 2}, {'id': 'CL', 'value': 12}, {'id': 'PY', 'value': 1}, {'id': 'DE', 'value': 5}, {'id': 'CY', 'value': 1}, {'id': 'PL', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'IT', 'value': 1}, {'id': 'TR', 'value': 3}, {'id': 'GE', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'CZ', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'EE', 'value': 1}, {'id': 'AR', 'value': 2}, {'id': 'MD', 'value': 1}, {'id': 'MX', 'value': 2}, {'id': 'SI', 'value': 2}, {'id': 'AM', 'value': 2}, {'id': 'RS', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'BZ', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'HK', 'value': 116}, {'id': 'TW', 'value': 28}, {'id': 'CN', 'value': 47}, {'id': 'FR', 'value': 7}, {'id': 'BR', 'value': 6}, {'id': 'SE', 'value': 35}, {'id': 'US', 'value': 24}, {'id': 'VN', 'value': 3}, {'id': 'MY', 'value': 6}, {'id': 'DE', 'value': 2}, {'id': 'VE', 'value': 12}, {'id': 'CA', 'value': 13}, {'id': 'MD', 'value': 16}, {'id': 'LV', 'value': 5}, {'id': 'UA', 'value': 18}, {'id': 'KR', 'value': 41}, {'id': 'MK', 'value': 1}, {'id': 'ES', 'value': 7}, {'id': 'RU', 'value': 13}, {'id': 'CL', 'value': 4}, {'id': 'BG', 'value': 4}, {'id': 'RO', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'MO', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'PA', 'value': 1}, {'id': 'SI', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'DK', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'PK', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'IL', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

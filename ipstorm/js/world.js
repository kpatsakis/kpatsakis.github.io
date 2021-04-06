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
polygonSeries.data = [{'id': 'KR', 'value': 141}, {'id': 'IE', 'value': 1}, {'id': 'CA', 'value': 9}, {'id': 'US', 'value': 17}, {'id': 'RU', 'value': 15}, {'id': 'UA', 'value': 19}, {'id': 'CN', 'value': 33}, {'id': 'HK', 'value': 95}, {'id': 'LV', 'value': 5}, {'id': 'ZA', 'value': 6}, {'id': 'PA', 'value': 5}, {'id': 'SG', 'value': 4}, {'id': 'SE', 'value': 15}, {'id': 'DE', 'value': 1}, {'id': 'MY', 'value': 7}, {'id': 'TW', 'value': 20}, {'id': 'PK', 'value': 1}, {'id': 'BR', 'value': 15}, {'id': 'ES', 'value': 4}, {'id': 'NO', 'value': 1}, {'id': 'CL', 'value': 5}, {'id': 'SI', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'VE', 'value': 11}, {'id': 'TR', 'value': 2}, {'id': 'AR', 'value': 1}, {'id': 'GE', 'value': 3}, {'id': 'RO', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'FR', 'value': 8}, {'id': 'VN', 'value': 3}, {'id': 'EC', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'BG', 'value': 2}, {'id': 'MD', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'CZ', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'CH', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

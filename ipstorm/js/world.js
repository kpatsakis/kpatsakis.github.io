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
polygonSeries.data = [{'id': 'CA', 'value': 18}, {'id': 'KR', 'value': 148}, {'id': 'HK', 'value': 121}, {'id': 'TW', 'value': 27}, {'id': 'BR', 'value': 24}, {'id': 'CL', 'value': 5}, {'id': 'CN', 'value': 37}, {'id': 'SE', 'value': 38}, {'id': 'US', 'value': 14}, {'id': 'PA', 'value': 4}, {'id': 'MY', 'value': 8}, {'id': 'LV', 'value': 6}, {'id': 'SI', 'value': 2}, {'id': 'RU', 'value': 14}, {'id': 'EC', 'value': 2}, {'id': 'ES', 'value': 7}, {'id': 'FR', 'value': 6}, {'id': 'VE', 'value': 9}, {'id': 'NO', 'value': 1}, {'id': 'UA', 'value': 24}, {'id': 'GB', 'value': 1}, {'id': 'SG', 'value': 4}, {'id': 'NL', 'value': 2}, {'id': 'BG', 'value': 2}, {'id': 'PK', 'value': 2}, {'id': 'DE', 'value': 2}, {'id': 'MD', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'VN', 'value': 3}, {'id': 'GE', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'IE', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

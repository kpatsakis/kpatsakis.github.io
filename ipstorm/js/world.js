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
polygonSeries.data = [{'id': 'CN', 'value': 43}, {'id': 'KR', 'value': 167}, {'id': 'MD', 'value': 2}, {'id': 'VE', 'value': 18}, {'id': 'HK', 'value': 159}, {'id': 'TW', 'value': 67}, {'id': 'CH', 'value': 2}, {'id': 'CA', 'value': 16}, {'id': 'US', 'value': 25}, {'id': 'FR', 'value': 18}, {'id': 'DE', 'value': 1}, {'id': 'NL', 'value': 5}, {'id': 'BR', 'value': 19}, {'id': 'RU', 'value': 43}, {'id': 'SG', 'value': 10}, {'id': 'CL', 'value': 3}, {'id': 'UA', 'value': 49}, {'id': 'RO', 'value': 2}, {'id': 'MO', 'value': 2}, {'id': 'NO', 'value': 5}, {'id': 'IN', 'value': 2}, {'id': 'GR', 'value': 1}, {'id': 'LV', 'value': 14}, {'id': 'VN', 'value': 6}, {'id': 'LT', 'value': 2}, {'id': 'ES', 'value': 11}, {'id': 'GE', 'value': 3}, {'id': 'SE', 'value': 40}, {'id': 'MY', 'value': 9}, {'id': 'SI', 'value': 3}, {'id': 'PA', 'value': 9}, {'id': 'DK', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'EC', 'value': 2}, {'id': 'ID', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'IL', 'value': 1}, {'id': 'LA', 'value': 1}, {'id': 'BG', 'value': 4}, {'id': 'SN', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'IT', 'value': 2}, {'id': 'GU', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

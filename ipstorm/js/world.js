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
polygonSeries.data = [{'id': 'KR', 'value': 114}, {'id': 'HK', 'value': 57}, {'id': 'BR', 'value': 44}, {'id': 'LV', 'value': 5}, {'id': 'ES', 'value': 4}, {'id': 'MY', 'value': 6}, {'id': 'JP', 'value': 1}, {'id': 'SE', 'value': 8}, {'id': 'PA', 'value': 2}, {'id': 'SG', 'value': 2}, {'id': 'TW', 'value': 26}, {'id': 'CN', 'value': 17}, {'id': 'BA', 'value': 1}, {'id': 'FR', 'value': 6}, {'id': 'RU', 'value': 10}, {'id': 'US', 'value': 6}, {'id': 'CA', 'value': 4}, {'id': 'VE', 'value': 10}, {'id': 'IL', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'VN', 'value': 1}, {'id': 'UA', 'value': 8}, {'id': 'MX', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'KH', 'value': 1}, {'id': 'FI', 'value': 2}, {'id': 'NL', 'value': 2}, {'id': 'MD', 'value': 2}, {'id': 'GE', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'HU', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

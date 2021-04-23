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
polygonSeries.data = [{'id': 'UA', 'value': 16}, {'id': 'TW', 'value': 20}, {'id': 'HK', 'value': 88}, {'id': 'SE', 'value': 13}, {'id': 'ES', 'value': 11}, {'id': 'CA', 'value': 14}, {'id': 'KR', 'value': 37}, {'id': 'LV', 'value': 3}, {'id': 'VN', 'value': 6}, {'id': 'US', 'value': 13}, {'id': 'FR', 'value': 5}, {'id': 'RU', 'value': 13}, {'id': 'CN', 'value': 30}, {'id': 'BR', 'value': 22}, {'id': 'IT', 'value': 1}, {'id': 'MY', 'value': 7}, {'id': 'AM', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'SG', 'value': 2}, {'id': 'BZ', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'PA', 'value': 2}, {'id': 'GE', 'value': 1}, {'id': 'CL', 'value': 3}, {'id': 'VE', 'value': 4}, {'id': 'GB', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'PL', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'SI', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

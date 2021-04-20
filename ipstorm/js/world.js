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
polygonSeries.data = [{'id': 'CW', 'value': 1}, {'id': 'BR', 'value': 22}, {'id': 'SE', 'value': 33}, {'id': 'KR', 'value': 49}, {'id': 'JP', 'value': 2}, {'id': 'CN', 'value': 56}, {'id': 'US', 'value': 18}, {'id': 'BG', 'value': 4}, {'id': 'ES', 'value': 8}, {'id': 'SG', 'value': 2}, {'id': 'HK', 'value': 99}, {'id': 'MY', 'value': 7}, {'id': 'PA', 'value': 2}, {'id': 'PL', 'value': 2}, {'id': 'RU', 'value': 13}, {'id': 'PT', 'value': 1}, {'id': 'TW', 'value': 33}, {'id': 'UA', 'value': 14}, {'id': 'FR', 'value': 6}, {'id': 'LV', 'value': 6}, {'id': 'GB', 'value': 1}, {'id': 'VE', 'value': 10}, {'id': 'BA', 'value': 1}, {'id': 'DE', 'value': 4}, {'id': 'CA', 'value': 12}, {'id': 'VN', 'value': 4}, {'id': 'IE', 'value': 2}, {'id': 'ZA', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'GE', 'value': 2}, {'id': 'MX', 'value': 1}, {'id': 'IT', 'value': 2}, {'id': 'MD', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'EG', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'KZ', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'SI', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'PK', 'value': 2}, {'id': 'TW', 'value': 73}, {'id': 'UA', 'value': 58}, {'id': 'CN', 'value': 71}, {'id': 'KR', 'value': 218}, {'id': 'LV', 'value': 21}, {'id': 'HK', 'value': 194}, {'id': 'MY', 'value': 10}, {'id': 'CA', 'value': 36}, {'id': 'US', 'value': 36}, {'id': 'RU', 'value': 55}, {'id': 'FR', 'value': 19}, {'id': 'VE', 'value': 13}, {'id': 'BG', 'value': 8}, {'id': 'CO', 'value': 2}, {'id': 'IE', 'value': 1}, {'id': 'SE', 'value': 41}, {'id': 'ES', 'value': 17}, {'id': 'BD', 'value': 2}, {'id': 'PA', 'value': 11}, {'id': 'BR', 'value': 22}, {'id': 'IL', 'value': 1}, {'id': 'NL', 'value': 4}, {'id': 'ZA', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'DE', 'value': 3}, {'id': 'EE', 'value': 1}, {'id': 'CL', 'value': 11}, {'id': 'IT', 'value': 4}, {'id': 'PL', 'value': 2}, {'id': 'AW', 'value': 1}, {'id': 'KZ', 'value': 2}, {'id': 'RO', 'value': 2}, {'id': 'NO', 'value': 3}, {'id': 'VN', 'value': 4}, {'id': 'MO', 'value': 2}, {'id': 'EC', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'DK', 'value': 3}, {'id': 'GE', 'value': 2}, {'id': 'GB', 'value': 2}, {'id': 'MK', 'value': 1}, {'id': 'ID', 'value': 2}, {'id': 'CY', 'value': 1}, {'id': 'GU', 'value': 2}, {'id': 'CH', 'value': 3}, {'id': 'PT', 'value': 2}, {'id': 'SG', 'value': 3}, {'id': 'HU', 'value': 1}, {'id': 'MD', 'value': 4}, {'id': 'AZ', 'value': 2}, {'id': 'JP', 'value': 1}, {'id': 'BE', 'value': 2}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

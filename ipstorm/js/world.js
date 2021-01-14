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
polygonSeries.data = [{'id': 'CY', 'value': 26}, {'id': 'RU', 'value': 111}, {'id': 'NO', 'value': 29}, {'id': 'LV', 'value': 26}, {'id': 'PA', 'value': 38}, {'id': 'CN', 'value': 190}, {'id': 'HK', 'value': 544}, {'id': 'CA', 'value': 77}, {'id': 'PL', 'value': 8}, {'id': 'ES', 'value': 42}, {'id': 'UA', 'value': 159}, {'id': 'KR', 'value': 431}, {'id': 'BR', 'value': 124}, {'id': 'MD', 'value': 6}, {'id': 'TW', 'value': 231}, {'id': 'MK', 'value': 3}, {'id': 'GB', 'value': 7}, {'id': 'BG', 'value': 18}, {'id': 'SE', 'value': 119}, {'id': 'LT', 'value': 5}, {'id': 'VE', 'value': 36}, {'id': 'AU', 'value': 6}, {'id': 'SG', 'value': 27}, {'id': 'EC', 'value': 13}, {'id': 'US', 'value': 104}, {'id': 'VN', 'value': 32}, {'id': 'TR', 'value': 1}, {'id': 'UY', 'value': 51}, {'id': 'MY', 'value': 18}, {'id': 'BE', 'value': 2}, {'id': 'FR', 'value': 34}, {'id': 'AR', 'value': 4}, {'id': 'CH', 'value': 3}, {'id': 'DK', 'value': 2}, {'id': 'SI', 'value': 9}, {'id': 'JP', 'value': 2}, {'id': 'IL', 'value': 4}, {'id': 'IT', 'value': 2}, {'id': 'RO', 'value': 6}, {'id': 'IE', 'value': 2}, {'id': 'MO', 'value': 18}, {'id': 'AZ', 'value': 2}, {'id': 'CL', 'value': 16}, {'id': 'AM', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'CW', 'value': 2}, {'id': 'BA', 'value': 3}, {'id': 'AL', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'DE', 'value': 11}, {'id': 'KZ', 'value': 5}, {'id': 'PY', 'value': 3}, {'id': 'MX', 'value': 10}, {'id': 'MM', 'value': 1}, {'id': 'CO', 'value': 4}, {'id': 'TH', 'value': 1}, {'id': 'GU', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'UZ', 'value': 1}, {'id': 'DZ', 'value': 1}, {'id': 'AE', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'GE', 'value': 6}, {'id': 'PT', 'value': 5}, {'id': 'HN', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'CZ', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'ZA', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

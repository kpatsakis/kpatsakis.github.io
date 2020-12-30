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
polygonSeries.data = [{'id': 'KR', 'value': 197}, {'id': 'CA', 'value': 44}, {'id': 'RU', 'value': 42}, {'id': 'SG', 'value': 17}, {'id': 'HK', 'value': 346}, {'id': 'FR', 'value': 19}, {'id': 'SE', 'value': 74}, {'id': 'UA', 'value': 68}, {'id': 'CN', 'value': 98}, {'id': 'TW', 'value': 115}, {'id': 'GB', 'value': 11}, {'id': 'KZ', 'value': 26}, {'id': 'TR', 'value': 1}, {'id': 'LT', 'value': 7}, {'id': 'VN', 'value': 20}, {'id': 'MO', 'value': 5}, {'id': 'EC', 'value': 10}, {'id': 'US', 'value': 65}, {'id': 'ES', 'value': 23}, {'id': 'BR', 'value': 51}, {'id': 'AU', 'value': 5}, {'id': 'VE', 'value': 33}, {'id': 'NO', 'value': 11}, {'id': 'CZ', 'value': 1}, {'id': 'MY', 'value': 15}, {'id': 'MD', 'value': 3}, {'id': 'LV', 'value': 12}, {'id': 'CL', 'value': 13}, {'id': 'BG', 'value': 3}, {'id': 'RO', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'UY', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'PL', 'value': 7}, {'id': 'CY', 'value': 6}, {'id': 'PA', 'value': 15}, {'id': 'IT', 'value': 4}, {'id': 'MX', 'value': 3}, {'id': 'GE', 'value': 3}, {'id': 'CO', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'IR', 'value': 5}, {'id': 'CH', 'value': 2}, {'id': 'JP', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'AR', 'value': 2}, {'id': 'MT', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'CI', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'SI', 'value': 6}, {'id': 'HN', 'value': 1}, {'id': 'NG', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'DE', 'value': 6}, {'id': 'UZ', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'KH', 'value': 1}, {'id': 'PT', 'value': 3}, {'id': 'AW', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'IN', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'CW', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'BR', 'value': 140}, {'id': 'CN', 'value': 179}, {'id': 'HK', 'value': 501}, {'id': 'SE', 'value': 104}, {'id': 'FR', 'value': 33}, {'id': 'KR', 'value': 345}, {'id': 'CA', 'value': 75}, {'id': 'DE', 'value': 27}, {'id': 'VN', 'value': 33}, {'id': 'TW', 'value': 218}, {'id': 'EC', 'value': 9}, {'id': 'UA', 'value': 145}, {'id': 'PA', 'value': 33}, {'id': 'UZ', 'value': 1}, {'id': 'LV', 'value': 20}, {'id': 'VE', 'value': 36}, {'id': 'NO', 'value': 21}, {'id': 'SI', 'value': 10}, {'id': 'MO', 'value': 22}, {'id': 'US', 'value': 98}, {'id': 'CL', 'value': 21}, {'id': 'BG', 'value': 16}, {'id': 'RU', 'value': 96}, {'id': 'UY', 'value': 15}, {'id': 'CY', 'value': 20}, {'id': 'ES', 'value': 42}, {'id': 'MY', 'value': 20}, {'id': 'CR', 'value': 16}, {'id': 'IN', 'value': 1}, {'id': 'JP', 'value': 2}, {'id': 'NL', 'value': 2}, {'id': 'IT', 'value': 10}, {'id': 'SG', 'value': 20}, {'id': 'GE', 'value': 3}, {'id': 'GB', 'value': 13}, {'id': 'BD', 'value': 1}, {'id': 'KZ', 'value': 3}, {'id': 'MD', 'value': 4}, {'id': 'PT', 'value': 4}, {'id': 'CO', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'HN', 'value': 1}, {'id': 'TH', 'value': 3}, {'id': 'AU', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'TR', 'value': 2}, {'id': 'TT', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'AR', 'value': 3}, {'id': 'RO', 'value': 3}, {'id': 'MK', 'value': 2}, {'id': 'ZA', 'value': 1}, {'id': 'PL', 'value': 9}, {'id': 'IL', 'value': 4}, {'id': 'MX', 'value': 6}, {'id': 'MA', 'value': 1}, {'id': 'LU', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'CZ', 'value': 1}, {'id': 'DK', 'value': 3}, {'id': 'AZ', 'value': 2}, {'id': 'SA', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'KH', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'PY', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

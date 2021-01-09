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
polygonSeries.data = [{'id': 'CN', 'value': 162}, {'id': 'RU', 'value': 108}, {'id': 'BR', 'value': 119}, {'id': 'DE', 'value': 26}, {'id': 'TW', 'value': 175}, {'id': 'HK', 'value': 489}, {'id': 'JP', 'value': 2}, {'id': 'CA', 'value': 75}, {'id': 'KR', 'value': 338}, {'id': 'PA', 'value': 37}, {'id': 'VE', 'value': 40}, {'id': 'UY', 'value': 50}, {'id': 'NO', 'value': 19}, {'id': 'UA', 'value': 132}, {'id': 'CY', 'value': 21}, {'id': 'NL', 'value': 2}, {'id': 'BG', 'value': 12}, {'id': 'BD', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'SE', 'value': 118}, {'id': 'HU', 'value': 3}, {'id': 'MO', 'value': 14}, {'id': 'LV', 'value': 21}, {'id': 'CL', 'value': 21}, {'id': 'US', 'value': 78}, {'id': 'SI', 'value': 7}, {'id': 'EC', 'value': 8}, {'id': 'ES', 'value': 37}, {'id': 'AZ', 'value': 5}, {'id': 'AR', 'value': 5}, {'id': 'GB', 'value': 17}, {'id': 'VN', 'value': 22}, {'id': 'FR', 'value': 25}, {'id': 'IL', 'value': 5}, {'id': 'MX', 'value': 6}, {'id': 'FI', 'value': 2}, {'id': 'MY', 'value': 15}, {'id': 'SG', 'value': 22}, {'id': 'LU', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'PL', 'value': 6}, {'id': 'IT', 'value': 7}, {'id': 'GE', 'value': 4}, {'id': 'DK', 'value': 4}, {'id': 'LT', 'value': 6}, {'id': 'TH', 'value': 2}, {'id': 'CO', 'value': 2}, {'id': 'PT', 'value': 2}, {'id': 'PK', 'value': 2}, {'id': 'AU', 'value': 4}, {'id': 'UZ', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'NA', 'value': 1}, {'id': 'IE', 'value': 5}, {'id': 'LA', 'value': 1}, {'id': 'CH', 'value': 3}, {'id': 'CZ', 'value': 2}, {'id': 'MT', 'value': 1}, {'id': 'PY', 'value': 2}, {'id': 'LC', 'value': 1}, {'id': 'MK', 'value': 2}, {'id': 'IN', 'value': 1}, {'id': 'MD', 'value': 3}, {'id': 'BY', 'value': 4}, {'id': 'RS', 'value': 1}, {'id': 'TR', 'value': 2}, {'id': 'CW', 'value': 1}, {'id': 'EG', 'value': 2}, {'id': 'ZA', 'value': 3}, {'id': 'BO', 'value': 1}, {'id': 'RO', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

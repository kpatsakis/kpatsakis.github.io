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
polygonSeries.data = [{'id': 'CN', 'value': 94}, {'id': 'UY', 'value': 31}, {'id': 'KR', 'value': 345}, {'id': 'HK', 'value': 188}, {'id': 'HU', 'value': 1}, {'id': 'BR', 'value': 67}, {'id': 'PA', 'value': 8}, {'id': 'TW', 'value': 88}, {'id': 'SI', 'value': 7}, {'id': 'JP', 'value': 3}, {'id': 'BG', 'value': 7}, {'id': 'FR', 'value': 10}, {'id': 'RU', 'value': 36}, {'id': 'MY', 'value': 10}, {'id': 'SG', 'value': 8}, {'id': 'EC', 'value': 4}, {'id': 'RO', 'value': 2}, {'id': 'IE', 'value': 4}, {'id': 'US', 'value': 38}, {'id': 'MO', 'value': 14}, {'id': 'CH', 'value': 2}, {'id': 'CA', 'value': 23}, {'id': 'UA', 'value': 39}, {'id': 'SK', 'value': 1}, {'id': 'SE', 'value': 37}, {'id': 'ES', 'value': 18}, {'id': 'AM', 'value': 4}, {'id': 'CR', 'value': 2}, {'id': 'IR', 'value': 1}, {'id': 'LV', 'value': 12}, {'id': 'MX', 'value': 3}, {'id': 'CO', 'value': 4}, {'id': 'VE', 'value': 17}, {'id': 'NL', 'value': 3}, {'id': 'CL', 'value': 11}, {'id': 'BA', 'value': 3}, {'id': 'CW', 'value': 1}, {'id': 'GB', 'value': 2}, {'id': 'IL', 'value': 4}, {'id': 'BZ', 'value': 1}, {'id': 'DE', 'value': 6}, {'id': 'VN', 'value': 8}, {'id': 'NO', 'value': 6}, {'id': 'IT', 'value': 2}, {'id': 'AU', 'value': 3}, {'id': 'RS', 'value': 2}, {'id': 'PT', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'TR', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'BE', 'value': 1}, {'id': 'PK', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'CA', 'value': 36}, {'id': 'SE', 'value': 45}, {'id': 'KR', 'value': 232}, {'id': 'ES', 'value': 19}, {'id': 'US', 'value': 40}, {'id': 'UA', 'value': 46}, {'id': 'CN', 'value': 121}, {'id': 'HK', 'value': 197}, {'id': 'RU', 'value': 39}, {'id': 'AU', 'value': 1}, {'id': 'VN', 'value': 11}, {'id': 'TR', 'value': 1}, {'id': 'CL', 'value': 11}, {'id': 'TW', 'value': 62}, {'id': 'DE', 'value': 3}, {'id': 'BR', 'value': 37}, {'id': 'VE', 'value': 30}, {'id': 'IT', 'value': 4}, {'id': 'FR', 'value': 19}, {'id': 'LV', 'value': 16}, {'id': 'IL', 'value': 3}, {'id': 'IN', 'value': 1}, {'id': 'MD', 'value': 2}, {'id': 'BE', 'value': 2}, {'id': 'MY', 'value': 7}, {'id': 'DK', 'value': 1}, {'id': 'NO', 'value': 8}, {'id': 'SG', 'value': 5}, {'id': 'JM', 'value': 1}, {'id': 'BG', 'value': 6}, {'id': 'MX', 'value': 4}, {'id': 'PT', 'value': 4}, {'id': 'PA', 'value': 8}, {'id': 'PL', 'value': 1}, {'id': 'BD', 'value': 2}, {'id': 'NL', 'value': 2}, {'id': 'KZ', 'value': 1}, {'id': 'EC', 'value': 5}, {'id': 'SI', 'value': 4}, {'id': 'PK', 'value': 3}, {'id': 'MO', 'value': 7}, {'id': 'AE', 'value': 1}, {'id': 'GR', 'value': 3}, {'id': 'PY', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'GE', 'value': 2}, {'id': 'FI', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'KW', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'CY', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'GB', 'value': 1}, {'id': 'AR', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

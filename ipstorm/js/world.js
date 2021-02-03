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
polygonSeries.data = [{'id': 'RU', 'value': 50}, {'id': 'TW', 'value': 59}, {'id': 'US', 'value': 53}, {'id': 'KR', 'value': 248}, {'id': 'HK', 'value': 210}, {'id': 'ES', 'value': 24}, {'id': 'CA', 'value': 39}, {'id': 'UA', 'value': 57}, {'id': 'BR', 'value': 33}, {'id': 'CN', 'value': 133}, {'id': 'FR', 'value': 19}, {'id': 'GB', 'value': 5}, {'id': 'SE', 'value': 43}, {'id': 'BG', 'value': 9}, {'id': 'GU', 'value': 1}, {'id': 'IT', 'value': 6}, {'id': 'AR', 'value': 2}, {'id': 'CL', 'value': 14}, {'id': 'GR', 'value': 2}, {'id': 'PT', 'value': 3}, {'id': 'NO', 'value': 4}, {'id': 'VE', 'value': 22}, {'id': 'LV', 'value': 15}, {'id': 'ZA', 'value': 2}, {'id': 'MX', 'value': 3}, {'id': 'DK', 'value': 2}, {'id': 'BD', 'value': 2}, {'id': 'KW', 'value': 1}, {'id': 'IL', 'value': 3}, {'id': 'VN', 'value': 7}, {'id': 'RO', 'value': 3}, {'id': 'PA', 'value': 13}, {'id': 'BE', 'value': 3}, {'id': 'AU', 'value': 4}, {'id': 'NL', 'value': 2}, {'id': 'MY', 'value': 8}, {'id': 'KZ', 'value': 3}, {'id': 'CH', 'value': 4}, {'id': 'IN', 'value': 1}, {'id': 'PK', 'value': 3}, {'id': 'MO', 'value': 5}, {'id': 'SG', 'value': 4}, {'id': 'EC', 'value': 5}, {'id': 'ID', 'value': 1}, {'id': 'SI', 'value': 2}, {'id': 'BA', 'value': 1}, {'id': 'CY', 'value': 1}, {'id': 'TR', 'value': 2}, {'id': 'AZ', 'value': 1}, {'id': 'LK', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'MD', 'value': 2}, {'id': 'JP', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'FI', 'value': 2}, {'id': 'MK', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

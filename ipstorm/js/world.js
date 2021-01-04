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
polygonSeries.data = [{'id': 'GB', 'value': 2}, {'id': 'HK', 'value': 104}, {'id': 'BR', 'value': 16}, {'id': 'EC', 'value': 2}, {'id': 'CN', 'value': 20}, {'id': 'US', 'value': 14}, {'id': 'SE', 'value': 21}, {'id': 'UA', 'value': 26}, {'id': 'RU', 'value': 31}, {'id': 'TW', 'value': 36}, {'id': 'KR', 'value': 78}, {'id': 'SG', 'value': 5}, {'id': 'CH', 'value': 2}, {'id': 'MY', 'value': 8}, {'id': 'BE', 'value': 1}, {'id': 'ES', 'value': 7}, {'id': 'IN', 'value': 1}, {'id': 'FR', 'value': 6}, {'id': 'LV', 'value': 5}, {'id': 'CA', 'value': 9}, {'id': 'JP', 'value': 2}, {'id': 'MO', 'value': 3}, {'id': 'VN', 'value': 4}, {'id': 'BA', 'value': 1}, {'id': 'MD', 'value': 4}, {'id': 'CL', 'value': 3}, {'id': 'TR', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'NO', 'value': 2}, {'id': 'PK', 'value': 2}, {'id': 'MX', 'value': 2}, {'id': 'ZA', 'value': 1}, {'id': 'DE', 'value': 2}, {'id': 'AZ', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'VE', 'value': 2}, {'id': 'AU', 'value': 2}, {'id': 'PH', 'value': 1}, {'id': 'SI', 'value': 4}, {'id': 'FI', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'KH', 'value': 1}, {'id': 'CO', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'CN', 'value': 42}, {'id': 'BZ', 'value': 2}, {'id': 'HK', 'value': 127}, {'id': 'KR', 'value': 51}, {'id': 'CA', 'value': 5}, {'id': 'US', 'value': 13}, {'id': 'BE', 'value': 2}, {'id': 'IE', 'value': 3}, {'id': 'TW', 'value': 36}, {'id': 'UA', 'value': 15}, {'id': 'SN', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'SI', 'value': 1}, {'id': 'PA', 'value': 7}, {'id': 'MY', 'value': 7}, {'id': 'SE', 'value': 14}, {'id': 'RU', 'value': 14}, {'id': 'ES', 'value': 9}, {'id': 'VE', 'value': 8}, {'id': 'GH', 'value': 1}, {'id': 'LV', 'value': 6}, {'id': 'FR', 'value': 6}, {'id': 'SG', 'value': 3}, {'id': 'IT', 'value': 1}, {'id': 'VN', 'value': 6}, {'id': 'BR', 'value': 10}, {'id': 'MK', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'TR', 'value': 1}, {'id': 'PK', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'CL', 'value': 2}, {'id': 'BG', 'value': 3}, {'id': 'DE', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'NZ', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'NO', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

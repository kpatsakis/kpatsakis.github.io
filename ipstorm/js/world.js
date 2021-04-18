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
polygonSeries.data = [{'id': 'RU', 'value': 13}, {'id': 'HK', 'value': 143}, {'id': 'UA', 'value': 17}, {'id': 'BE', 'value': 2}, {'id': 'BR', 'value': 10}, {'id': 'CN', 'value': 41}, {'id': 'TW', 'value': 39}, {'id': 'KR', 'value': 46}, {'id': 'US', 'value': 21}, {'id': 'VE', 'value': 9}, {'id': 'DE', 'value': 3}, {'id': 'ES', 'value': 4}, {'id': 'LV', 'value': 4}, {'id': 'EG', 'value': 1}, {'id': 'MY', 'value': 7}, {'id': 'CL', 'value': 5}, {'id': 'NO', 'value': 1}, {'id': 'SE', 'value': 15}, {'id': 'PA', 'value': 4}, {'id': 'NL', 'value': 2}, {'id': 'CA', 'value': 14}, {'id': 'BZ', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'FR', 'value': 9}, {'id': 'PK', 'value': 2}, {'id': 'ZA', 'value': 1}, {'id': 'BG', 'value': 6}, {'id': 'VN', 'value': 2}, {'id': 'MK', 'value': 2}, {'id': 'SI', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'SG', 'value': 1}, {'id': 'IE', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

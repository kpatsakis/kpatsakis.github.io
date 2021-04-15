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
polygonSeries.data = [{'id': 'FR', 'value': 11}, {'id': 'KR', 'value': 40}, {'id': 'BG', 'value': 5}, {'id': 'SE', 'value': 20}, {'id': 'UA', 'value': 24}, {'id': 'CA', 'value': 12}, {'id': 'HK', 'value': 101}, {'id': 'CN', 'value': 37}, {'id': 'VN', 'value': 2}, {'id': 'LV', 'value': 18}, {'id': 'US', 'value': 18}, {'id': 'BR', 'value': 16}, {'id': 'MY', 'value': 7}, {'id': 'SG', 'value': 5}, {'id': 'GB', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'TW', 'value': 38}, {'id': 'AR', 'value': 2}, {'id': 'RO', 'value': 3}, {'id': 'BA', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'CL', 'value': 4}, {'id': 'AT', 'value': 1}, {'id': 'PK', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'PA', 'value': 6}, {'id': 'ES', 'value': 5}, {'id': 'NL', 'value': 1}, {'id': 'RU', 'value': 14}, {'id': 'VE', 'value': 7}, {'id': 'MK', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'IE', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'HR', 'value': 1}, {'id': 'NO', 'value': 2}, {'id': 'SI', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'IT', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

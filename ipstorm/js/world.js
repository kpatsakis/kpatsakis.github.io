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
polygonSeries.data = [{'id': 'HK', 'value': 102}, {'id': 'TW', 'value': 31}, {'id': 'CN', 'value': 32}, {'id': 'SE', 'value': 13}, {'id': 'UA', 'value': 16}, {'id': 'MY', 'value': 10}, {'id': 'CA', 'value': 12}, {'id': 'RU', 'value': 5}, {'id': 'KR', 'value': 55}, {'id': 'SG', 'value': 3}, {'id': 'IT', 'value': 2}, {'id': 'BA', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'BR', 'value': 16}, {'id': 'BZ', 'value': 2}, {'id': 'DE', 'value': 1}, {'id': 'PA', 'value': 3}, {'id': 'VE', 'value': 10}, {'id': 'ES', 'value': 7}, {'id': 'UZ', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'US', 'value': 15}, {'id': 'FR', 'value': 6}, {'id': 'LV', 'value': 2}, {'id': 'BG', 'value': 1}, {'id': 'PK', 'value': 1}, {'id': 'VN', 'value': 3}, {'id': 'DK', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'CL', 'value': 5}, {'id': 'MK', 'value': 1}, {'id': 'AT', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'NO', 'value': 1}, {'id': 'GB', 'value': 1}, {'id': 'AU', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

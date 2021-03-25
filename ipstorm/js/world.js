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
polygonSeries.data = [{'id': 'RU', 'value': 22}, {'id': 'KR', 'value': 155}, {'id': 'HK', 'value': 90}, {'id': 'US', 'value': 15}, {'id': 'NO', 'value': 3}, {'id': 'BR', 'value': 59}, {'id': 'CN', 'value': 56}, {'id': 'VE', 'value': 9}, {'id': 'TW', 'value': 27}, {'id': 'UA', 'value': 22}, {'id': 'SE', 'value': 12}, {'id': 'DE', 'value': 2}, {'id': 'PK', 'value': 2}, {'id': 'CA', 'value': 10}, {'id': 'PA', 'value': 6}, {'id': 'LV', 'value': 7}, {'id': 'VN', 'value': 3}, {'id': 'TH', 'value': 1}, {'id': 'MD', 'value': 2}, {'id': 'MY', 'value': 8}, {'id': 'BS', 'value': 1}, {'id': 'ES', 'value': 6}, {'id': 'GE', 'value': 1}, {'id': 'FR', 'value': 4}, {'id': 'AR', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'AO', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'HR', 'value': 1}, {'id': 'CO', 'value': 1}, {'id': 'BZ', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'CL', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

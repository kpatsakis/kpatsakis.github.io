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
polygonSeries.data = [{'id': 'BR', 'value': 24}, {'id': 'CN', 'value': 44}, {'id': 'ES', 'value': 5}, {'id': 'HK', 'value': 107}, {'id': 'TW', 'value': 41}, {'id': 'AU', 'value': 2}, {'id': 'KR', 'value': 178}, {'id': 'CA', 'value': 13}, {'id': 'SI', 'value': 1}, {'id': 'UA', 'value': 21}, {'id': 'LV', 'value': 8}, {'id': 'EG', 'value': 1}, {'id': 'RU', 'value': 15}, {'id': 'SE', 'value': 17}, {'id': 'VE', 'value': 13}, {'id': 'US', 'value': 24}, {'id': 'MY', 'value': 6}, {'id': 'FR', 'value': 6}, {'id': 'NO', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'SG', 'value': 4}, {'id': 'NL', 'value': 1}, {'id': 'CO', 'value': 2}, {'id': 'GE', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'BZ', 'value': 1}, {'id': 'CL', 'value': 2}, {'id': 'PA', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'VN', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'MD', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

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
polygonSeries.data = [{'id': 'HK', 'value': 126}, {'id': 'UA', 'value': 14}, {'id': 'RU', 'value': 10}, {'id': 'CN', 'value': 34}, {'id': 'CA', 'value': 12}, {'id': 'KR', 'value': 52}, {'id': 'MY', 'value': 7}, {'id': 'BZ', 'value': 2}, {'id': 'MD', 'value': 2}, {'id': 'PA', 'value': 2}, {'id': 'SE', 'value': 16}, {'id': 'TW', 'value': 38}, {'id': 'VE', 'value': 9}, {'id': 'IE', 'value': 3}, {'id': 'PK', 'value': 1}, {'id': 'CL', 'value': 3}, {'id': 'BA', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'US', 'value': 19}, {'id': 'IL', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'BR', 'value': 10}, {'id': 'VN', 'value': 6}, {'id': 'FR', 'value': 5}, {'id': 'GU', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'MM', 'value': 1}, {'id': 'SG', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'ES', 'value': 5}, {'id': 'MO', 'value': 2}, {'id': 'NL', 'value': 2}, {'id': 'BG', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'LV', 'value': 2}, {'id': 'IT', 'value': 1}, {'id': 'NO', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'SI', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

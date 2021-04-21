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
polygonSeries.data = [{'id': 'TW', 'value': 31}, {'id': 'US', 'value': 33}, {'id': 'HK', 'value': 107}, {'id': 'KR', 'value': 62}, {'id': 'CN', 'value': 46}, {'id': 'PA', 'value': 5}, {'id': 'BR', 'value': 19}, {'id': 'UA', 'value': 16}, {'id': 'DK', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'VE', 'value': 11}, {'id': 'IE', 'value': 2}, {'id': 'SE', 'value': 17}, {'id': 'FR', 'value': 7}, {'id': 'ES', 'value': 6}, {'id': 'RU', 'value': 19}, {'id': 'BZ', 'value': 2}, {'id': 'GE', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'LV', 'value': 2}, {'id': 'CA', 'value': 17}, {'id': 'VN', 'value': 2}, {'id': 'CL', 'value': 1}, {'id': 'DE', 'value': 2}, {'id': 'GB', 'value': 3}, {'id': 'ZA', 'value': 2}, {'id': 'SG', 'value': 4}, {'id': 'SA', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'MY', 'value': 7}, {'id': 'NL', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'SI', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'PT', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

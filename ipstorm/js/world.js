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
polygonSeries.data = [{'id': 'CN', 'value': 54}, {'id': 'BG', 'value': 2}, {'id': 'US', 'value': 20}, {'id': 'KR', 'value': 39}, {'id': 'HK', 'value': 117}, {'id': 'BR', 'value': 17}, {'id': 'TW', 'value': 30}, {'id': 'RU', 'value': 16}, {'id': 'MY', 'value': 6}, {'id': 'FR', 'value': 12}, {'id': 'UA', 'value': 20}, {'id': 'ES', 'value': 9}, {'id': 'ZA', 'value': 2}, {'id': 'SE', 'value': 16}, {'id': 'MO', 'value': 2}, {'id': 'CA', 'value': 16}, {'id': 'CW', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'DE', 'value': 4}, {'id': 'PA', 'value': 2}, {'id': 'VN', 'value': 3}, {'id': 'VE', 'value': 7}, {'id': 'SG', 'value': 2}, {'id': 'FI', 'value': 1}, {'id': 'LV', 'value': 3}, {'id': 'SI', 'value': 4}, {'id': 'MD', 'value': 1}, {'id': 'BS', 'value': 2}, {'id': 'BZ', 'value': 2}, {'id': 'CL', 'value': 3}, {'id': 'GE', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'JP', 'value': 2}, {'id': 'IE', 'value': 2}, {'id': 'MK', 'value': 1}, {'id': 'MX', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'KZ', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

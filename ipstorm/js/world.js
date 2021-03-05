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
polygonSeries.data = [{'id': 'HK', 'value': 170}, {'id': 'KR', 'value': 312}, {'id': 'BR', 'value': 48}, {'id': 'SE', 'value': 47}, {'id': 'TW', 'value': 49}, {'id': 'US', 'value': 28}, {'id': 'UA', 'value': 56}, {'id': 'RU', 'value': 33}, {'id': 'ES', 'value': 17}, {'id': 'CN', 'value': 94}, {'id': 'PL', 'value': 2}, {'id': 'NO', 'value': 8}, {'id': 'TR', 'value': 2}, {'id': 'CA', 'value': 23}, {'id': 'CL', 'value': 8}, {'id': 'AT', 'value': 1}, {'id': 'VE', 'value': 16}, {'id': 'PA', 'value': 5}, {'id': 'NL', 'value': 2}, {'id': 'BG', 'value': 7}, {'id': 'MY', 'value': 8}, {'id': 'BA', 'value': 3}, {'id': 'DE', 'value': 4}, {'id': 'CH', 'value': 1}, {'id': 'GB', 'value': 3}, {'id': 'JP', 'value': 4}, {'id': 'FR', 'value': 14}, {'id': 'LV', 'value': 12}, {'id': 'VN', 'value': 5}, {'id': 'EE', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'HU', 'value': 3}, {'id': 'IN', 'value': 1}, {'id': 'MO', 'value': 3}, {'id': 'MX', 'value': 2}, {'id': 'BZ', 'value': 2}, {'id': 'HN', 'value': 1}, {'id': 'SA', 'value': 2}, {'id': 'EC', 'value': 4}, {'id': 'BY', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'LT', 'value': 2}, {'id': 'SG', 'value': 6}, {'id': 'CO', 'value': 2}, {'id': 'ZA', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'AU', 'value': 2}, {'id': 'GH', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'AR', 'value': 1}, {'id': 'EG', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

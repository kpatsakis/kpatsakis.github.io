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
polygonSeries.data = [{'id': 'KR', 'value': 314}, {'id': 'BR', 'value': 43}, {'id': 'HK', 'value': 147}, {'id': 'SE', 'value': 45}, {'id': 'MY', 'value': 8}, {'id': 'PL', 'value': 2}, {'id': 'RU', 'value': 43}, {'id': 'GU', 'value': 1}, {'id': 'TW', 'value': 64}, {'id': 'CA', 'value': 16}, {'id': 'CL', 'value': 11}, {'id': 'LV', 'value': 17}, {'id': 'ES', 'value': 24}, {'id': 'EE', 'value': 1}, {'id': 'CN', 'value': 97}, {'id': 'BZ', 'value': 2}, {'id': 'UA', 'value': 42}, {'id': 'MA', 'value': 5}, {'id': 'AR', 'value': 2}, {'id': 'SI', 'value': 5}, {'id': 'SG', 'value': 7}, {'id': 'FR', 'value': 18}, {'id': 'VE', 'value': 21}, {'id': 'BD', 'value': 1}, {'id': 'DE', 'value': 2}, {'id': 'PA', 'value': 10}, {'id': 'TR', 'value': 4}, {'id': 'BE', 'value': 4}, {'id': 'PK', 'value': 1}, {'id': 'US', 'value': 23}, {'id': 'NL', 'value': 2}, {'id': 'MK', 'value': 2}, {'id': 'GB', 'value': 3}, {'id': 'MO', 'value': 5}, {'id': 'FI', 'value': 2}, {'id': 'BG', 'value': 7}, {'id': 'MT', 'value': 1}, {'id': 'NO', 'value': 7}, {'id': 'MX', 'value': 5}, {'id': 'CH', 'value': 1}, {'id': 'VN', 'value': 5}, {'id': 'IT', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'DO', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'CY', 'value': 1}, {'id': 'JP', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'DK', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'EC', 'value': 1}, {'id': 'SA', 'value': 1}, {'id': 'GR', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'CR', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'SR', 'value': 1}, {'id': 'RS', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

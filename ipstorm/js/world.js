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
polygonSeries.data = [{'id': 'ES', 'value': 12}, {'id': 'BR', 'value': 38}, {'id': 'HK', 'value': 116}, {'id': 'CA', 'value': 11}, {'id': 'CL', 'value': 9}, {'id': 'RU', 'value': 26}, {'id': 'KR', 'value': 123}, {'id': 'NL', 'value': 2}, {'id': 'CN', 'value': 40}, {'id': 'US', 'value': 22}, {'id': 'SE', 'value': 26}, {'id': 'TW', 'value': 48}, {'id': 'UA', 'value': 32}, {'id': 'MY', 'value': 8}, {'id': 'SI', 'value': 1}, {'id': 'VE', 'value': 13}, {'id': 'DE', 'value': 4}, {'id': 'FR', 'value': 9}, {'id': 'ZA', 'value': 1}, {'id': 'SG', 'value': 4}, {'id': 'EC', 'value': 4}, {'id': 'GU', 'value': 1}, {'id': 'CO', 'value': 2}, {'id': 'LV', 'value': 9}, {'id': 'JP', 'value': 4}, {'id': 'LT', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'VN', 'value': 3}, {'id': 'PK', 'value': 1}, {'id': 'NO', 'value': 3}, {'id': 'TR', 'value': 2}, {'id': 'MO', 'value': 4}, {'id': 'PE', 'value': 1}, {'id': 'PL', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'SN', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'TN', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'PA', 'value': 3}, {'id': 'IN', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'GB', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'CZ', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'CW', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

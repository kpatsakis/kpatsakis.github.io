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
polygonSeries.data = [{'id': 'VE', 'value': 22}, {'id': 'CN', 'value': 98}, {'id': 'RU', 'value': 48}, {'id': 'HK', 'value': 212}, {'id': 'KR', 'value': 300}, {'id': 'UA', 'value': 56}, {'id': 'SE', 'value': 49}, {'id': 'CL', 'value': 12}, {'id': 'TW', 'value': 85}, {'id': 'LV', 'value': 12}, {'id': 'CO', 'value': 3}, {'id': 'US', 'value': 34}, {'id': 'ES', 'value': 20}, {'id': 'NO', 'value': 9}, {'id': 'BR', 'value': 65}, {'id': 'CA', 'value': 26}, {'id': 'EC', 'value': 4}, {'id': 'JP', 'value': 6}, {'id': 'MY', 'value': 7}, {'id': 'HU', 'value': 1}, {'id': 'FR', 'value': 13}, {'id': 'MX', 'value': 4}, {'id': 'NL', 'value': 2}, {'id': 'MT', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'BD', 'value': 2}, {'id': 'GB', 'value': 1}, {'id': 'MA', 'value': 5}, {'id': 'MO', 'value': 5}, {'id': 'KW', 'value': 1}, {'id': 'SI', 'value': 4}, {'id': 'PA', 'value': 16}, {'id': 'PL', 'value': 3}, {'id': 'BG', 'value': 6}, {'id': 'VN', 'value': 8}, {'id': 'SG', 'value': 7}, {'id': 'BZ', 'value': 2}, {'id': 'LT', 'value': 2}, {'id': 'ZA', 'value': 1}, {'id': 'AU', 'value': 2}, {'id': 'IE', 'value': 4}, {'id': 'GE', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'IT', 'value': 2}, {'id': 'DE', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'SA', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'PH', 'value': 1}, {'id': 'SR', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'NA', 'value': 1}, {'id': 'CR', 'value': 1}, {'id': 'IN', 'value': 2}, {'id': 'UY', 'value': 2}, {'id': 'GR', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'TR', 'value': 3}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

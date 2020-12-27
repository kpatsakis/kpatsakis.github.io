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
polygonSeries.data = [{'id': 'SE', 'value': 65}, {'id': 'KR', 'value': 233}, {'id': 'HK', 'value': 454}, {'id': 'US', 'value': 72}, {'id': 'RU', 'value': 80}, {'id': 'UA', 'value': 78}, {'id': 'BR', 'value': 56}, {'id': 'NO', 'value': 14}, {'id': 'PA', 'value': 20}, {'id': 'CN', 'value': 78}, {'id': 'MY', 'value': 13}, {'id': 'TW', 'value': 123}, {'id': 'VE', 'value': 47}, {'id': 'CA', 'value': 40}, {'id': 'KZ', 'value': 22}, {'id': 'AZ', 'value': 2}, {'id': 'BG', 'value': 11}, {'id': 'CL', 'value': 12}, {'id': 'AU', 'value': 4}, {'id': 'EC', 'value': 6}, {'id': 'CY', 'value': 4}, {'id': 'IE', 'value': 3}, {'id': 'VN', 'value': 18}, {'id': 'SG', 'value': 19}, {'id': 'PT', 'value': 5}, {'id': 'UY', 'value': 29}, {'id': 'FR', 'value': 30}, {'id': 'TR', 'value': 4}, {'id': 'CH', 'value': 2}, {'id': 'SI', 'value': 5}, {'id': 'IT', 'value': 2}, {'id': 'LV', 'value': 14}, {'id': 'DK', 'value': 4}, {'id': 'MO', 'value': 6}, {'id': 'ES', 'value': 14}, {'id': 'HN', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'BY', 'value': 2}, {'id': 'MX', 'value': 3}, {'id': 'DE', 'value': 10}, {'id': 'GB', 'value': 4}, {'id': 'PK', 'value': 3}, {'id': 'LT', 'value': 5}, {'id': 'GE', 'value': 4}, {'id': 'RS', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'PL', 'value': 3}, {'id': 'MD', 'value': 3}, {'id': 'JP', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'CO', 'value': 2}, {'id': 'PY', 'value': 1}, {'id': 'CW', 'value': 2}, {'id': 'RO', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'PR', 'value': 1}, {'id': 'MT', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

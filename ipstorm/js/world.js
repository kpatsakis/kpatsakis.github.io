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
polygonSeries.data = [{'id': 'ES', 'value': 100}, {'id': 'FR', 'value': 23}, {'id': 'CN', 'value': 163}, {'id': 'HK', 'value': 436}, {'id': 'MD', 'value': 3}, {'id': 'SG', 'value': 27}, {'id': 'BG', 'value': 8}, {'id': 'UA', 'value': 101}, {'id': 'CA', 'value': 57}, {'id': 'TW', 'value': 165}, {'id': 'CY', 'value': 10}, {'id': 'KR', 'value': 272}, {'id': 'BA', 'value': 1}, {'id': 'BR', 'value': 106}, {'id': 'US', 'value': 73}, {'id': 'DE', 'value': 32}, {'id': 'SE', 'value': 104}, {'id': 'SA', 'value': 2}, {'id': 'RU', 'value': 93}, {'id': 'VE', 'value': 35}, {'id': 'LV', 'value': 21}, {'id': 'MT', 'value': 1}, {'id': 'PA', 'value': 30}, {'id': 'GE', 'value': 5}, {'id': 'LT', 'value': 4}, {'id': 'IL', 'value': 2}, {'id': 'TH', 'value': 4}, {'id': 'BY', 'value': 1}, {'id': 'MO', 'value': 12}, {'id': 'AZ', 'value': 5}, {'id': 'IN', 'value': 1}, {'id': 'NO', 'value': 12}, {'id': 'CL', 'value': 12}, {'id': 'PL', 'value': 4}, {'id': 'GB', 'value': 7}, {'id': 'CH', 'value': 4}, {'id': 'AR', 'value': 4}, {'id': 'MX', 'value': 6}, {'id': 'CO', 'value': 3}, {'id': 'AU', 'value': 5}, {'id': 'HU', 'value': 2}, {'id': 'BE', 'value': 2}, {'id': 'UY', 'value': 2}, {'id': 'RS', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'SI', 'value': 16}, {'id': 'PK', 'value': 2}, {'id': 'MY', 'value': 15}, {'id': 'CW', 'value': 2}, {'id': 'MK', 'value': 1}, {'id': 'VN', 'value': 16}, {'id': 'HN', 'value': 1}, {'id': 'KZ', 'value': 3}, {'id': 'EC', 'value': 11}, {'id': 'NL', 'value': 1}, {'id': 'DK', 'value': 3}, {'id': 'TR', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'CZ', 'value': 1}, {'id': 'NA', 'value': 2}, {'id': 'ZA', 'value': 2}, {'id': 'PT', 'value': 2}, {'id': 'BD', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'IT', 'value': 4}, {'id': 'LA', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'MA', 'value': 1}, {'id': 'SN', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

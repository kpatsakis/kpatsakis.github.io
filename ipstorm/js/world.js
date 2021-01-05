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
polygonSeries.data = [{'id': 'BR', 'value': 103}, {'id': 'RU', 'value': 81}, {'id': 'KR', 'value': 248}, {'id': 'SE', 'value': 95}, {'id': 'EC', 'value': 11}, {'id': 'CZ', 'value': 2}, {'id': 'ES', 'value': 75}, {'id': 'CN', 'value': 125}, {'id': 'HK', 'value': 415}, {'id': 'SI', 'value': 11}, {'id': 'TW', 'value': 154}, {'id': 'FR', 'value': 28}, {'id': 'UA', 'value': 100}, {'id': 'CA', 'value': 51}, {'id': 'US', 'value': 86}, {'id': 'PA', 'value': 29}, {'id': 'CL', 'value': 12}, {'id': 'MX', 'value': 5}, {'id': 'BG', 'value': 15}, {'id': 'SG', 'value': 24}, {'id': 'DK', 'value': 2}, {'id': 'NO', 'value': 11}, {'id': 'TR', 'value': 1}, {'id': 'VE', 'value': 32}, {'id': 'BE', 'value': 3}, {'id': 'IT', 'value': 2}, {'id': 'CY', 'value': 6}, {'id': 'MY', 'value': 19}, {'id': 'MD', 'value': 5}, {'id': 'LV', 'value': 17}, {'id': 'KZ', 'value': 4}, {'id': 'LT', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'PL', 'value': 4}, {'id': 'AU', 'value': 4}, {'id': 'DE', 'value': 8}, {'id': 'VN', 'value': 21}, {'id': 'CW', 'value': 2}, {'id': 'AR', 'value': 5}, {'id': 'NL', 'value': 1}, {'id': 'MT', 'value': 1}, {'id': 'BY', 'value': 2}, {'id': 'PK', 'value': 2}, {'id': 'ZA', 'value': 4}, {'id': 'HN', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'MO', 'value': 7}, {'id': 'PT', 'value': 4}, {'id': 'IL', 'value': 2}, {'id': 'GB', 'value': 9}, {'id': 'PY', 'value': 1}, {'id': 'JP', 'value': 2}, {'id': 'AZ', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'GE', 'value': 5}, {'id': 'IN', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'GR', 'value': 1}, {'id': 'LA', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'HU', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'AE', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

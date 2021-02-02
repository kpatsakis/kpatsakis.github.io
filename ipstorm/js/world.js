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
polygonSeries.data = [{'id': 'FR', 'value': 21}, {'id': 'TW', 'value': 97}, {'id': 'HK', 'value': 229}, {'id': 'BR', 'value': 49}, {'id': 'BG', 'value': 9}, {'id': 'CA', 'value': 44}, {'id': 'KR', 'value': 245}, {'id': 'MY', 'value': 8}, {'id': 'TR', 'value': 1}, {'id': 'CN', 'value': 106}, {'id': 'NO', 'value': 4}, {'id': 'UA', 'value': 66}, {'id': 'US', 'value': 53}, {'id': 'SE', 'value': 48}, {'id': 'LV', 'value': 20}, {'id': 'ES', 'value': 21}, {'id': 'VE', 'value': 27}, {'id': 'DO', 'value': 1}, {'id': 'RU', 'value': 49}, {'id': 'CL', 'value': 12}, {'id': 'GB', 'value': 8}, {'id': 'MD', 'value': 4}, {'id': 'MX', 'value': 2}, {'id': 'BD', 'value': 2}, {'id': 'CY', 'value': 1}, {'id': 'EC', 'value': 6}, {'id': 'PT', 'value': 5}, {'id': 'BE', 'value': 3}, {'id': 'MO', 'value': 7}, {'id': 'ZA', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'PA', 'value': 12}, {'id': 'CH', 'value': 3}, {'id': 'PK', 'value': 3}, {'id': 'SG', 'value': 8}, {'id': 'IL', 'value': 3}, {'id': 'VN', 'value': 9}, {'id': 'IT', 'value': 3}, {'id': 'AU', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'RO', 'value': 3}, {'id': 'IE', 'value': 2}, {'id': 'CR', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'TT', 'value': 1}, {'id': 'IN', 'value': 1}, {'id': 'PL', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'GR', 'value': 1}, {'id': 'GE', 'value': 3}, {'id': 'LT', 'value': 2}, {'id': 'AR', 'value': 1}, {'id': 'PY', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'DE', 'value': 2}, {'id': 'CZ', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'MA', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

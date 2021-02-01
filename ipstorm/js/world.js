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
polygonSeries.data = [{'id': 'RU', 'value': 49}, {'id': 'TW', 'value': 177}, {'id': 'KR', 'value': 290}, {'id': 'UA', 'value': 95}, {'id': 'HK', 'value': 253}, {'id': 'PA', 'value': 17}, {'id': 'BR', 'value': 40}, {'id': 'CA', 'value': 48}, {'id': 'CN', 'value': 90}, {'id': 'LV', 'value': 25}, {'id': 'SE', 'value': 53}, {'id': 'CH', 'value': 2}, {'id': 'VE', 'value': 33}, {'id': 'IN', 'value': 3}, {'id': 'CY', 'value': 3}, {'id': 'BE', 'value': 4}, {'id': 'FR', 'value': 28}, {'id': 'US', 'value': 43}, {'id': 'ES', 'value': 25}, {'id': 'MY', 'value': 12}, {'id': 'GB', 'value': 4}, {'id': 'MO', 'value': 7}, {'id': 'AM', 'value': 2}, {'id': 'BG', 'value': 10}, {'id': 'DK', 'value': 2}, {'id': 'AU', 'value': 2}, {'id': 'SI', 'value': 4}, {'id': 'GU', 'value': 1}, {'id': 'EC', 'value': 8}, {'id': 'SG', 'value': 16}, {'id': 'IE', 'value': 1}, {'id': 'BD', 'value': 3}, {'id': 'VN', 'value': 10}, {'id': 'RO', 'value': 2}, {'id': 'ID', 'value': 3}, {'id': 'NO', 'value': 12}, {'id': 'PL', 'value': 3}, {'id': 'HU', 'value': 1}, {'id': 'PT', 'value': 5}, {'id': 'JM', 'value': 1}, {'id': 'PY', 'value': 3}, {'id': 'GE', 'value': 2}, {'id': 'EG', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'ZA', 'value': 3}, {'id': 'JP', 'value': 2}, {'id': 'CL', 'value': 8}, {'id': 'IT', 'value': 2}, {'id': 'IL', 'value': 3}, {'id': 'NL', 'value': 1}, {'id': 'GR', 'value': 1}, {'id': 'BY', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'MD', 'value': 3}, {'id': 'NG', 'value': 1}, {'id': 'AT', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'KW', 'value': 1}, {'id': 'TR', 'value': 1}, {'id': 'AR', 'value': 2}, {'id': 'DE', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'MA', 'value': 1}, {'id': 'PK', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

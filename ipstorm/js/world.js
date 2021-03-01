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
polygonSeries.data = [{'id': 'BR', 'value': 66}, {'id': 'KR', 'value': 317}, {'id': 'HK', 'value': 148}, {'id': 'CN', 'value': 85}, {'id': 'SE', 'value': 38}, {'id': 'TW', 'value': 58}, {'id': 'LV', 'value': 17}, {'id': 'FR', 'value': 16}, {'id': 'US', 'value': 30}, {'id': 'GB', 'value': 5}, {'id': 'PA', 'value': 12}, {'id': 'ES', 'value': 18}, {'id': 'SG', 'value': 7}, {'id': 'UA', 'value': 51}, {'id': 'RU', 'value': 43}, {'id': 'MA', 'value': 10}, {'id': 'CL', 'value': 12}, {'id': 'JP', 'value': 3}, {'id': 'TR', 'value': 3}, {'id': 'CA', 'value': 15}, {'id': 'VE', 'value': 19}, {'id': 'MK', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'IE', 'value': 4}, {'id': 'FI', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'PL', 'value': 1}, {'id': 'MO', 'value': 3}, {'id': 'SI', 'value': 5}, {'id': 'BG', 'value': 3}, {'id': 'MX', 'value': 2}, {'id': 'RO', 'value': 1}, {'id': 'NO', 'value': 5}, {'id': 'BA', 'value': 1}, {'id': 'CY', 'value': 1}, {'id': 'BD', 'value': 2}, {'id': 'CO', 'value': 2}, {'id': 'NL', 'value': 2}, {'id': 'MY', 'value': 8}, {'id': 'PH', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'GR', 'value': 2}, {'id': 'AU', 'value': 1}, {'id': 'VN', 'value': 5}, {'id': 'BS', 'value': 1}, {'id': 'DE', 'value': 2}, {'id': 'IT', 'value': 1}, {'id': 'AO', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'SR', 'value': 1}, {'id': 'PK', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'UY', 'value': 1}, {'id': 'IN', 'value': 2}, {'id': 'BZ', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

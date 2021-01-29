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
polygonSeries.data = [{'id': 'CN', 'value': 73}, {'id': 'PA', 'value': 13}, {'id': 'HK', 'value': 183}, {'id': 'KR', 'value': 239}, {'id': 'BR', 'value': 43}, {'id': 'US', 'value': 40}, {'id': 'LV', 'value': 17}, {'id': 'TW', 'value': 71}, {'id': 'RU', 'value': 38}, {'id': 'VN', 'value': 9}, {'id': 'NO', 'value': 4}, {'id': 'ZA', 'value': 2}, {'id': 'CL', 'value': 5}, {'id': 'GE', 'value': 3}, {'id': 'UA', 'value': 44}, {'id': 'MY', 'value': 9}, {'id': 'CA', 'value': 25}, {'id': 'IT', 'value': 4}, {'id': 'SE', 'value': 42}, {'id': 'JP', 'value': 1}, {'id': 'FR', 'value': 20}, {'id': 'SG', 'value': 7}, {'id': 'DE', 'value': 4}, {'id': 'RO', 'value': 2}, {'id': 'NL', 'value': 4}, {'id': 'IE', 'value': 1}, {'id': 'VE', 'value': 15}, {'id': 'AU', 'value': 2}, {'id': 'ES', 'value': 17}, {'id': 'SA', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'EC', 'value': 4}, {'id': 'AT', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'CO', 'value': 1}, {'id': 'MD', 'value': 2}, {'id': 'KZ', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'AR', 'value': 1}, {'id': 'BG', 'value': 4}, {'id': 'MX', 'value': 2}, {'id': 'PT', 'value': 2}, {'id': 'CY', 'value': 2}, {'id': 'DO', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'DK', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'GB', 'value': 2}, {'id': 'GR', 'value': 1}, {'id': 'LA', 'value': 1}, {'id': 'MK', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

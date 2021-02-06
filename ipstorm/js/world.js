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
polygonSeries.data = [{'id': 'CN', 'value': 141}, {'id': 'TW', 'value': 127}, {'id': 'KR', 'value': 244}, {'id': 'SE', 'value': 47}, {'id': 'HK', 'value': 182}, {'id': 'RU', 'value': 59}, {'id': 'US', 'value': 38}, {'id': 'VE', 'value': 21}, {'id': 'BG', 'value': 7}, {'id': 'CL', 'value': 11}, {'id': 'PA', 'value': 12}, {'id': 'CA', 'value': 25}, {'id': 'DK', 'value': 2}, {'id': 'FR', 'value': 18}, {'id': 'UA', 'value': 56}, {'id': 'SG', 'value': 8}, {'id': 'BR', 'value': 51}, {'id': 'MY', 'value': 7}, {'id': 'SI', 'value': 3}, {'id': 'ES', 'value': 21}, {'id': 'IT', 'value': 4}, {'id': 'LV', 'value': 17}, {'id': 'IN', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'MD', 'value': 3}, {'id': 'VN', 'value': 7}, {'id': 'LT', 'value': 2}, {'id': 'NO', 'value': 9}, {'id': 'JP', 'value': 1}, {'id': 'MX', 'value': 2}, {'id': 'ZA', 'value': 3}, {'id': 'IL', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'LB', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'RO', 'value': 3}, {'id': 'EC', 'value': 3}, {'id': 'PT', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'MO', 'value': 4}, {'id': 'GB', 'value': 2}, {'id': 'TR', 'value': 1}, {'id': 'KW', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'CZ', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'NG', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'SN', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'CO', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'CR', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

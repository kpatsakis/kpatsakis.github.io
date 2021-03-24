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
polygonSeries.data = [{'id': 'KR', 'value': 164}, {'id': 'BR', 'value': 21}, {'id': 'TW', 'value': 35}, {'id': 'ES', 'value': 9}, {'id': 'CN', 'value': 49}, {'id': 'CA', 'value': 8}, {'id': 'HK', 'value': 89}, {'id': 'SE', 'value': 17}, {'id': 'US', 'value': 22}, {'id': 'GB', 'value': 3}, {'id': 'PA', 'value': 4}, {'id': 'VE', 'value': 13}, {'id': 'RU', 'value': 13}, {'id': 'LV', 'value': 9}, {'id': 'MY', 'value': 6}, {'id': 'MO', 'value': 2}, {'id': 'BZ', 'value': 1}, {'id': 'GE', 'value': 3}, {'id': 'UA', 'value': 15}, {'id': 'VN', 'value': 3}, {'id': 'NO', 'value': 3}, {'id': 'CL', 'value': 3}, {'id': 'PL', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'BG', 'value': 3}, {'id': 'EC', 'value': 2}, {'id': 'DE', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'FR', 'value': 6}, {'id': 'IT', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'IE', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'GU', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

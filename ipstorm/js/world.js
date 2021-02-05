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
polygonSeries.data = [{'id': 'HK', 'value': 197}, {'id': 'BR', 'value': 54}, {'id': 'SE', 'value': 42}, {'id': 'CN', 'value': 84}, {'id': 'LV', 'value': 18}, {'id': 'RU', 'value': 38}, {'id': 'UA', 'value': 50}, {'id': 'EC', 'value': 5}, {'id': 'TW', 'value': 101}, {'id': 'CA', 'value': 30}, {'id': 'KR', 'value': 248}, {'id': 'VE', 'value': 17}, {'id': 'US', 'value': 40}, {'id': 'VN', 'value': 9}, {'id': 'LT', 'value': 4}, {'id': 'ES', 'value': 26}, {'id': 'SG', 'value': 6}, {'id': 'IT', 'value': 2}, {'id': 'HU', 'value': 1}, {'id': 'NO', 'value': 6}, {'id': 'BE', 'value': 2}, {'id': 'PA', 'value': 10}, {'id': 'LK', 'value': 1}, {'id': 'MO', 'value': 6}, {'id': 'FR', 'value': 18}, {'id': 'PT', 'value': 3}, {'id': 'PL', 'value': 1}, {'id': 'RO', 'value': 3}, {'id': 'CZ', 'value': 1}, {'id': 'DK', 'value': 4}, {'id': 'MY', 'value': 7}, {'id': 'AZ', 'value': 1}, {'id': 'BG', 'value': 5}, {'id': 'KZ', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'ID', 'value': 1}, {'id': 'SI', 'value': 3}, {'id': 'DE', 'value': 1}, {'id': 'MD', 'value': 2}, {'id': 'JP', 'value': 1}, {'id': 'MX', 'value': 3}, {'id': 'BA', 'value': 1}, {'id': 'DZ', 'value': 2}, {'id': 'LB', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'AR', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'CL', 'value': 3}, {'id': 'PK', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'TR', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

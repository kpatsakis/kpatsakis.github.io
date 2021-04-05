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
polygonSeries.data = [{'id': 'HK', 'value': 106}, {'id': 'KR', 'value': 122}, {'id': 'TW', 'value': 24}, {'id': 'AR', 'value': 1}, {'id': 'IE', 'value': 2}, {'id': 'CA', 'value': 8}, {'id': 'VE', 'value': 8}, {'id': 'RU', 'value': 9}, {'id': 'CN', 'value': 43}, {'id': 'VN', 'value': 4}, {'id': 'GE', 'value': 2}, {'id': 'US', 'value': 16}, {'id': 'UA', 'value': 15}, {'id': 'EC', 'value': 2}, {'id': 'SE', 'value': 14}, {'id': 'PA', 'value': 3}, {'id': 'FR', 'value': 5}, {'id': 'BZ', 'value': 2}, {'id': 'MY', 'value': 6}, {'id': 'PL', 'value': 1}, {'id': 'BR', 'value': 14}, {'id': 'SI', 'value': 2}, {'id': 'BG', 'value': 3}, {'id': 'ZA', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'ID', 'value': 1}, {'id': 'LV', 'value': 6}, {'id': 'ES', 'value': 2}, {'id': 'SG', 'value': 2}, {'id': 'IT', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'MD', 'value': 1}, {'id': 'CZ', 'value': 1}, {'id': 'GU', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

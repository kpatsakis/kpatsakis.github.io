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
polygonSeries.data = [{'id': 'BR', 'value': 31}, {'id': 'IL', 'value': 1}, {'id': 'KR', 'value': 156}, {'id': 'SE', 'value': 17}, {'id': 'US', 'value': 21}, {'id': 'RU', 'value': 16}, {'id': 'MD', 'value': 15}, {'id': 'CN', 'value': 58}, {'id': 'PK', 'value': 2}, {'id': 'TW', 'value': 68}, {'id': 'HK', 'value': 111}, {'id': 'ID', 'value': 1}, {'id': 'SI', 'value': 1}, {'id': 'FR', 'value': 6}, {'id': 'UA', 'value': 21}, {'id': 'CA', 'value': 14}, {'id': 'BS', 'value': 1}, {'id': 'CO', 'value': 1}, {'id': 'MY', 'value': 9}, {'id': 'LV', 'value': 4}, {'id': 'ES', 'value': 5}, {'id': 'DE', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'HU', 'value': 1}, {'id': 'VN', 'value': 6}, {'id': 'AR', 'value': 1}, {'id': 'AU', 'value': 2}, {'id': 'JP', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'BG', 'value': 2}, {'id': 'VE', 'value': 7}, {'id': 'ZA', 'value': 2}, {'id': 'GE', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'PA', 'value': 3}, {'id': 'CL', 'value': 3}, {'id': 'NL', 'value': 1}, {'id': 'SG', 'value': 2}, {'id': 'EC', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

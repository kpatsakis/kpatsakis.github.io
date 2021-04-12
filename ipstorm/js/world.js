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
polygonSeries.data = [{'id': 'HK', 'value': 111}, {'id': 'TR', 'value': 2}, {'id': 'CN', 'value': 43}, {'id': 'KR', 'value': 46}, {'id': 'TW', 'value': 40}, {'id': 'PA', 'value': 10}, {'id': 'BR', 'value': 16}, {'id': 'RU', 'value': 13}, {'id': 'US', 'value': 16}, {'id': 'SE', 'value': 13}, {'id': 'BE', 'value': 2}, {'id': 'JP', 'value': 2}, {'id': 'VE', 'value': 12}, {'id': 'BZ', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'ES', 'value': 10}, {'id': 'NO', 'value': 2}, {'id': 'PT', 'value': 1}, {'id': 'UA', 'value': 17}, {'id': 'FR', 'value': 6}, {'id': 'AT', 'value': 2}, {'id': 'IE', 'value': 1}, {'id': 'MY', 'value': 6}, {'id': 'BG', 'value': 4}, {'id': 'VN', 'value': 4}, {'id': 'GE', 'value': 2}, {'id': 'SI', 'value': 2}, {'id': 'CL', 'value': 2}, {'id': 'BA', 'value': 1}, {'id': 'GH', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'DE', 'value': 1}, {'id': 'LV', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'CA', 'value': 4}, {'id': 'BS', 'value': 2}, {'id': 'PK', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'IT', 'value': 2}, {'id': 'AR', 'value': 1}, {'id': 'SG', 'value': 2}, {'id': 'LT', 'value': 2}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

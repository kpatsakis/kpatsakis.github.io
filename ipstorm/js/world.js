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
polygonSeries.data = [{'id': 'CW', 'value': 1}, {'id': 'CN', 'value': 43}, {'id': 'HK', 'value': 97}, {'id': 'KR', 'value': 43}, {'id': 'TW', 'value': 44}, {'id': 'AT', 'value': 1}, {'id': 'BR', 'value': 11}, {'id': 'ES', 'value': 7}, {'id': 'VE', 'value': 12}, {'id': 'US', 'value': 18}, {'id': 'DE', 'value': 2}, {'id': 'UA', 'value': 12}, {'id': 'LV', 'value': 7}, {'id': 'RU', 'value': 15}, {'id': 'SG', 'value': 3}, {'id': 'MY', 'value': 6}, {'id': 'CL', 'value': 10}, {'id': 'SE', 'value': 14}, {'id': 'IT', 'value': 4}, {'id': 'EC', 'value': 3}, {'id': 'BZ', 'value': 1}, {'id': 'FR', 'value': 9}, {'id': 'AU', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'NO', 'value': 2}, {'id': 'CA', 'value': 7}, {'id': 'NL', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'PA', 'value': 5}, {'id': 'ZA', 'value': 7}, {'id': 'GE', 'value': 1}, {'id': 'BG', 'value': 1}, {'id': 'TH', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'LT', 'value': 1}, {'id': 'BE', 'value': 2}, {'id': 'MX', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'VN', 'value': 2}, {'id': 'BA', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

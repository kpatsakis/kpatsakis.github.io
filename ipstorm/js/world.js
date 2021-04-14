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
polygonSeries.data = [{'id': 'VE', 'value': 6}, {'id': 'US', 'value': 16}, {'id': 'UA', 'value': 18}, {'id': 'KR', 'value': 43}, {'id': 'BR', 'value': 8}, {'id': 'HK', 'value': 96}, {'id': 'CN', 'value': 43}, {'id': 'SE', 'value': 15}, {'id': 'CA', 'value': 11}, {'id': 'TW', 'value': 44}, {'id': 'AU', 'value': 1}, {'id': 'VN', 'value': 2}, {'id': 'NL', 'value': 1}, {'id': 'LV', 'value': 3}, {'id': 'ES', 'value': 5}, {'id': 'MK', 'value': 1}, {'id': 'BG', 'value': 4}, {'id': 'HU', 'value': 1}, {'id': 'FR', 'value': 7}, {'id': 'RU', 'value': 13}, {'id': 'MD', 'value': 2}, {'id': 'BE', 'value': 2}, {'id': 'MY', 'value': 6}, {'id': 'LT', 'value': 2}, {'id': 'CL', 'value': 2}, {'id': 'IT', 'value': 1}, {'id': 'BZ', 'value': 1}, {'id': 'PA', 'value': 2}, {'id': 'TH', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'JP', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'AR', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'AT', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'GB', 'value': 1}, {'id': 'SG', 'value': 1}, {'id': 'EC', 'value': 1}, {'id': 'GE', 'value': 1}, {'id': 'ID', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

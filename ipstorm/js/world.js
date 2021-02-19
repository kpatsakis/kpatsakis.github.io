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
polygonSeries.data = [{'id': 'SE', 'value': 51}, {'id': 'LV', 'value': 13}, {'id': 'CN', 'value': 66}, {'id': 'RU', 'value': 40}, {'id': 'TW', 'value': 111}, {'id': 'HK', 'value': 165}, {'id': 'VN', 'value': 9}, {'id': 'KR', 'value': 108}, {'id': 'BG', 'value': 5}, {'id': 'PL', 'value': 1}, {'id': 'UA', 'value': 59}, {'id': 'FR', 'value': 15}, {'id': 'CH', 'value': 3}, {'id': 'BR', 'value': 36}, {'id': 'MY', 'value': 9}, {'id': 'MO', 'value': 8}, {'id': 'CA', 'value': 13}, {'id': 'VE', 'value': 16}, {'id': 'US', 'value': 23}, {'id': 'CL', 'value': 10}, {'id': 'ID', 'value': 2}, {'id': 'DK', 'value': 1}, {'id': 'ES', 'value': 18}, {'id': 'IL', 'value': 3}, {'id': 'TR', 'value': 2}, {'id': 'EG', 'value': 2}, {'id': 'SG', 'value': 4}, {'id': 'LT', 'value': 3}, {'id': 'SI', 'value': 3}, {'id': 'DE', 'value': 4}, {'id': 'HU', 'value': 2}, {'id': 'IN', 'value': 4}, {'id': 'JP', 'value': 4}, {'id': 'MK', 'value': 1}, {'id': 'AO', 'value': 1}, {'id': 'AT', 'value': 3}, {'id': 'NO', 'value': 5}, {'id': 'IT', 'value': 2}, {'id': 'BZ', 'value': 2}, {'id': 'PA', 'value': 6}, {'id': 'UZ', 'value': 3}, {'id': 'MA', 'value': 2}, {'id': 'RO', 'value': 1}, {'id': 'MD', 'value': 3}, {'id': 'EC', 'value': 3}, {'id': 'MT', 'value': 1}, {'id': 'MX', 'value': 1}, {'id': 'RS', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'BY', 'value': 2}, {'id': 'GU', 'value': 1}, {'id': 'BE', 'value': 1}, {'id': 'AU', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'IR', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

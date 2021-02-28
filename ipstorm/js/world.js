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
polygonSeries.data = [{'id': 'US', 'value': 27}, {'id': 'TW', 'value': 62}, {'id': 'KR', 'value': 270}, {'id': 'MO', 'value': 3}, {'id': 'CN', 'value': 93}, {'id': 'RU', 'value': 53}, {'id': 'HK', 'value': 163}, {'id': 'CO', 'value': 4}, {'id': 'SE', 'value': 49}, {'id': 'VE', 'value': 14}, {'id': 'PA', 'value': 11}, {'id': 'UA', 'value': 42}, {'id': 'IE', 'value': 4}, {'id': 'IL', 'value': 1}, {'id': 'ES', 'value': 18}, {'id': 'TR', 'value': 5}, {'id': 'BR', 'value': 60}, {'id': 'BG', 'value': 6}, {'id': 'CA', 'value': 23}, {'id': 'PH', 'value': 1}, {'id': 'FR', 'value': 15}, {'id': 'KW', 'value': 1}, {'id': 'LV', 'value': 12}, {'id': 'IR', 'value': 1}, {'id': 'SG', 'value': 7}, {'id': 'MX', 'value': 5}, {'id': 'CL', 'value': 12}, {'id': 'IN', 'value': 4}, {'id': 'GE', 'value': 2}, {'id': 'TH', 'value': 1}, {'id': 'NO', 'value': 3}, {'id': 'BS', 'value': 1}, {'id': 'JP', 'value': 5}, {'id': 'MY', 'value': 8}, {'id': 'AU', 'value': 3}, {'id': 'EC', 'value': 3}, {'id': 'NL', 'value': 3}, {'id': 'SI', 'value': 4}, {'id': 'LT', 'value': 2}, {'id': 'VN', 'value': 12}, {'id': 'GB', 'value': 3}, {'id': 'ZA', 'value': 1}, {'id': 'BE', 'value': 1}, {'id': 'PL', 'value': 3}, {'id': 'GR', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'SA', 'value': 2}, {'id': 'IT', 'value': 2}, {'id': 'HR', 'value': 1}, {'id': 'PT', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'AM', 'value': 2}, {'id': 'DE', 'value': 2}, {'id': 'HU', 'value': 2}, {'id': 'CH', 'value': 1}, {'id': 'BZ', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'KZ', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'RS', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

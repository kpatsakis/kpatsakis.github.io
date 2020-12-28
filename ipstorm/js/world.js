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
polygonSeries.data = [{'id': 'SE', 'value': 64}, {'id': 'HK', 'value': 387}, {'id': 'RU', 'value': 49}, {'id': 'MX', 'value': 4}, {'id': 'KR', 'value': 189}, {'id': 'FR', 'value': 28}, {'id': 'CA', 'value': 53}, {'id': 'VE', 'value': 27}, {'id': 'UA', 'value': 71}, {'id': 'PK', 'value': 2}, {'id': 'CN', 'value': 72}, {'id': 'MT', 'value': 1}, {'id': 'PA', 'value': 35}, {'id': 'CL', 'value': 10}, {'id': 'BR', 'value': 64}, {'id': 'MY', 'value': 14}, {'id': 'GB', 'value': 5}, {'id': 'NL', 'value': 1}, {'id': 'TW', 'value': 146}, {'id': 'KZ', 'value': 21}, {'id': 'LV', 'value': 8}, {'id': 'ES', 'value': 23}, {'id': 'BE', 'value': 1}, {'id': 'US', 'value': 54}, {'id': 'FI', 'value': 1}, {'id': 'VN', 'value': 24}, {'id': 'UY', 'value': 30}, {'id': 'DE', 'value': 2}, {'id': 'EC', 'value': 7}, {'id': 'PR', 'value': 1}, {'id': 'SG', 'value': 17}, {'id': 'NO', 'value': 11}, {'id': 'AR', 'value': 1}, {'id': 'ZA', 'value': 1}, {'id': 'LT', 'value': 5}, {'id': 'AU', 'value': 4}, {'id': 'MO', 'value': 9}, {'id': 'CW', 'value': 1}, {'id': 'MD', 'value': 4}, {'id': 'SI', 'value': 3}, {'id': 'BG', 'value': 10}, {'id': 'PL', 'value': 3}, {'id': 'RO', 'value': 1}, {'id': 'BO', 'value': 1}, {'id': 'IE', 'value': 6}, {'id': 'CO', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'RE', 'value': 1}, {'id': 'CI', 'value': 1}, {'id': 'PT', 'value': 2}, {'id': 'UZ', 'value': 1}, {'id': 'DK', 'value': 3}, {'id': 'JP', 'value': 1}, {'id': 'CY', 'value': 7}, {'id': 'TH', 'value': 1}, {'id': 'IN', 'value': 2}, {'id': 'LU', 'value': 1}, {'id': 'GE', 'value': 2}, {'id': 'BS', 'value': 1}, {'id': 'GU', 'value': 1}, {'id': 'PY', 'value': 3}, {'id': 'NA', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'LC', 'value': 1}, {'id': 'AW', 'value': 1}, {'id': 'CH', 'value': 1}, {'id': 'AT', 'value': 1}, {'id': 'HN', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

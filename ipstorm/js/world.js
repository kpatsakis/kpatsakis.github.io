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
polygonSeries.data = [{'id': 'HK', 'value': 141}, {'id': 'MY', 'value': 9}, {'id': 'SG', 'value': 3}, {'id': 'KR', 'value': 304}, {'id': 'CN', 'value': 93}, {'id': 'FR', 'value': 16}, {'id': 'TW', 'value': 51}, {'id': 'TN', 'value': 2}, {'id': 'BR', 'value': 53}, {'id': 'SE', 'value': 46}, {'id': 'CA', 'value': 22}, {'id': 'RU', 'value': 40}, {'id': 'LV', 'value': 18}, {'id': 'SA', 'value': 2}, {'id': 'GB', 'value': 4}, {'id': 'UA', 'value': 45}, {'id': 'MO', 'value': 6}, {'id': 'US', 'value': 29}, {'id': 'ES', 'value': 21}, {'id': 'CL', 'value': 17}, {'id': 'CH', 'value': 2}, {'id': 'MA', 'value': 2}, {'id': 'PA', 'value': 11}, {'id': 'MX', 'value': 3}, {'id': 'JP', 'value': 5}, {'id': 'BE', 'value': 3}, {'id': 'LT', 'value': 2}, {'id': 'NO', 'value': 8}, {'id': 'VN', 'value': 8}, {'id': 'AR', 'value': 2}, {'id': 'VE', 'value': 15}, {'id': 'PH', 'value': 1}, {'id': 'CW', 'value': 1}, {'id': 'MK', 'value': 1}, {'id': 'HU', 'value': 4}, {'id': 'HN', 'value': 1}, {'id': 'NL', 'value': 2}, {'id': 'PL', 'value': 1}, {'id': 'BO', 'value': 1}, {'id': 'BG', 'value': 4}, {'id': 'TR', 'value': 1}, {'id': 'EE', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'ZA', 'value': 2}, {'id': 'AU', 'value': 4}, {'id': 'SI', 'value': 3}, {'id': 'DK', 'value': 1}, {'id': 'BA', 'value': 1}, {'id': 'BZ', 'value': 2}, {'id': 'DE', 'value': 1}, {'id': 'AZ', 'value': 1}, {'id': 'EG', 'value': 3}, {'id': 'CO', 'value': 1}, {'id': 'GH', 'value': 1}, {'id': 'IE', 'value': 1}, {'id': 'AM', 'value': 1}, {'id': 'IR', 'value': 1}, {'id': 'FI', 'value': 1}, {'id': 'RO', 'value': 1}, {'id': 'IT', 'value': 1}, {'id': 'HR', 'value': 1}, {'id': 'MD', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

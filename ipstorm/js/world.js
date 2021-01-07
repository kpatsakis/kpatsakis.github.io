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
polygonSeries.data = [{'id': 'BR', 'value': 123}, {'id': 'CN', 'value': 214}, {'id': 'TW', 'value': 185}, {'id': 'UA', 'value': 132}, {'id': 'VN', 'value': 32}, {'id': 'CA', 'value': 64}, {'id': 'SE', 'value': 110}, {'id': 'PK', 'value': 2}, {'id': 'KR', 'value': 330}, {'id': 'CL', 'value': 11}, {'id': 'RU', 'value': 98}, {'id': 'HK', 'value': 502}, {'id': 'ES', 'value': 39}, {'id': 'DK', 'value': 5}, {'id': 'MX', 'value': 8}, {'id': 'US', 'value': 98}, {'id': 'CY', 'value': 11}, {'id': 'AU', 'value': 7}, {'id': 'LV', 'value': 16}, {'id': 'MK', 'value': 4}, {'id': 'VE', 'value': 38}, {'id': 'FR', 'value': 30}, {'id': 'PA', 'value': 33}, {'id': 'BG', 'value': 16}, {'id': 'BD', 'value': 2}, {'id': 'FI', 'value': 1}, {'id': 'IT', 'value': 9}, {'id': 'DE', 'value': 12}, {'id': 'ZA', 'value': 2}, {'id': 'KZ', 'value': 4}, {'id': 'MO', 'value': 17}, {'id': 'EC', 'value': 6}, {'id': 'SI', 'value': 6}, {'id': 'AZ', 'value': 5}, {'id': 'BS', 'value': 1}, {'id': 'NO', 'value': 20}, {'id': 'GB', 'value': 10}, {'id': 'MY', 'value': 17}, {'id': 'HN', 'value': 1}, {'id': 'SG', 'value': 17}, {'id': 'GE', 'value': 4}, {'id': 'PY', 'value': 2}, {'id': 'UY', 'value': 5}, {'id': 'PL', 'value': 4}, {'id': 'MD', 'value': 4}, {'id': 'IE', 'value': 3}, {'id': 'SN', 'value': 1}, {'id': 'CH', 'value': 4}, {'id': 'CZ', 'value': 2}, {'id': 'AW', 'value': 1}, {'id': 'TH', 'value': 7}, {'id': 'CO', 'value': 3}, {'id': 'NL', 'value': 1}, {'id': 'EG', 'value': 1}, {'id': 'LT', 'value': 4}, {'id': 'BE', 'value': 2}, {'id': 'TR', 'value': 2}, {'id': 'CW', 'value': 1}, {'id': 'CR', 'value': 1}, {'id': 'IL', 'value': 1}, {'id': 'AR', 'value': 4}, {'id': 'IN', 'value': 2}, {'id': 'LA', 'value': 1}, {'id': 'DZ', 'value': 2}, {'id': 'HU', 'value': 1}, {'id': 'PT', 'value': 2}, {'id': 'JP', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

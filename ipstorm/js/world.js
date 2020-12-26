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
polygonSeries.data = [{'id': 'HK', 'value': 735}, {'id': 'UA', 'value': 173}, {'id': 'PA', 'value': 80}, {'id': 'SG', 'value': 32}, {'id': 'KR', 'value': 420}, {'id': 'VN', 'value': 39}, {'id': 'US', 'value': 151}, {'id': 'BR', 'value': 149}, {'id': 'BE', 'value': 4}, {'id': 'GB', 'value': 6}, {'id': 'VE', 'value': 62}, {'id': 'UY', 'value': 28}, {'id': 'TW', 'value': 263}, {'id': 'MO', 'value': 14}, {'id': 'SE', 'value': 155}, {'id': 'CL', 'value': 93}, {'id': 'CN', 'value': 202}, {'id': 'CA', 'value': 85}, {'id': 'RU', 'value': 120}, {'id': 'FR', 'value': 43}, {'id': 'LC', 'value': 1}, {'id': 'RO', 'value': 4}, {'id': 'ES', 'value': 55}, {'id': 'AZ', 'value': 2}, {'id': 'BG', 'value': 14}, {'id': 'SI', 'value': 10}, {'id': 'EC', 'value': 8}, {'id': 'LT', 'value': 5}, {'id': 'PL', 'value': 6}, {'id': 'LV', 'value': 31}, {'id': 'DE', 'value': 20}, {'id': 'DK', 'value': 6}, {'id': 'KZ', 'value': 21}, {'id': 'MK', 'value': 1}, {'id': 'GU', 'value': 2}, {'id': 'BA', 'value': 1}, {'id': 'BY', 'value': 2}, {'id': 'PT', 'value': 9}, {'id': 'MY', 'value': 14}, {'id': 'ZA', 'value': 1}, {'id': 'CH', 'value': 2}, {'id': 'TR', 'value': 4}, {'id': 'IT', 'value': 18}, {'id': 'CY', 'value': 11}, {'id': 'GE', 'value': 4}, {'id': 'JP', 'value': 2}, {'id': 'NO', 'value': 31}, {'id': 'MD', 'value': 6}, {'id': 'IE', 'value': 3}, {'id': 'BS', 'value': 2}, {'id': 'DZ', 'value': 3}, {'id': 'AW', 'value': 1}, {'id': 'AE', 'value': 1}, {'id': 'NL', 'value': 1}, {'id': 'IL', 'value': 1}, {'id': 'HN', 'value': 1}, {'id': 'RS', 'value': 3}, {'id': 'CW', 'value': 2}, {'id': 'AR', 'value': 3}, {'id': 'TN', 'value': 1}, {'id': 'MX', 'value': 5}, {'id': 'MT', 'value': 1}, {'id': 'AU', 'value': 5}, {'id': 'CO', 'value': 1}, {'id': 'NG', 'value': 1}, {'id': 'IN', 'value': 2}, {'id': 'PR', 'value': 1}, {'id': 'PY', 'value': 3}, {'id': 'CZ', 'value': 1}, {'id': 'FI', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'TH', 'value': 2}, {'id': 'UZ', 'value': 1}, {'id': 'PK', 'value': 2}, {'id': 'NA', 'value': 1}, {'id': 'BD', 'value': 1}, {'id': 'SN', 'value': 1}, {'id': 'JM', 'value': 1}];

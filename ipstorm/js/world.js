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
polygonSeries.data = [{'id': 'HK', 'value': 188}, {'id': 'CN', 'value': 107}, {'id': 'UA', 'value': 60}, {'id': 'DE', 'value': 21}, {'id': 'RU', 'value': 50}, {'id': 'SE', 'value': 49}, {'id': 'CA', 'value': 27}, {'id': 'KR', 'value': 260}, {'id': 'BR', 'value': 53}, {'id': 'CO', 'value': 2}, {'id': 'TW', 'value': 56}, {'id': 'US', 'value': 39}, {'id': 'SG', 'value': 9}, {'id': 'FR', 'value': 14}, {'id': 'ES', 'value': 18}, {'id': 'VE', 'value': 23}, {'id': 'IT', 'value': 3}, {'id': 'VN', 'value': 8}, {'id': 'PK', 'value': 2}, {'id': 'ZA', 'value': 4}, {'id': 'JP', 'value': 4}, {'id': 'CL', 'value': 17}, {'id': 'PA', 'value': 14}, {'id': 'EC', 'value': 4}, {'id': 'GB', 'value': 12}, {'id': 'NO', 'value': 10}, {'id': 'CH', 'value': 2}, {'id': 'TR', 'value': 4}, {'id': 'RO', 'value': 3}, {'id': 'PL', 'value': 5}, {'id': 'MY', 'value': 9}, {'id': 'LV', 'value': 10}, {'id': 'SA', 'value': 2}, {'id': 'IE', 'value': 4}, {'id': 'HU', 'value': 2}, {'id': 'SI', 'value': 3}, {'id': 'AU', 'value': 2}, {'id': 'MO', 'value': 5}, {'id': 'GE', 'value': 1}, {'id': 'MX', 'value': 2}, {'id': 'BD', 'value': 2}, {'id': 'PT', 'value': 3}, {'id': 'BZ', 'value': 2}, {'id': 'NL', 'value': 3}, {'id': 'KE', 'value': 1}, {'id': 'MD', 'value': 1}, {'id': 'GR', 'value': 1}, {'id': 'OM', 'value': 1}, {'id': 'PE', 'value': 1}, {'id': 'IN', 'value': 2}, {'id': 'MT', 'value': 1}, {'id': 'JM', 'value': 1}, {'id': 'LT', 'value': 1}, {'id': 'BG', 'value': 2}, {'id': 'AM', 'value': 1}, {'id': 'SR', 'value': 1}, {'id': 'BS', 'value': 1}, {'id': 'ID', 'value': 1}];

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Create chart instance
var chart = am4core.create("piediv", am4charts.PieChart);

var title = chart.titles.create();
title.text = "Ratio of IPStorm nodes";
title.fontSize = 25;
title.marginBottom = 30;

// Add data
chart.data = [{
  "status": "Benign",
  "perc": 921326
}, {
  "status": "Malicious",
  "perc": 71839
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "perc";
pieSeries.dataFields.category = "status";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#0288d1", "#e91e63"].map(function(color) {
  return new am4core.color(color);
});
pieSeries.colors = colorSet;

am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv4", am4charts.PieChart);

    // Add data
    chart.data = [
      { group: "0-4", cases: 6324 },
      { group: '5-9', cases: 5404 },
      { group: '10-14', cases: 5540 },
      { group: '15-19', cases: 5194 },
  ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "group";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);

    chart.innerRadius = am4core.percent(30);
    var title = chart.titles.create();
    title.text = "Vulnerable boys in Island District under different age groups";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
    

}); // end am4core.ready()
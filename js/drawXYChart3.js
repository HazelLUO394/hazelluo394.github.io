am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv3", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "district": "Central and Western",
      "cost": 948733,
    }, {
      "district": "Eastern",
      "cost": 1137031,
    }, {
      "district": "Islands",
      "cost": 247460,
    },{
      "district": "Kowloon City",
      "cost": 24898,
    }, {
      "district": "Kwai Tsing",
      "cost": 1471475,
    }, {
      "district": "Kwun Tong",
      "cost": 1200288,
    }, {
      "district": "North",
      "cost": 1062218,
    }, {
      "district": "Sai Kung",
      "cost": 1294241,
    }, {
      "district": "Sha Tin",
      "cost": 729071,
    }, {
      "district": "Sham Shui Po",
      "cost": 864341,
    }, {
      "district": "Southern",
      "cost": 474010,
    }, {
      "district": "Tai Po",
      "cost": 1514836,
    }, {
      "district": "Tsuen Wan",
      "cost": 1508987,
    }, {
      "district": "Tuen Mun",
      "cost": 1264317,
    }, {
      "district": "Wan Chai",
      "cost": 301351,
    }, {
      "district": "Wong Tai Sin",
      "cost": 418493,
    }, {
      "district": "Yau Tsim Mong",
      "cost": 320878,
    }, {
      "district": "Yuen Long",
      "cost": 1165575,
    }];
    
    // Create axes

    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "A&E medical cost(HK$ per year)";
    valueAxis.renderer.tooltipLocation = -1;
    valueAxis.renderer.grid.template.location = 0;
    valueAxis.renderer.minGridDistance = 100;
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "district";
    categoryAxis.title.text = "Districts";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.line.strokeWidth = 2;
    categoryAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "cost";
    series.dataFields.categoryY = "district";
    series.columns.template.tooltipText = "[bold]{valueX}[/]";
    series.columns.template.fillOpacity = .8;

    series.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });

    var title = chart.titles.create();
    title.text = "[bold]A&E medical cost(HK$ per year)[/bold]";
    title.fontSize = 17;
    title.marginTop = 0;
    title.marginBottom = 5;

}); // end am4core.ready()
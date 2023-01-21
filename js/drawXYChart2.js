am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "district": "Central and Western",
      "boys 0-4 years": 4257,
      "boys 5-9 years": 4187,
      //"boys 10-14 years": 0,
      "boys 15-19 years": 3549,
      "girls 0-4 years": 3529,
    }, {
      "district": "Eastern",
      "boys 0-4 years": 7242,
      "boys 5-9 years": 5436,
      "boys 10-14 years": 5986,
      "boys 15-19 years": 5485,
      //"girls 0-4 years": 0,
    }, {
      "district": "Islands",
      "boys 0-4 years": 6324,
      "boys 5-9 years": 5404,
      "boys 10-14 years": 5540,
      "boys 15-19 years": 5194,
      //"girls 0-4 years": 0,
    },{
      "district": "Kowloon City",
      "boys 0-4 years": 7242,
      "boys 5-9 years": 5436,
      "boys 10-14 years": 5986,
      "boys 15-19 years": 5485,
      //"girls 0-4 years": 0,
    }, {
      "district": "Kwai Tsing",
      "boys 0-4 years": 9238,
      "boys 5-9 years": 6221,
      "boys 10-14 years": 6438,
      //"boys 15-19 years": 0,
      "girls 0-4 years": 7164,
    }, {
      "district": "Kwun Tong",
      "boys 0-4 years": 8399,
      "boys 5-9 years": 5541,
      "boys 10-14 years": 5598,
      "boys 15-19 years": 0,
      "girls 0-4 years": 6228,
    }, {
      "district": "North",
      "boys 0-4 years": 9454,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 6754,
      "boys 15-19 years": 6409,
      "girls 0-4 years": 7269,
    }, {
      "district": "Sai Kung",
      "boys 0-4 years": 8422,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 6722,
      "boys 15-19 years": 6192,
      "girls 0-4 years": 6467,
    }, {
      "district": "Sha Tin",
      "boys 0-4 years": 6534,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 4885,
      "boys 15-19 years": 4672,
      "girls 0-4 years": 5365,
    }, {
      "district": "Sham Shui Po",
      "boys 0-4 years": 8980,
      "boys 5-9 years": 6309,
      "boys 10-14 years": 5977,
      //"boys 15-19 years": 0,
      "girls 0-4 years": 6985,
    }, {
      "district": "Southern",
      "boys 0-4 years": 6872,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 5595,
      "boys 15-19 years": 5444,
      "girls 0-4 years": 5264,
    }, {
      "district": "Tai Po",
      "boys 0-4 years": 10725,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 8399,
      "boys 15-19 years": 8219,
      "girls 0-4 years": 8990,
    }, {
      "district": "Tsuen Wan",
      "boys 0-4 years": 5933,
      "boys 5-9 years": 3892,
      "boys 10-14 years": 4078,
      //"boys 15-19 years": 0,
      "girls 0-4 years": 4614,
    }, {
      "district": "Tuen Mun",
      "boys 0-4 years": 8430,
      "boys 5-9 years": 5679,
      "boys 10-14 years": 6074,
      //"boys 15-19 years": 0,
      "girls 0-4 years": 6440,
    }, {
      "district": "Wan Chai",
      "boys 0-4 years": 5994,
      "boys 5-9 years": 5695,
      "boys 10-14 years": 6772,
      "boys 15-19 years": 5448,
      //"girls 0-4 years": 0,
    }, {
      "district": "Wong Tai Sin",
      "boys 0-4 years": 6959,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 4694,
      "boys 15-19 years": 4637,
      "girls 0-4 years": 5031,
    }, {
      "district": "Yau Tsim Mong",
      "boys 0-4 years": 6588,
      "boys 5-9 years": 4972,
      "boys 10-14 years": 4624,
      //"boys 15-19 years": 0,
      "girls 0-4 years": 5149,
    }, {
      "district": "Yuen Long",
      "boys 0-4 years": 7975,
      //"boys 5-9 years": 0,
      "boys 10-14 years": 5256,
      "boys 15-19 years": 5140,
      "girls 0-4 years": 6274,
    }];
    
    // Create axes
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "district";
    // categoryAxis.title.text = "Districts";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.fontSize = 13

    categoryAxis.renderer.labels.template.rotation = 90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";

    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "number of vulnerable groups(per 100,000 persons)";
    valueAxis.renderer.tooltipLocation = -1;
    valueAxis.fontSize = 13
    


    // Create series
    function createSeries(field, name) {
      
      // Set up series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "district";
      series.sequencedInterpolation = true;
      
      // Make it stacked
      series.stacked = true;
      
      // Configure columns
      // series.columns.template.width = am4core.percent(60);
      series.columns.template.tooltipText = "{name}:{valueY}"
      
    }
    
    createSeries("boys 0-4 years", "boys 0-4 years");
    createSeries("boys 5-9 years", "boys 5-9 years");
    createSeries("boys 10-14 years", "boys 10-14 years");
    createSeries("boys 15-19 years", "boys 15-19 years");
    createSeries("girls 0-4 years", "girls 0-4 years");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = categoryAxis;
    chart.cursor.fullWidthLineX = true;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;
    chart.cursor.behavior = "selectX";
    chart.cursor.lineY.disabled = true;
    
    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.maxWidth = 150;
    chart.legend.fontSize = 13;

    var title = chart.titles.create();
    title.text = "[bold]Number of vulnerable groups(per 100,000 persons)[/bold]";
    title.fontSize = 17;
    title.marginTop = 0;
    title.marginBottom = 5;

}); // end am4core.ready()
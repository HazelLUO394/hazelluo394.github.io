am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv5", am4charts.XYChart);
 
    
    // Add data
    chart.data = [
        {
          "Category": 2010,
          "Installation": 43934,
          "Manufacturing": 24916,
          "Sales & Distribution": 11744,
          "Project Development": "",
          "Other": 12908
        },
        {
          "Category": 2011,
          "Installation": 52503,
          "Manufacturing": 24064,
          "Sales & Distribution": 17722,
          "Project Development": "",
          "Other": 5948
        },
        {
          "Category": 2012,
          "Installation": 57177,
          "Manufacturing": 29742,
          "Sales & Distribution": 16005,
          "Project Development": 7988,
          "Other": 8105
        },
        {
          "Category": 2013,
          "Installation": 69658,
          "Manufacturing": 29851,
          "Sales & Distribution": 19771,
          "Project Development": 12169,
          "Other": 11248
        },
        {
          "Category": 2014,
          "Installation": 97031,
          "Manufacturing": 32490,
          "Sales & Distribution": 20185,
          "Project Development": 15112,
          "Other": 8989
        },
        {
          "Category": 2015,
          "Installation": 119931,
          "Manufacturing": 30282,
          "Sales & Distribution": 24377,
          "Project Development": 22452,
          "Other": 11816
        },
        {
          "Category": 2016,
          "Installation": 137133,
          "Manufacturing": 38121,
          "Sales & Distribution": 32147,
          "Project Development": 34400,
          "Other": 18274
        },
        {
          "Category": 2017,
          "Installation": 154175,
          "Manufacturing": 40434,
          "Sales & Distribution": 39387,
          "Project Development": 34227,
          "Other": 18111
        }
      ];
    
    chart.data.forEach(function (o) {
    
        o.Category = "" + o.Category;
        o["Project Development"] = o["Project Development"] || undefined;
    
    });
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    
    var property = ["Installation",
    "Manufacturing",
    "Sales & Distribution",
    "Project Development",
    "Other"];
    property.forEach(function (elem) {    
     
        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = elem;
        series.dataFields.dateX = "Category";
        series.tooltipText = elem + ": {valueY}"
        series.strokeWidth = 2;
        series.minBulletDistance = 15;

        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");

        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        // chart.cursor.maxTooltipDistance = 20;
        // chart.cursor.snapToSeries = series;
        


        series.legendSettings.valueText = elem;

    });

    chart.legend = new am4charts.Legend();
 

    chart.events.on("ready", function () {
        dateAxis.zoom({ start: 0, end: 1 });
    });

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);           
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();
    
    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;
    
    
    }); 
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv6", am4maps.MapChart);

    chart.titles.create().text = "[bold]Child Abuses in Hong Kong[/bold]";

    // Set map definition
    chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/hongKongHigh.json";
    chart.geodataSource.events.on("parseended", function (ev) {
        console.log(ev.target.data);

        var data = [
            { id: "HK-CW", value: 14.5 },
            { id: "HK-WC", value: 18.7 },
            { id: "HK-EA", value: 18.2 },
            { id: "HK-SO", value: 22.0 },
            { id: "HK-YT", value: 17.1 },
            { id: "HK-SS", value: 21.3 },
            { id: "HK-KC", value: 17.5 },
            { id: "HK-WT", value: 20.1 },
            { id: "HK-KU", value: 15.9 },
            { id: "HK-KI", value: 23.3 },
            { id: "HK-TW", value: 14.9 },
            { id: "HK-TM", value: 38.3 },
            { id: "HK-YL", value: 42.6 },
            { id: "HK-NO", value: 17.6 },
            { id: "HK-TP", value: 16.3 },
            { id: "HK-ST", value: 14.1 },
            { id: "HK-SK", value: 17.8 },
            { id: "HK-IS", value: 21.0 }
        ];
        
        polygonSeries.data = data;
    })

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.width = am4core.percent(25);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;
    heatLegend.valign = "bottom";

    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Little";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "A lot!";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
        return "";
    });

    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);

}); // end am4core.ready()
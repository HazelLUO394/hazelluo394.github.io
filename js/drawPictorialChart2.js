am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var iconPath = `M348 2366 c-22 -30 -23 -37 -3 -30 8 4 21 1 28 -4 8 -7 26 -8 52 -2
    22 5 56 10 77 10 32 0 40 -6 73 -50 40 -55 130 -136 228 -208 35 -26 88 -65
    117 -86 l52 -39 -7 -83 c-7 -83 -7 -83 35 -165 22 -46 45 -88 50 -93 11 -14
    30 -308 33 -506 2 -145 1 -157 -20 -190 -45 -70 -48 -79 -32 -96 9 -8 35 -15
    62 -16 38 0 49 -5 63 -25 14 -23 21 -25 61 -19 l46 6 -8 -43 c-4 -23 -11 -71
    -15 -107 -6 -46 -21 -90 -53 -151 -39 -74 -46 -97 -52 -170 -7 -91 10 -161 42
    -174 26 -9 33 6 39 90 6 75 9 83 46 123 l38 42 -16 32 c-20 38 -12 66 43 160
    51 88 72 158 75 254 2 62 7 88 18 98 33 29 120 86 131 86 20 0 138 129 145
    158 18 84 48 131 147 237 26 28 47 58 47 67 0 9 5 20 10 23 6 3 10 21 10 40 0
    19 5 37 10 40 6 4 8 10 5 15 -3 5 -1 27 5 49 9 34 16 42 48 51 20 5 45 10 55
    10 33 0 125 38 172 70 50 35 92 49 165 57 25 3 56 13 70 23 14 9 41 22 60 29
    45 15 110 79 110 107 0 37 -20 45 -79 29 -34 -9 -71 -29 -102 -55 -27 -22 -68
    -48 -91 -56 -37 -14 -345 -85 -433 -100 -16 -3 -54 -17 -84 -31 -29 -15 -73
    -28 -97 -29 -23 -1 -78 -12 -121 -25 -93 -26 -186 -28 -228 -5 -16 9 -40 16
    -53 16 -35 0 -55 54 -36 99 8 18 14 46 14 61 0 59 57 89 285 149 64 18 145 43
    180 57 l64 26 59 -21 c66 -24 72 -25 72 -12 0 5 -9 11 -21 14 -12 3 -19 12
    -17 19 5 15 66 17 112 3 22 -6 28 -5 24 6 -12 35 -186 50 -293 24 -33 -8 -91
    -15 -129 -15 -57 0 -78 -5 -130 -32 -54 -28 -73 -32 -162 -36 -97 -4 -102 -3
    -109 17 -7 24 0 41 20 41 7 0 28 18 45 40 17 22 38 40 45 40 18 0 36 55 28 91
    -6 31 -26 44 -114 73 -43 14 -97 11 -127 -8 -29 -18 -68 -94 -71 -137 -2 -43
    0 -47 23 -53 33 -8 41 -40 23 -91 -9 -27 -21 -41 -35 -43 -35 -5 -259 116
    -293 159 -16 20 -53 51 -82 67 -28 16 -74 49 -101 73 l-50 44 -90 3 c-87 3
    -92 2 -108 -22z`

    var chart = am4core.create("chartdiv8", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingRight = 0;
    chart.paddingLeft = 0;

    chart.data = [{
        "name": "$0-100",
        "value": 6
    }, {
        "name": "$100-200",
        "value": 4
    }, {
        "name": "$300-400",
        "value": 7
    }, {
        "name": "$500+",
        "value": 3
    }];
    var title = chart.titles.create();
        title.text = "How much will you spend on Entertainment?";
        title.fontSize = 20;
        title.marginTop = 20;
        title.marginBottom = 20;
        
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    // this makes only A label to be visible
    series.labels.template.propertyFields.disabled = "disabled";
    series.ticks.template.propertyFields.disabled = "disabled";
    series.orientation = "horizontal";
    series.labels.template.rotation = 0;
    series.labels.template.text = "{category}:\n{value.percent.formatNumber('#.0')}%";


    series.maskSprite.path = iconPath;

    series.maskSprite.rotation = 180;

    series.labelsContainer.width = 100;

    series.ticks.template.locationY = 0.5;
    series.ticks.template.locationX = 0.8;

    // chart.legend = new am4charts.Legend();
    // chart.legend.position = "top";
    // chart.legend.paddingRight = 10;
    // chart.legend.paddingBottom = 10;
    // let marker = chart.legend.markers.template.children.getIndex(0);
    // chart.legend.markers.template.width = 10;
    // chart.legend.markers.template.height = 10;

    marker.cornerRadius(20, 20, 20, 20);



}); // end am4core.ready()
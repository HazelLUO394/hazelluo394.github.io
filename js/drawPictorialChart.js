am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var iconPath = `M1303 4739 c-67 -8 -176 -48 -238 -87 -105 -66 -235 -225 -301 -366
    -43 -94 -64 -181 -64 -271 0 -89 -15 -130 -66 -188 -49 -55 -53 -71 -43 -157
    10 -94 21 -114 90 -165 33 -25 69 -56 80 -69 15 -20 139 -224 139 -230 0 -1
    -18 0 -40 2 -88 9 -196 -63 -239 -158 -25 -55 -28 -160 -6 -243 31 -119 111
    -240 176 -267 26 -11 29 -17 24 -39 -15 -57 -81 -175 -143 -253 -191 -238
    -259 -350 -232 -383 7 -8 21 -15 32 -15 31 0 113 -47 142 -80 24 -29 25 -33
    12 -59 -8 -15 -34 -45 -58 -66 -68 -60 -155 -165 -190 -230 -29 -55 -32 -68
    -31 -145 0 -74 5 -98 38 -180 74 -189 175 -527 182 -608 l6 -63 48 2 c42 2 53
    -2 87 -32 22 -19 41 -38 41 -44 0 -5 -26 -53 -59 -105 -33 -52 -60 -104 -60
    -116 0 -31 37 -74 65 -74 13 0 61 18 106 40 46 22 88 40 94 40 18 0 43 32 51
    65 4 17 24 50 45 75 45 53 70 116 59 146 -5 11 -19 28 -33 37 -14 9 -29 29
    -35 46 -11 31 -9 32 61 55 27 9 27 94 0 266 -9 58 -17 157 -17 220 0 104 3
    120 27 170 36 75 79 114 155 139 133 43 492 53 610 16 57 -17 124 -70 148
    -116 8 -16 14 -45 14 -66 0 -61 -38 -111 -178 -232 l-62 -54 0 -62 c0 -50 -4
    -65 -21 -81 -31 -28 -22 -98 24 -172 29 -47 41 -58 69 -62 25 -4 37 -13 50
    -40 10 -19 18 -45 18 -56 0 -26 50 -78 91 -94 24 -10 33 -10 54 4 13 9 27 27
    31 41 6 23 -18 194 -32 230 -6 14 -1 13 27 -4 40 -25 65 -20 134 24 28 17 101
    60 164 96 146 81 266 191 311 282 73 149 95 363 50 482 -54 142 -158 273 -339
    429 -104 89 -123 118 -176 261 -56 149 -74 221 -82 313 l-6 83 63 -30 c87 -41
    155 -49 213 -23 81 36 84 67 32 347 -17 90 -60 202 -101 257 -47 66 -129 98
    -292 114 -54 5 -70 10 -62 19 5 6 28 65 51 131 43 126 72 175 118 199 45 23
    67 110 38 150 -12 15 -11 27 5 77 17 55 17 62 2 93 -17 36 -47 60 -87 70 -23
    6 -24 11 -30 98 -6 106 -40 218 -83 275 -34 45 -47 56 -101 83 -41 20 -43 23
    -43 66 0 116 -91 190 -280 228 -93 18 -175 23 -247 14z m272 -224 c88 -23 173
    -73 241 -141 76 -76 114 -151 122 -241 l5 -66 -34 26 c-45 34 -100 54 -179 65
    -117 17 -213 -12 -261 -79 -18 -26 -26 -29 -75 -29 -49 0 -58 4 -79 29 -14 15
    -48 39 -77 52 -44 20 -68 23 -140 22 -111 -2 -180 -23 -247 -74 l-53 -40 7 53
    c9 70 32 120 90 197 116 153 303 239 520 240 60 1 125 -5 160 -14z m424 -660
    c14 -28 22 -72 26 -145 9 -143 -8 -222 -82 -370 l-58 -115 -55 -18 c-155 -49
    -356 -72 -565 -63 -208 9 -258 22 -315 84 -47 50 -86 116 -155 262 -39 82 -40
    89 -43 202 -3 111 -2 119 23 161 41 71 64 72 108 4 72 -112 119 -134 218 -107
    39 11 55 21 178 118 73 57 84 62 129 62 48 0 50 -1 118 -74 76 -82 123 -103
    198 -92 59 10 95 36 155 116 l54 71 23 -28 c13 -15 32 -46 43 -68z m122 34
    c14 -14 18 -27 13 -42 -10 -35 -34 -69 -46 -65 -10 4 -36 85 -38 116 0 19 48
    14 71 -9z m-1421 -115 c24 -62 -1 -105 -40 -69 -32 29 -24 95 11 95 12 0 23
    -10 29 -26z m1420 -63 c16 -31 12 -63 -12 -88 -12 -13 -24 -23 -28 -23 -3 0
    -6 29 -5 65 0 54 3 65 17 65 10 0 22 -9 28 -19z m-1406 -103 c8 -32 7 -68 -2
    -68 -17 0 -52 32 -52 49 0 39 44 55 54 19z m982 -516 c50 -25 88 -69 104 -117
    14 -43 5 -60 -10 -19 -20 54 -33 74 -52 74 -24 0 -23 -27 2 -68 20 -33 27 -72
    12 -72 -5 0 -18 22 -31 49 -12 27 -29 52 -37 55 -26 10 -26 -20 0 -59 14 -21
    26 -44 26 -51 0 -30 -21 -21 -54 26 -33 46 -54 59 -68 44 -4 -3 5 -22 18 -41
    25 -38 30 -58 15 -67 -16 -10 -194 83 -233 121 -48 47 -66 89 -47 108 22 21
    156 44 239 41 53 -2 87 -9 116 -24z m-111 -293 c34 -32 53 -36 61 -14 16 40
    62 -7 48 -48 -5 -12 -8 -25 -9 -29 0 -3 -3 -10 -7 -14 -5 -4 -8 -17 -8 -28 0
    -12 -7 -29 -14 -38 -15 -20 -36 -24 -36 -8 0 6 -7 27 -15 47 -13 30 -17 33
    -30 23 -17 -14 -20 -66 -5 -75 6 -3 10 -13 10 -22 0 -27 -27 4 -46 53 -14 36
    -21 44 -38 42 -29 -4 -31 -32 -7 -78 l21 -40 -21 0 c-15 0 -27 15 -45 55 -28
    60 -37 66 -54 34 -10 -17 -7 -27 14 -58 14 -20 26 -40 26 -44 0 -15 -25 -6
    -52 20 -42 40 -40 103 6 167 37 52 63 74 104 86 37 11 61 3 97 -31z m330
    -2149 c59 -14 72 -29 80 -86 6 -51 6 -52 -28 -73 -19 -11 -38 -21 -43 -21 -5
    0 -24 28 -42 63 -33 61 -33 62 -5 29 29 -34 57 -42 66 -18 10 25 -32 75 -87
    106 -70 40 -93 66 -29 34 26 -13 66 -29 88 -34z m-967 -187 c4 -30 -35 -66
    -89 -82 -36 -11 -43 -10 -60 5 -54 49 6 106 106 101 33 -2 41 -6 43 -24z m27
    -89 c-11 -8 -46 -29 -79 -47 -61 -33 -90 -64 -84 -94 5 -26 36 -28 69 -4 37
    28 37 20 -2 -24 -24 -27 -39 -35 -66 -35 -48 0 -73 16 -73 46 0 36 43 73 147
    128 89 46 125 58 88 30z`

    var chart = am4core.create("chartdiv7", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.paddingRight = 150;
    chart.paddingLeft = 50;

    chart.data = [{
        "name": "Reality show artists",
        "value": 7
    }, {
        "name": "Drama actors",
        "value": 6
    }, {
        "name": "Singers/Bands",
        "value": 4
    }, {
        "name": "Models",
        "value": 3
    }];

    var title = chart.titles.create();
    title.text = "Which artists do you prefer in Korea?";
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
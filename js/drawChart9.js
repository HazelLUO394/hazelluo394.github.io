am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv9", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);

    var treeCities = [
        { city: "Tel Aviv", country: "Israel", percentage: 17.5, lat: 32.0853, lng: 34.7818 },
        { city: "Boston", country: "Massachusetts", percentage: 18.2, lat: 42.3601, lng: -71.0589 },
        { city: "Miami", country: "Florida", percentage: 19.4, lat: 25.7617, lng: -80.1918 },
        { city: "Toronto", country: "Canada", percentage: 19.5, lat: 43.6532, lng: -79.3832 },
        { city: "Seattle", country: "Washington", percentage: 20, lat: 47.6062, lng: -122.3321 },
        { city: "Amsterdam", country: "Netherlands", percentage: 20.6, lat: 52.3702, lng: 4.8952 },
        { city: "Geneva", country: "Switzerland", percentage: 21.4, lat: 46.2044, lng: 6.1432 },
        { city: "Frankfurt", country: "Germany", percentage: 21.5, lat: 50.1109, lng: 8.6821 },
        { city: "Sacramento", country: "California", percentage: 23.6, lat: 38.5816, lng: -121.4944 },
        { city: "Johannesburg", country: "South Africa", percentage: 23.6, lat: -26.2041, lng: 28.0473 },
        { city: "Durban", country: "South Africa", percentage: 23.7, lat: -29.8587, lng: 31.0218 },
        { city: "Cambridge", country: "Massachusetts", percentage: 25.3, lat: 42.3736, lng: -71.1097 },
        { city: "Vancouver", country: "Canada", percentage: 25.9, lat: 49.2827, lng: -123.1207 },
        { city: "Sydney", country: "Australia", percentage: 25.9, lat: -33.8688, lng: 151.2093 },
        { city: "Singapore", country: "Singapore", percentage: 29.3, lat: 1.3521, lng: 103.8198 }
    ];
    

    var circleSeries = chart.series.push(new am4maps.MapPolygonSeries())
    var circleTemplate = circleSeries.mapPolygons.template;
    circleTemplate.fill = am4core.color("#bf7569");
    circleTemplate.strokeOpacity = 0;
    circleTemplate.fillOpacity = 0.75;

    treeCities.forEach(function (city) {
        var polygon = circleSeries.mapPolygons.create();
        polygon.multiPolygon = am4maps.getCircle(city.lng, city.lat, city.percentage * 0.1);
        polygon.tooltipText = city.city + "\n" + city.country + ": " + city.percentage + "%";
    });

    // limits vertical rotation
    chart.adapter.add("deltaLatitude", function(delatLatitude){
        return am4core.math.fitToRange(delatLatitude, -90, 90);
    })
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
   // polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#47c78a");
    polygonTemplate.stroke = am4core.color("#454a58");
    polygonTemplate.strokeWidth = 0.5;
    
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = chart.colors.getIndex(2);
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = chart.colors.getIndex(3);
    
    // Create hover state and set alternative fill color
    // var hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);
    
    // let animation;
    // setTimeout(function(){
    //   animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    // }, 3000)
    
    chart.seriesContainer.events.on("down", function(){
    if(animation){
      animation.stop();
    }
    })
    
    }); // end am4core.ready()
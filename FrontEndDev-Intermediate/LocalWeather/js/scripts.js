$(document).ready(function() {

  // Get geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      updateWeather(position);
    });
  } else {
    alert("Can't find location!")
  }

  function updateWeather(pos) {
    // Get location based on ip address
    $.getJSON('http://ipinfo.io', function(loc) {
      $('#location').html('<span class="fa fa-map-marker"></span>  ' + loc.city + ', ' + loc.country);
    });
    
    var apiKey = '6719582b1417b3c6abec1977c054d1a8';
    
    var url = 'https://api.forecast.io/forecast/' + apiKey + '/' +
              pos.coords.latitude + ',' +
              pos.coords.longitude;
    
    $.ajax({
      url:  url,
      dataType: 'jsonp',
      success: function(data) {
        
        // Get current weather data
        var tempF = Math.round(data.currently.temperature);
        var tempC = Math.round((tempF - 32)*(5/9));

        var tempFmin = Math.round(data.daily.data[0].temperatureMin);
        var tempCmin = Math.round((tempFmin - 32)*(5/9));

        var tempFmax = Math.round(data.daily.data[0].temperatureMax);
        var tempCmax = Math.round((tempFmax - 32)*(5/9));
        
        // Set current data
        $('#temp').html(tempF + '<sup>&deg;<span class="temp-unit">F</span></sup>');
        $('#temp-max').html(tempFmax);
        $('#temp-min').html(tempFmin);
        $('#condition').html(data.currently.summary);
        
        // Determine current icon and background
        updates = weatherIcon(data.currently.icon);

        // Update current icon and background
        updateBackground(updates.background);
        updateIcon(updates.icon);

        // Get next 6 day data
        var tempFmin6day = [],
            tempCmin6day = [],
            tempFmax6day = [],
            tempCmax6day = [],
            icon6day = [],
            updates6day = [];

        for (var i = 0; i < 6; i++) {
          tempFmin6day[i] = Math.round(data.daily.data[i+1].temperatureMin);
          tempCmin6day[i] = Math.round((tempFmin6day[i] - 32)*(5/9));

          tempFmax6day[i] = Math.round(data.daily.data[i+1].temperatureMax);
          tempCmax6day[i] = Math.round((tempFmax6day[i] - 32)*(5/9));

          icon6day[i] = data.daily.data[i+1].icon;
        }

        // Set next 6 day data
        for (i = 0; i < 6; i++) {
          $('#temp-max' + (i+1).toString()).html(tempFmax6day[i]);
          $('#temp-min' + (i+1).toString()).html(tempFmin6day[i]);

          updates6day[i] = weatherIcon(icon6day[i]);
        }
        
        // Update 6 day forecast icons
        k = 1;
        for (i = 0; i < updates6day.length; i++) {
          update6dayIcon(k,updates6day[i].icon);
          k++;
        }

        // Set weekdays for 6 day forecast
        var d = new Date();
        var weekday = [];
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var today = d.getDay();

        weekdays = [];

        // Update days of week;
        for (i = 0; i < 7; i++) {
          if ((today + i + 1) <= 6) {
            weekdays[i] = weekday[today + i + 1];
            console.log(today + i + 1);
            console.log(weekdays[i]);
          } else {
            weekdays[i] = weekday[today + i + 1 - 7];
            console.log(today + i + 1 - 7);
            console.log(weekdays[i]);
          }
        }

        for (i = 0; i < 6; i++) {
          $('#day' + (i+1).toString()).html(weekdays[i]);
        }
        
        // Button to change temperature units (C or F)
        $('.temp-unit').click(function () {
          if ($('.temp-unit').html() === 'F') {
            $('.temp-unit').html('C');
            $('#temp').html(tempF + '<sup>&deg;<span class="temp-unit">F</span></sup>');
            $('#temp-max').html(tempFmax);
            $('#temp-min').html(tempFmin);

            for (i = 0; i < 6; i++) {
              $('#temp-max' + (i+1).toString()).html(tempFmax6day[i]);
              $('#temp-min' + (i+1).toString()).html(tempFmin6day[i]);
            }

          } else if ($('.temp-unit').html() === 'C') {
            $('.temp-unit').html('F');
            $('#temp').html(tempC + '<sup>&deg;<span class="temp-unit">C</span></sup>');
            $('#temp-max').html(tempCmax);
            $('#temp-min').html(tempCmin);

            for (i = 0; i < 6; i++) {
              $('#temp-max' + (i+1).toString()).html(tempCmax6day[i]);
              $('#temp-min' + (i+1).toString()).html(tempCmin6day[i]);
            }
          }
        });

        // Returns weather icon and background tag with passed condition
        function weatherIcon(icon) {

          switch(icon) {
            case 'clear-day':
              return {
                      icon: 'wi-day-sunny', 
                      background: 'clearday'
              };
              break;
            case 'clear-night':
              return {
                      icon: 'wi-night-clear', 
                      background: 'clearnight'
              };
              break;
            case 'rain':
              return {
                      icon: 'wi-rain', 
                      background: 'rainy'
              };
              break;
            case 'snow':
              return {
                      icon: 'wi-snow'
              };
              break;
            case 'sleet':
              return {
                      icon: 'wi-sleet'
              };
              break;
            case 'wind':
              return {
                      icon: 'wi-windy'
              };
              break;
            case 'fog':
              return {
                      icon: 'wi-fog'
              };
              break;
            case 'cloudy':
              return {
                      icon: 'wi-cloudy',
                      background: 'cloudyday'
              };
              break;
            case 'partly-cloudy-day':
              return {
                      icon: 'wi-day-cloudy',
                      background: 'cloudyday'
              };
              break;
            case 'partly-cloudy-night':
              return {
                      icon: 'wi-night-alt-cloudy',
                      background: 'cloudynight'
              };
              break;
            default:
              $('#icon').addClass('wi-refresh');
              return {
                      icon: 'wi-refresh'
              };
          };

        }

        function updateBackground(background) { 
          $('body').addClass(background);
        }

        // make this function more general where you pass no only the icon to be used, but also the selector to use it on e.g. #icon, day5-icon
        function updateIcon(icon) {
          $('#icon').addClass(icon);
        }

        function update6dayIcon(dayNum,icon) {
          $('#day' + dayNum + '-icon').addClass(icon);
        }
      }, // end success function
      
      error: {
        
      }
      
    });

  } // end updateWeather function
}); // end document ready function
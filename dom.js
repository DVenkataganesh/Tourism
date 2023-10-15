$(document).ready(function () {
    var url = ".\dash.html";
    $.ajax({
    url: url,
    method: 'GET',
    dataType: 'html',
    success: function (data) {
    var $html = $(data);
    32
    var temperature = $html.find('.temperature').text();
    var condition = $html.find('.condition').text();
    var location = $html.find('.location').text();
    var weatherInfo = "Location: " + location + "<br>";
    weatherInfo += "Temperature: " + temperature + "<br>";
    weatherInfo += "Condition: " + condition + "<br>";
    weather information
    $('#weather-info').html(weatherInfo);
    },
    error: function (error) {
    console.error("Error fetching weather data: " + error);
    }
    });
    });
    
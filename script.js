document.getElementById("getTacoButton").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("taco_info").innerHTML="<p>Got one!</p>";
    const url = "http://taco-randomizer.herokuapp.com/random/";
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
        console.log(json);
        let results = "";
        results += '<h2>Taco Shell: ' + json.shell.name + '</h2>';
        results += '<p>' + json.shell.recipe + '</p>';
        results += '<h2>Taco Filling: ' + json.base_layer.name + '</h2>';
        results += '<p>' + json.base_layer.recipe + '</p>';
        results += '<h2>Mix-in: ' + json.mixin.name + '</h2>';
        results += '<p>' + json.mixin.recipe + '</p>';
        results += '<h2>Seasoning: ' + json.seasoning.name + '</h2>';
        results += '<p>' + json.seasoning.recipe + '</p>';
        results += '<h2>Condiment: ' + json.condiment.name + '</h2>';
        results += '<p>' + json.condiment.recipe + '</p>';
        document.getElementById("taco_info").innerHTML = results;
        
    //   let results = "";
    //   results += '<h2>Weather in ' + json.name + "</h2>";
    //   for (let i=0; i < json.weather.length; i++) {
	   // results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
    //   }
    //   results += '<h2>' + json.main.temp + " &deg;F</h2>"
    //   results += "<p>"
    //   for (let i=0; i < json.weather.length; i++) {
	   // results += json.weather[i].description
	   // if (i !== json.weather.length - 1)
	   //     results += ", "
    //   }
    //   results += "</p>";
    //   results += "<br><p>Humidity: " + json.main.humidity + "%</p>";
    //   results += "<p>Cloud Cover: " + json.clouds.all + "%</p>";
    //   results += "<p>Wind Speed: " + json.wind.speed + " mph</p>";
    //   results += "<p>Sunrise: " + moment(json.sys.sunrise).format('h:mm a') + "</p>";
    //   results += "<p>Sunset: " + moment(json.sys.sunset).format('h:mm a') + "</p>";
    //   document.getElementById("weatherResults").innerHTML = results;
    });
});

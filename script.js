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
        results += "<h2 style='text-align: center;'>Taco Shell: </h2>" + "<h3>" + json.shell.name + "</h3>";
        results += "<p style='text-align: center; border: 3px #465E16 solid; padding: 10px; margin-right: 300px; margin-left: 300px; margin-bottom: 50px;'>" + json.shell.recipe + "</p>";
        results += "<h2 style='text-align: center;'>Taco Filling: </h2>" + "<h3>" + json.base_layer.name + "</h3>";
        results += "<p style='text-align: center; border: 3px #465E16 solid; padding: 10px; margin-right: 300px; margin-left: 300px; margin-bottom: 50px;'>" + json.base_layer.recipe + "</p>";
        results += "<h2 style='text-align: center;'>Mix-in: </h2>" + "<h3>" + json.mixin.name + "</h3>";
        results += "<p style='text-align: center; border: 3px #465E16 solid; padding: 10px; margin-right: 300px; margin-left: 300px; margin-bottom: 50px;'>" + json.mixin.recipe + "</p>";
        results += "<h2 style='text-align: center;'>Seasoning: </h2>" + "<h3>" + json.seasoning.name + "</h3>";
        results += "<p style='text-align: center; border: 3px #465E16 solid; padding: 10px; margin-right: 300px; margin-left: 300px; margin-bottom: 50px;'>" + json.seasoning.recipe + "</p>";
        results += "<h2 style='text-align: center;'>Condiment: </h2>" + "<h3>" + json.condiment.name + "</h3>";
        results += "<p style='text-align: center; border: 3px #465E16 solid; padding: 10px; margin-right: 300px; margin-left: 300px; margin-bottom: 50px;'>" + json.condiment.recipe + "</p>";
        results += "<h2 style='text-align: center; margin-bottom: 50px;'>Enjoy your Taco! " + "<img src='images/dancingtaco.gif' width='50px'>" + "</h2>";
        document.getElementById("taco_info").innerHTML = results;
    });
});

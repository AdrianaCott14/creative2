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
        results += '<p>' + json.condiment.recipe + '</p>';s
        document.getElementById("taco_info").innerHTML = results;
    });
});

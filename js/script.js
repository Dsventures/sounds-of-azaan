new fullpage("#fullpage", {
  sectionsColor: ["#add8d7", "#add8d7"],
});

var cities = document.getElementsByClassName("cities");

for (var i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", function (e) {
    console.log(this.id);
  });
}

var dataset = {};

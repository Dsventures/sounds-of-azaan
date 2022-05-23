new fullpage("#fullpage", {
  licenseKey: "29D22B9D-244C4C74-87A11080-BE68FCC1",
  sectionsColor: ["#add8d7", "#add8d7"],
});

var cities = document.getElementsByClassName("cities");

for (var i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", function (e) {
    console.log(this.id);
  });
}

var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playAudio");
var count = 0;

function playPause() {
  if (count == 0) {
    count = 1;
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    count = 0;
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;";
  }
}
function stop() {
  audio.pause();
  audio.currentTime = 0;
  playPauseBtn.innerHTML = "&#9658;";
  count = 0;
}

var dataset = {};

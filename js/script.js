new fullpage("#fullpage", {
  licenseKey: "29D22B9D-244C4C74-87A11080-BE68FCC1",
  sectionsColor: ["#add8d7", "#add8d7"],
});

var cities = document.getElementsByClassName("cities");
var cityName = document.getElementById("cityName");
var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playAudio");

for (var i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", function (e) {
    console.log(this.id);
    cityName.innerHTML = this.id;
    audio.src =
      "https://dsventures.github.io/sounds-of-azaan/sound/" + this.id + ".mp3";
    document.getElementsByClassName("modelbox")[0].style.display = "block";
    playPause();
  });
}
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "none";
  stop();
});

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

var progressed = document.getElementById("progressed");

audio.ontimeupdate = function () {
  console.log("playing", (100 * audio.currentTime) / audio.duration);
  progressed.style.width = (100 * audio.currentTime) / audio.duration + "%";
};

var dataset = {
  Kochi: {
    state: "Kerala",
    desc: "",
  },
};

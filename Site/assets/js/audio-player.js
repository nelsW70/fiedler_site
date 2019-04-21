let player = $(".player"),
  audio = player.find("audio"),
  duration = $(".duration"),
  button = $(".play-btn"),
  currentTime = $(".current-time"),
  progressBar = $(".progress span"),
  mouseDown = false,
  rewind,
  showCurrentTime;

function secsToMins(time) {
  let int = Math.floor(time),
    mins = Math.floor(int / 60),
    secs = int % 60,
    newTime = mins + ":" + ("0" + secs).slice(-2);

  return newTime;
}

function getCurrentTime() {
  let currentTimeFormatted = secsToMins(audio[0].currentTime),
    currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

  currentTime.text(currentTimeFormatted);
  progressBar.css("width", currentTimePercentage + "%");

  if (player.hasClass("playing")) {
    showCurrentTime = requestAnimationFrame(getCurrentTime);
  } else {
    cancelAnimationFrame(showCurrentTime);
  }
}

audio
  .on("loadedmetadata", function() {
    let durationFormatted = secsToMins(audio[0].duration);
    duration.text(durationFormatted);
  })
  .on("ended", function() {
    player.removeClass("playing").addClass("paused");
    button.removeClass("stop").addClass("to-play");
    audio[0].currentTime = 0;
  });

$("#player-button").on("click", function() {
  let self = $(this);

  if (self.hasClass("play-pause") && player.hasClass("paused")) {
    player.removeClass("paused").addClass("playing");
    audio[0].play();
    getCurrentTime();
  } else if (self.hasClass("play-pause") && player.hasClass("playing")) {
    player.removeClass("playing").addClass("paused");
    audio[0].pause();
  }
});

player.on("mousedown mouseup", function() {
  mouseDown = !mouseDown;
});

progressBar.parent().on("click mousemove", function(e) {
  let self = $(this),
    totalWidth = self.width(),
    offsetX = e.offsetX,
    offsetPercentage = offsetX / totalWidth;

  if (mouseDown || e.type === "click") {
    audio[0].currentTime = audio[0].duration * offsetPercentage;
    if (player.hasClass("paused")) {
      progressBar.css("width", offsetPercentage * 100 + "%");
    }
  }
});

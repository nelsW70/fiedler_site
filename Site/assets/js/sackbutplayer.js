(function($) {
  let player1 = $(".player-one"),
    audio = player1.find("audio"),
    duration = $(".player-one .duration"),
    button = $(".play-btn1"),
    currentTime = $(".player-one .current-time"),
    progressBar = $(".player-one .progress span"),
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

    if (player1.hasClass("playing")) {
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
      player1.removeClass("playing").addClass("paused");
      button.removeClass("stop").addClass("to-play");
      audio[0].currentTime = 0;
    });

  $("#player-button1").on("click", function() {
    let self = $(this);

    if (self.hasClass("play-pause") && player1.hasClass("paused")) {
      player1.removeClass("paused").addClass("playing");
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass("play-pause") && player1.hasClass("playing")) {
      player1.removeClass("playing").addClass("paused");
      audio[0].pause();
    }
  });

  player1.on("mousedown mouseup", function() {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on("click mousemove", function(e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === "click") {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player1.hasClass("paused")) {
        progressBar.css("width", offsetPercentage * 100 + "%");
      }
    }
  });
})(jQuery);

(function($) {
  let player2 = $(".player-two"),
    audio = player2.find("audio"),
    duration = $(".player-two .duration"),
    button = $(".play-btn2"),
    currentTime = $(".player-two .current-time"),
    progressBar = $(".player-two .progress span"),
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

    if (player2.hasClass("playing")) {
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
      player2.removeClass("playing").addClass("paused");
      button.removeClass("stop").addClass("to-play");
      audio[0].currentTime = 0;
    });

  $("#player-button2").on("click", function() {
    let self = $(this);

    if (self.hasClass("play-pause") && player2.hasClass("paused")) {
      player2.removeClass("paused").addClass("playing");
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass("play-pause") && player2.hasClass("playing")) {
      player2.removeClass("playing").addClass("paused");
      audio[0].pause();
    }
  });

  player2.on("mousedown mouseup", function() {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on("click mousemove", function(e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === "click") {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player2.hasClass("paused")) {
        progressBar.css("width", offsetPercentage * 100 + "%");
      }
    }
  });
})(jQuery);

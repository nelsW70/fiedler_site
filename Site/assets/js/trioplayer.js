(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player1.find('audio'),
    duration = $('.player-one .duration'),
    button = $('.play-btn1'),
    currentTime = $('.player-one .current-time'),
    progressBar = $('.player-one .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player1.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player1.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button1').on('click', function () {
    let self = $(this);

    if (
      self.hasClass('play-pause') &&
      player1.hasClass('paused') &&
      player6.hasClass('playing')
    ) {
      document.getElementById('player-button6').click();
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player1.hasClass('paused') &&
      player5.hasClass('playing')
    ) {
      document.getElementById('player-button5').click();
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player1.hasClass('paused') &&
      player4.hasClass('playing')
    ) {
      document.getElementById('player-button4').click();
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player1.hasClass('paused') &&
      player3.hasClass('playing')
    ) {
      document.getElementById('player-button3').click();
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player1.hasClass('paused') &&
      player2.hasClass('playing')
    ) {
      document.getElementById('player-button2').click();
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player1.hasClass('paused')) {
      player1.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player1.hasClass('playing')) {
      player1.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player1.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player1.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player2.find('audio'),
    duration = $('.player-two .duration'),
    button = $('.play-btn2'),
    currentTime = $('.player-two .current-time'),
    progressBar = $('.player-two .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player2.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player2.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button2').on('click', function () {
    let self = $(this);
    if (
      self.hasClass('play-pause') &&
      player2.hasClass('paused') &&
      player6.hasClass('playing')
    ) {
      document.getElementById('player-button6').click();
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player2.hasClass('paused') &&
      player5.hasClass('playing')
    ) {
      document.getElementById('player-button5').click();
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player2.hasClass('paused') &&
      player4.hasClass('playing')
    ) {
      document.getElementById('player-button4').click();
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player2.hasClass('paused') &&
      player3.hasClass('playing')
    ) {
      document.getElementById('player-button3').click();
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player2.hasClass('paused') &&
      player1.hasClass('playing')
    ) {
      document.getElementById('player-button1').click();
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player2.hasClass('paused')) {
      player2.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player2.hasClass('playing')) {
      player2.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player2.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player2.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player3.find('audio'),
    duration = $('.player-three .duration'),
    button = $('.play-btn3'),
    currentTime = $('.player-three .current-time'),
    progressBar = $('.player-three .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player3.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player3.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button3').on('click', function () {
    let self = $(this);

    if (
      self.hasClass('play-pause') &&
      player3.hasClass('paused') &&
      player6.hasClass('playing')
    ) {
      document.getElementById('player-button6').click();
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player3.hasClass('paused') &&
      player5.hasClass('playing')
    ) {
      document.getElementById('player-button5').click();
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player3.hasClass('paused') &&
      player4.hasClass('playing')
    ) {
      document.getElementById('player-button4').click();
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player3.hasClass('paused') &&
      player2.hasClass('playing')
    ) {
      document.getElementById('player-button2').click();
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player3.hasClass('paused') &&
      player1.hasClass('playing')
    ) {
      document.getElementById('player-button1').click();
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player3.hasClass('paused')) {
      player3.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player3.hasClass('playing')) {
      player3.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player3.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player3.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player4.find('audio'),
    duration = $('.player-four .duration'),
    button = $('.play-btn4'),
    currentTime = $('.player-four .current-time'),
    progressBar = $('.player-four .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player4.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player4.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button4').on('click', function () {
    let self = $(this);

    if (
      self.hasClass('play-pause') &&
      player4.hasClass('paused') &&
      player6.hasClass('playing')
    ) {
      document.getElementById('player-button6').click();
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player4.hasClass('paused') &&
      player5.hasClass('playing')
    ) {
      document.getElementById('player-button5').click();
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player4.hasClass('paused') &&
      player3.hasClass('playing')
    ) {
      document.getElementById('player-button3').click();
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player4.hasClass('paused') &&
      player2.hasClass('playing')
    ) {
      document.getElementById('player-button2').click();
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player4.hasClass('paused') &&
      player1.hasClass('playing')
    ) {
      document.getElementById('player-button1').click();
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player4.hasClass('paused')) {
      player4.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player4.hasClass('playing')) {
      player4.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player4.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player4.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player5.find('audio'),
    duration = $('.player-five .duration'),
    button = $('.play-btn5'),
    currentTime = $('.player-five .current-time'),
    progressBar = $('.player-five .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player5.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player5.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button5').on('click', function () {
    let self = $(this);

    if (
      self.hasClass('play-pause') &&
      player5.hasClass('paused') &&
      player6.hasClass('playing')
    ) {
      document.getElementById('player-button6').click();
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player5.hasClass('paused') &&
      player4.hasClass('playing')
    ) {
      document.getElementById('player-button4').click();
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player5.hasClass('paused') &&
      player3.hasClass('playing')
    ) {
      document.getElementById('player-button3').click();
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player5.hasClass('paused') &&
      player2.hasClass('playing')
    ) {
      document.getElementById('player-button2').click();
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player5.hasClass('paused') &&
      player1.hasClass('playing')
    ) {
      document.getElementById('player-button1').click();
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player5.hasClass('paused')) {
      player5.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player5.hasClass('playing')) {
      player5.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player5.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player5.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  let player1 = $('.player-one'),
    player2 = $('.player-two'),
    player3 = $('.player-three'),
    player4 = $('.player-four'),
    player5 = $('.player-five'),
    player6 = $('.player-six'),
    audio = player6.find('audio'),
    duration = $('.player-six .duration'),
    button = $('.play-btn6'),
    currentTime = $('.player-six .current-time'),
    progressBar = $('.player-six .progress span'),
    mouseDown = false,
    rewind,
    showCurrentTime;

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);

    return newTime;
  }

  function getCurrentTime() {
    let currentTimeFormatted = secsToMins(audio[0].currentTime),
      currentTimePercentage = (audio[0].currentTime / audio[0].duration) * 100;

    currentTime.text(currentTimeFormatted);
    progressBar.css('width', currentTimePercentage + '%');

    if (player6.hasClass('playing')) {
      showCurrentTime = requestAnimationFrame(getCurrentTime);
    } else {
      cancelAnimationFrame(showCurrentTime);
    }
  }

  audio
    .on('loadedmetadata', function () {
      let durationFormatted = secsToMins(audio[0].duration);
      duration.text(durationFormatted);
    })
    .on('ended', function () {
      player6.removeClass('playing').addClass('paused');
      button.removeClass('stop').addClass('to-play');
      audio[0].currentTime = 0;
    });

  $('#player-button6').on('click', function () {
    let self = $(this);

    if (
      self.hasClass('play-pause') &&
      player6.hasClass('paused') &&
      player5.hasClass('playing')
    ) {
      document.getElementById('player-button5').click();
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player6.hasClass('paused') &&
      player4.hasClass('playing')
    ) {
      document.getElementById('player-button4').click();
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player6.hasClass('paused') &&
      player3.hasClass('playing')
    ) {
      document.getElementById('player-button3').click();
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player6.hasClass('paused') &&
      player2.hasClass('playing')
    ) {
      document.getElementById('player-button2').click();
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (
      self.hasClass('play-pause') &&
      player6.hasClass('paused') &&
      player1.hasClass('playing')
    ) {
      document.getElementById('player-button1').click();
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player6.hasClass('paused')) {
      player6.removeClass('paused').addClass('playing');
      audio[0].play();
      getCurrentTime();
    } else if (self.hasClass('play-pause') && player6.hasClass('playing')) {
      player6.removeClass('playing').addClass('paused');
      audio[0].pause();
    }
  });

  player6.on('mousedown mouseup', function () {
    mouseDown = !mouseDown;
  });

  progressBar.parent().on('click mousemove', function (e) {
    let self = $(this),
      totalWidth = self.width(),
      offsetX = e.offsetX,
      offsetPercentage = offsetX / totalWidth;

    if (mouseDown || e.type === 'click') {
      audio[0].currentTime = audio[0].duration * offsetPercentage;
      if (player6.hasClass('paused')) {
        progressBar.css('width', offsetPercentage * 100 + '%');
      }
    }
  });
})(jQuery);

(function ($) {
  const players = [
    {
      class: 'player-one',
      selector: '.player-one',
      buttonId: 'player-button1',
      btnClass: 'play-btn1',
      otherPlayers: [5, 4, 3, 2],
    },
    {
      class: 'player-two',
      selector: '.player-two',
      buttonId: 'player-button2',
      btnClass: 'play-btn2',
      otherPlayers: [5, 4, 3, 1],
    },
    {
      class: 'player-three',
      selector: '.player-three',
      buttonId: 'player-button3',
      btnClass: 'play-btn3',
      otherPlayers: [5, 4, 2, 1],
    },
    {
      class: 'player-four',
      selector: '.player-four',
      buttonId: 'player-button4',
      btnClass: 'play-btn4',
      otherPlayers: [5, 3, 2, 1],
    },
    {
      class: 'player-five',
      selector: '.player-five',
      buttonId: 'player-button5',
      btnClass: 'play-btn5',
      otherPlayers: [4, 3, 2, 1],
    },
    {
      class: 'player-six',
      selector: '.player-six',
      buttonId: 'player-button6',
      btnClass: 'play-btn6',
      otherPlayers: [5, 4, 3, 2, 1],
    },
  ];

  function secsToMins(time) {
    let int = Math.floor(time),
      mins = Math.floor(int / 60),
      secs = int % 60,
      newTime = mins + ':' + ('0' + secs).slice(-2);
    return newTime;
  }

  function initPlayer(config) {
    let playerEl = $(config.selector),
      audio = playerEl.find('audio'),
      duration = $(config.selector + ' .duration'),
      button = $('.' + config.btnClass),
      currentTime = $(config.selector + ' .current-time'),
      progressBar = $(config.selector + ' .progress span'),
      mouseDown = false,
      showCurrentTime;

    function getCurrentTime() {
      let currentTimeFormatted = secsToMins(audio[0].currentTime),
        currentTimePercentage =
          (audio[0].currentTime / audio[0].duration) * 100;

      currentTime.text(currentTimeFormatted);
      progressBar.css('width', currentTimePercentage + '%');

      if (playerEl.hasClass('playing')) {
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
        playerEl.removeClass('playing').addClass('paused');
        button.removeClass('stop').addClass('to-play');
        audio[0].currentTime = 0;
      });

    $('#' + config.buttonId).on('click', function () {
      let self = $(this);

      if (self.hasClass('play-pause') && playerEl.hasClass('paused')) {
        // Check if any other player is playing
        let playingPlayer = null;
        for (let playerNum of config.otherPlayers) {
          let otherPlayer = $(
            `.player-${['one', 'two', 'three', 'four', 'five'][playerNum - 1]}`,
          );
          if (otherPlayer.hasClass('playing')) {
            playingPlayer = playerNum;
            break;
          }
        }

        if (playingPlayer) {
          document.getElementById('player-button' + playingPlayer).click();
        }

        playerEl.removeClass('paused').addClass('playing');
        audio[0].play();
        getCurrentTime();
      } else if (self.hasClass('play-pause') && playerEl.hasClass('playing')) {
        playerEl.removeClass('playing').addClass('paused');
        audio[0].pause();
      }
    });

    playerEl.on('mousedown mouseup', function () {
      mouseDown = !mouseDown;
    });

    progressBar.parent().on('click mousemove', function (e) {
      let self = $(this),
        totalWidth = self.width(),
        offsetX = e.offsetX,
        offsetPercentage = offsetX / totalWidth;

      if (mouseDown || e.type === 'click') {
        audio[0].currentTime = audio[0].duration * offsetPercentage;
        if (playerEl.hasClass('paused')) {
          progressBar.css('width', offsetPercentage * 100 + '%');
        }
      }
    });
  }

  // Initialize all players
  players.forEach(config => initPlayer(config));
})(jQuery);

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Initialize play buttons with click handlers.
   */
  function initPlayButton(selector) {
    $(selector).click(function (e) {
      e.preventDefault();

      if ($(this).hasClass('stop')) {
        $(this).removeClass('stop').addClass('to-play');
      } else if (!$(this).hasClass('to-play')) {
        $(this).addClass('stop');
      }
    });
  }

  /**
   * Trigger the play button states upon clicking.
   */
  initPlayButton('.play-btn1');
  initPlayButton('.play-btn2');
  initPlayButton('.play-btn3');
  initPlayButton('.play-btn4');
  initPlayButton('.play-btn5');
  initPlayButton('.play-btn6');

  /**
   * Remove the 'to-play' class upon transition end.
   */
  $(document).on(transitionEnd, '.to-play', function () {
    $(this).removeClass('to-play');
  });
});

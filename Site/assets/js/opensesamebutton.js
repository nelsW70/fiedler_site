$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn').click(function (e) {
    e.preventDefault();

    if ($(this).hasClass('stop')) {
      $(this).removeClass('stop').addClass('to-play');
    } else if (!$(this).hasClass('to-play')) {
      $(this).addClass('stop');
    }
  });

  /**
   * Remove the 'to-play' class upon transition end.
   */
  $(document).on(transitionEnd, '.to-play', function () {
    $(this).removeClass('to-play');
  });
});

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn1').click(function (e) {
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

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn2').click(function (e) {
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

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn3').click(function (e) {
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

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn4').click(function (e) {
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

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn5').click(function (e) {
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

$(function () {
  /**
   * Store the transition end event names for convenience.
   */
  var transitionEnd =
    'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  /**
   * Trigger the play button states upon clicking.
   */
  $('.play-btn6').click(function (e) {
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

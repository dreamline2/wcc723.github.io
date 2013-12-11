(function() {
  $(function() {
    var $win, headerHeigth, navHeight;

    headerHeigth = $('.header').height();
    navHeight = $('.navigation').height();
    return $win = $(window).scroll(function() {
      if ($win.scrollTop() > (headerHeigth - navHeight)) {
        return $('.navigation').addClass('small');
      } else {
        return $('.navigation').removeClass('small');
      }
    });
  });

}).call(this);

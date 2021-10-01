"use strict";

var BS5Base = function () {
  var _dom = document.documentElement;

  var _navThrottle;

  function navBarBackdrop() {
    var scrollTop = _dom.scrollTop;
    var navBarEl = document.querySelector('[data-nav-scroll]');

    if (scrollTop === 0) {
      navBarEl.classList.remove('backdrop');
    } else {
      navBarEl.classList.add('backdrop');
    }
  }

  ;
  return {
    setNavBarScroll: function setNavBarScroll() {
      if (!_navThrottle) {
        _navThrottle = setTimeout(function () {
          _navThrottle = null;
          return navBarBackdrop();
        }, 100);
      }
    }
  };
}();

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', BS5Base.setNavBarScroll);
  document.querySelector('.navbar-toggler').addEventListener('click', function (e) {
    var navbarMenu = document.querySelector('.navbar-toggler');

    if (document.querySelector('.navbar-toggler').getAttribute('aria-expanded') == true) {}
  });
});
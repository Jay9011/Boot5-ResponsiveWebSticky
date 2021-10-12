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

  function _isInvalidOff(el) {
    el.classList.remove('is-invalid');
  }

  function _isValidOff(el) {
    el.classList.remove('is-valid');
  }

  function _invalidTooltipText(target, text) {
    document.querySelector(".invalid-tooltip[data-target=".concat(target, "]")).innerText = text;
  }

  function _validTooltipText(target, text) {
    document.querySelector(".valid-tooltip[data-target=".concat(target, "]")).innerText = text;
  }

  return {
    setNavBarScroll: function setNavBarScroll() {
      if (!_navThrottle) {
        _navThrottle = setTimeout(function () {
          _navThrottle = null;
          return navBarBackdrop();
        }, 100);
      }
    },
    isInvalidOff: function isInvalidOff(el) {
      _isInvalidOff(el);
    },
    isValidOff: function isValidOff(el) {
      _isValidOff(el);
    },
    invalidTooltipText: function invalidTooltipText(target, text) {
      _invalidTooltipText(target, text);
    },
    validTooltipText: function validTooltipText(target, text) {
      _validTooltipText(target, text);
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
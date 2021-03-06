"use strict";

var Jay9011Common = function () {
  // start deleteRegexOnkeyUp (num, en, num+en, hour, minute, custom)
  var _deleteRegexOnkeyUp = function deleteRegexOnkeyUp(type, el, pattern) {
    var regExp = undefined;

    if (pattern instanceof RegExp) {
      regExp = pattern;
    }

    switch (type) {
      case 'num':
        regExp = /[^\d]/gi;
        el.value = el.value.replace(regExp, '');
        break;

      case 'en':
        regExp = /[^a-zA-Z]/gi;
        el.value = el.value.replace(regExp, '');
        break;

      case 'num+en':
        regExp = /[^a-zA-Z\d]/gi;
        el.value = el.value.replace(regExp, '');
        break;

      case 'hour':
        if (parseInt(el.value, 10) > 23) {
          el.value = '23';
        }

        if (el.value.length == 1) {
          el.value = '0' + el.value;
        }

        if (el.value === '' || parseInt(el.value, 10) < 0 || el.value == '0') {
          el.value = '00';
        }

        break;

      case 'minute':
        if (parseInt(el.value, 10) > 59) {
          el.value = '59';
        }

        if (el.value.length == 1) {
          el.value = '0' + el.value;
        }

        if (el.value === '' || parseInt(el.value, 10) < 0 || el.value == '0') {
          el.value = '00';
        }

        break;

      case 'custom':
        el.value = el.value.replace(regExp, '');
        break;
    }
  }; // end keyPressOnly
  // start fnSelectChangerRemoveAndAddClass


  var _fnSelectChangerRemoveAndAddClass = function fnSelectChangerRemoveAndAddClass(selectEl, addClass, removeClass, otherAddClass, otherRemoveClass) {
    var addClassList = addClass ? addClass.split(' ') : '';
    var removeClassList = removeClass ? removeClass.split(' ') : '';
    var otherAddClassList = otherAddClass ? otherAddClass.split(' ') : '';
    var otherRemoveClassList = otherRemoveClass ? otherRemoveClass.split(' ') : ''; // all other Element in select values

    for (var i = 0; i < selectEl.length; i++) {
      var elementID = selectEl.options[i].value;
      var el = document.getElementById(elementID);

      if (elementID == selectEl.value) {
        for (var j = 0; j < removeClassList.length; j++) {
          if (removeClassList[j].trim() != "") {
            el.classList.remove(removeClassList[j]);
          }
        }

        for (var j = 0; j < addClassList.length; j++) {
          if (addClassList[j].trim() != "") {
            el.classList.add(addClassList[j]);
          }
        }
      } else {
        for (var j = 0; j < otherRemoveClassList.length; j++) {
          if (otherRemoveClassList[j].trim() != "") {
            el.classList.remove(otherRemoveClassList[j]);
          }
        }

        for (var j = 0; j < otherAddClassList.length; j++) {
          if (otherAddClassList[j].trim() != "") {
            el.classList.add(otherAddClassList[j]);
          }
        }
      }
    }
  }; // end fnSelectChangerRemoveAndAddClass
  // start fnInputValueOfBlur


  var _fnInputValueOfBlur = function fnInputValueOfBlur(blurEl, inputEl, beforeFuntion, afterFunction) {
    beforeFuntion();
    inputEl.value = blurEl.value;
    afterFunction();
  }; // end fnInputValueOfBlur
  // start fnSetInputValueOfKeyID


  var _fnSetInputValueOfKeyID = function fnSetInputValueOfKeyID(object) {
    var keyName = '';

    for (var i = 0; i < Object.keys(object).length; i++) {
      keyName = Object.keys(settingData)[i];
      document.getElementById(keyName).value = object[keyName];
    }
  }; // end fnSetInputValueOfKeyID
  // start fnImagePreviewOnFileInput


  var _fnImagePreviewOnFileInput = function fnImagePreviewOnFileInput(inputElID, imgElID) {
    var inputEl = document.getElementById(inputElID);
    var imgEl = document.getElementById(imgElID);

    if (inputEl.files && inputEl.files[0]) {
      var file = inputEl.files[0];

      if (!file.type.startsWith('image')) {
        return false;
      }

      var reader = new FileReader();

      reader.onload = function (e) {
        imgEl.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      imgEl.src = '';
    }

    return true;
  }; // end fnImagePreviewOnFileInput
  // start getDateFormat


  var _getDateFormat = function getDateFormat(date, format) {
    var result;

    if (format) {
      result = format;
    } else {
      result = 'yyyy-MM-ddThh:mm:ss';
    }

    var yyyy = date.getFullYear();
    var MM = ('00' + (date.getMonth() + 1)).slice(-2);
    var dd = ('00' + date.getDate()).slice(-2);
    var hh = ('00' + date.getHours()).slice(-2);
    var mm = ('00' + date.getMinutes()).slice(-2);
    var ss = ('00' + date.getSeconds()).slice(-2);
    result = result.replace('yyyy', yyyy).replace('YYYY', yyyy).replace('MM', MM).replace('dd', dd).replace('DD', dd).replace('hh', hh).replace('HH', hh).replace('mm', mm).replace('ss', ss);
    return result;
  }; // end getDateFormat
  // start getUrlParameterOfSearchTxt


  var _getUrlParameterOfSearchTxt = function getUrlParameterOfSearchTxt(searchTxt) {
    var params = searchTxt.substr(searchTxt.indexOf('?') + 1);
    var arrParams = params.split('&');
    var urlParameter = {};

    for (var i = 0; i < arrParams.length; i++) {
      var temp = arrParams[i].split('=');
      urlParameter[temp[0]] = temp[1];
    }

    return urlParameter;
  }; // end getUrlParameterOfSearchTxt
  // start fileSizeToString(beforeSize)


  var _fileSizeToString = function fileSizeToString(beforeSize) {
    var size = beforeSize;
    var sizeUnit = 0;
    var sizeText = '';

    while (true) {
      if (sizeUnit > 2 || size / 1024 < 1) {
        break;
      }

      size = size / 1024;
      sizeUnit++;
    }

    size = Math.round(size);

    switch (sizeUnit) {
      case 0:
        sizeText = size + ' Byte';
        break;

      case 1:
        sizeText = size + ' KB';
        break;

      case 2:
        sizeText = size + ' MB';
        break;

      default:
        sizeText = size + ' GB';
        break;
    }

    return sizeText;
  }; // end fileSizeToString(beforeSize)


  var _appendChildEL = function appendChildEL(el, name, value) {
    var inputEl = document.createElement('input');
    inputEl.type = 'hidden';
    inputEl.name = name;
    inputEl.value = value;
    el.appendChild(inputEl);
  }; // start touchAndClickEvent


  var _touchAndClickEvent = function touchAndClickEvent(tempVar, clickFn) {
    // ?????? ????????? ?????? ??????
    if ('ontouchstart' in document.documentElement) {
      // ?????? ?????? ??????????????????
      document.addEventListener('touchstart', function (e) {
        if (tempVar) {
          tempVar = null;
        } else {
          tempVar = clickFn;
        }
      });
      document.addEventListener('touchmove', function (e) {
        if (tempVar) {
          tempVar = null;
        }
      });
      document.addEventListener('touchend', function (e) {
        if (tempVar) {
          clickFn(e);
        }
      });
    } else {
      // ?????? ??????????????? ??????
      document.addEventListener('click', function (e) {
        clickFn(e);
      });
    }
  }; // end touchAndClickEvent
  // start checkCapsLockEvent


  var _checkCapsLockEvent = function checkCapsLockEvent(event, popover, el) {
    if (event instanceof KeyboardEvent) {
      if (event.getModifierState('CapsLock')) {
        popover.show();
      } else {
        popover.hide();
      }
    }
  }; // end checkCapsLockEvent
  // start checkCapsLockHideEvent


  var _checkCapsLockHideEvent = function checkCapsLockHideEvent(popover, el) {
    popover.hide();
  }; // end checkCapsLockHideEvent


  return {
    /**
     * (Function) keyup??? ????????? ????????? ?????? ?????????????????? ?????? ?????? ???????????? ????????????. (num, en, num+en, hour, minute, custom)
     * @param {string} type (num, en, num+en, hour, minute, custom)
     * @param {Element} el (element ??????)
     * @param {RegExp} pattern (regExp ??????, custom????????? ??????)
     */
    deleteRegexOnkeyUp: function deleteRegexOnkeyUp(type, el, pattern) {
      _deleteRegexOnkeyUp(type, el, pattern);
    },

    /**
     * (Function) select ????????? value??? ???????????? ID??? ?????? ????????? ?????? class??? ??????????????? ????????????. select ????????? ?????? ?????? value??? ???????????? otherClassList??? class??? ??????????????? ????????????.
     * @param {Element} selectEl (select ????????? ??????)
     * @param {string} addClass (value??? ???????????? ????????? ?????? class List)
     * @param {string} removeClass (value??? ???????????? ???????????? ????????? class List)
     * @param {string} otherAddClass (value ????????? ????????? ?????? class List)
     * @param {string} otherRemoveClass (value ????????? ???????????? ????????? class List)
     */
    fnSelectChangerRemoveAndAddClass: function fnSelectChangerRemoveAndAddClass(selectEl, addClass, removeClass, otherAddClass, otherRemoveClass) {
      _fnSelectChangerRemoveAndAddClass(selectEl, addClass, removeClass, otherAddClass, otherRemoveClass);
    },
    fnInputValueOfBlur: function fnInputValueOfBlur(blurEl, inputEl, beforeFuntion, afterFunction) {
      _fnInputValueOfBlur(blurEl, inputEl, beforeFuntion, afterFunction);
    },
    fnSetInputValueOfKeyID: function fnSetInputValueOfKeyID(object) {
      _fnSetInputValueOfKeyID(object);
    },
    fnImagePreviewOnFileInput: function fnImagePreviewOnFileInput(inputElID, imgElID) {
      _fnImagePreviewOnFileInput(inputElID, imgElID);
    },

    /**
     * ????????? ????????? ????????? ???????????? ????????????.
     * @param {Date} date ???????????? ??????????????? ?????? Date ??????
     * @param {string} format ??????????????? ?????? ?????? (yyyy-MM-ddThh:mm:ss)
     * @returns ????????? ??????
     */
    getDateFormat: function getDateFormat(date, format) {
      var result = _getDateFormat(date, format);

      return result;
    },

    /**
     * (Function) URL ??????????????? Object ????????? ????????????.
     * @param {string} searchTxt (URL??? ????????????)
     * @returns {Object} object {paramkey = value};
     */
    getUrlParameterOfSearchTxt: function getUrlParameterOfSearchTxt(searchTxt) {
      var result = _getUrlParameterOfSearchTxt(searchTxt);

      return result;
    },

    /**
     * Byte????????? ?????? ????????? ???????????? ???????????? ???????????????.
     * @param {number} beforeSize ??????????????? ?????? ????????????
     * @returns ????????? ????????? ?????? (sizeByte)
     */
    fileSizeToString: function fileSizeToString(beforeSize) {
      return _fileSizeToString(beforeSize);
    },

    /**
     * ?????? ??????????????? ????????? ????????? hidden ????????? input??? ????????????.
     * @param {Element} el ????????? ??????
     * @param {string} name input??? ??????
     * @param {string} value input??? ???
     * @returns 
     */
    appendChildEL: function appendChildEL(el, name, value) {
      return _appendChildEL(el, name, value);
    },
    touchAndClickEvent: function touchAndClickEvent(tempVar, clickFn) {
      return _touchAndClickEvent(tempVar, clickFn);
    },

    /**
     * CapsLock ???????????? ??????????????? ?????? popover??? ????????????.
     * @param {Event} event ????????? ??????
     * @param {bootstrap} popover popover ??????
     * @param {Element}} el popover ??????
     */
    checkCapsLockEvent: function checkCapsLockEvent(event, popover, el) {
      return _checkCapsLockEvent(event, popover, el);
    },

    /**
     * ?????? ???????????? ?????? ????????????.
     * @param {bootstrap} popover popover ??????
     * @param {Element} el popover ??????
     */
    checkCapsLockHideEvent: function checkCapsLockHideEvent(popover, el) {
      return _checkCapsLockHideEvent(popover, el);
    }
  };
}();

var Jay9011Spinner = function () {
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };
  var supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  function eventStop(e) {
    e.preventDefault();
  }

  function eventStopForKeys(e) {
    if (keys[e.keyCode]) {
      eventStop(e);
      return false;
    }
  }

  var scrollDisable = function scrollDisable() {
    window.addEventListener('DOMMouseScroll', eventStop, false);
    window.addEventListener(wheelEvent, eventStop, wheelOpt);
    window.addEventListener('touchmove', eventStop, wheelOpt);
    window.addEventListener('keydown', eventStopForKeys, false);
  };

  var scrollAble = function scrollAble() {
    window.removeEventListener('DOMMouseScroll', eventStop, false);
    window.removeEventListener(wheelEvent, eventStop, wheelOpt);
    window.removeEventListener('touchmove', eventStop, wheelOpt);
    window.removeEventListener('keydown', eventStopForKeys, false);
  };

  var install = function install() {
    var dom = document.createElement('div');
    var back = document.createElement('div');
    var img = document.createElement('div');
    var spinner1 = document.createElement('div');
    var spinner2 = document.createElement('div');
    var spinner3 = document.createElement('div');
    spinner1.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_100');
    spinner2.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_200');
    spinner3.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_300');
    dom.setAttribute('id', 'front_spinner');
    back.setAttribute('class', 'spinner_back');
    img.setAttribute('class', 'spinner_img');
    spinner1.setAttribute('role', 'status');
    spinner2.setAttribute('role', 'status');
    spinner3.setAttribute('role', 'status');
    img.appendChild(spinner1);
    img.appendChild(spinner2);
    img.appendChild(spinner3);
    back.appendChild(img);
    dom.appendChild(back);

    if (document.querySelector('#front_spinner')) {
      return;
    } else {
      document.querySelector('body').appendChild(dom);
      scrollDisable();
      setTimeout(function () {
        if (document.querySelector('#front_spinner .spinner_back')) {
          document.querySelector('#front_spinner .spinner_back').style.opacity = '1';
        }
      }, 10);
    }
  };

  var remove = function remove() {
    if (document.querySelector('#front_spinner')) {
      document.querySelector('#front_spinner').remove();
      scrollAble();
    } else {
      return;
    }
  };

  return {
    /**
     * Spinner ??????
     */
    showSpinner: function showSpinner() {
      return install();
    },

    /**
     * Spinner ??????
     */
    removeSpinner: function removeSpinner() {
      return remove();
    }
  };
}();

var $showSpinner = function $showSpinner() {
  Jay9011Spinner.showSpinner();
};

var $removeSpinner = function $removeSpinner() {
  Jay9011Spinner.removeSpinner();
};

document.addEventListener('click', function (event) {
  var type = event.target.dataset['type'];

  if (!type) {
    return false;
  } else {
    switch (type) {
      // ???????????? ?????? ?????? ?????????
      case 'checkGroup':
        var target = event.target;

        if (target.dataset['isparent'] === 'true') {
          // ?????? ????????????
          document.querySelectorAll("[data-group=".concat(target.dataset['group'], "]")).forEach(function (el) {
            el.checked = target.checked;
          });
        } else {
          // ?????? ????????? ???????????? (??????)
          var isChecked = true;
          var parentEl = document.querySelector("[data-group=".concat(target.dataset['group'], "][data-isparent=true]"));
          document.querySelectorAll("[data-group=".concat(target.dataset['group'], "][data-isparent=false]")).forEach(function (el) {
            isChecked = isChecked && el.checked;
          });
          parentEl.checked = isChecked;
        }

        break;

      default:
        break;
    }
  }
});
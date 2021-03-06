const Jay9011Common = (() => {
    // start deleteRegexOnkeyUp (num, en, num+en, hour, minute, custom)
    const deleteRegexOnkeyUp = (type, el, pattern) => {
        let regExp = undefined;
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
    }
    // end keyPressOnly
    // start fnSelectChangerRemoveAndAddClass
    const fnSelectChangerRemoveAndAddClass = (selectEl, addClass, removeClass, otherAddClass, otherRemoveClass) => {
        let addClassList = addClass ? addClass.split(' ') : '';
        let removeClassList = removeClass ? removeClass.split(' ') : '';
        let otherAddClassList = otherAddClass ? otherAddClass.split(' ') : '';
        let otherRemoveClassList = otherRemoveClass ? otherRemoveClass.split(' ') : '';
        // all other Element in select values
        for (var i = 0; i < selectEl.length; i++) {
            let elementID = selectEl.options[i].value;
            let el = document.getElementById(elementID);
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
    }
    // end fnSelectChangerRemoveAndAddClass
    // start fnInputValueOfBlur
    const fnInputValueOfBlur = (blurEl, inputEl, beforeFuntion, afterFunction) => {
        beforeFuntion();
        inputEl.value = blurEl.value;
        afterFunction();
    }
    // end fnInputValueOfBlur
    // start fnSetInputValueOfKeyID
    const fnSetInputValueOfKeyID = (object) => {
        let keyName = '';
        for (var i = 0; i < Object.keys(object).length; i++) {
            keyName = Object.keys(settingData)[i];
            document.getElementById(keyName).value = object[keyName];
        }
    }
    // end fnSetInputValueOfKeyID
    // start fnImagePreviewOnFileInput
    const fnImagePreviewOnFileInput = (inputElID, imgElID) => {
        const inputEl = document.getElementById(inputElID);
        const imgEl = document.getElementById(imgElID);
        if (inputEl.files && inputEl.files[0]) {
            let file = inputEl.files[0];
            if (!file.type.startsWith('image')) {
                return false;
            }
            const reader = new FileReader();

            reader.onload = e => {
                imgEl.src = e.target.result;
            }

            reader.readAsDataURL(file);
        } else {
            imgEl.src = '';
        }
        return true;
    }
    // end fnImagePreviewOnFileInput
    // start getDateFormat
    const getDateFormat = (date, format) => {
        let result;
        if (format) {
            result = format;
        } else {
            result = 'yyyy-MM-ddThh:mm:ss';
        }
        let yyyy = date.getFullYear();
        let MM = ('00' + (date.getMonth() + 1)).slice(-2);
        let dd = ('00' + date.getDate()).slice(-2);
        let hh = ('00' + date.getHours()).slice(-2);
        let mm = ('00' + date.getMinutes()).slice(-2);
        let ss = ('00' + date.getSeconds()).slice(-2);

        result = result.replace('yyyy', yyyy).replace('YYYY', yyyy).replace('MM', MM).replace('dd', dd).replace('DD', dd).replace('hh', hh).replace('HH', hh).replace('mm', mm).replace('ss', ss);

        return result;
    }
    // end getDateFormat
    // start getUrlParameterOfSearchTxt
    const getUrlParameterOfSearchTxt = (searchTxt) => {
        var params = searchTxt.substr(searchTxt.indexOf('?') + 1);
        var arrParams = params.split('&');
        var urlParameter = {};
        for (var i = 0; i < arrParams.length; i++) {
            var temp = arrParams[i].split('=');
            urlParameter[temp[0]] = temp[1];
        }
        return urlParameter;
    }
    // end getUrlParameterOfSearchTxt
    // start fileSizeToString(beforeSize)
    const fileSizeToString = (beforeSize) => {
        let size = beforeSize;
        let sizeUnit = 0;
        let sizeText = '';
        while (true) {
            if (sizeUnit > 2 || (size / 1024) < 1) {
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
    }
    // end fileSizeToString(beforeSize)
    const appendChildEL = (el, name, value) => {
        let inputEl = document.createElement('input');
        inputEl.type = 'hidden';
        inputEl.name = name;
        inputEl.value = value;
        el.appendChild(inputEl);
    }
    // start touchAndClickEvent
    const touchAndClickEvent = (tempVar, clickFn) => {
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
    }
    // end touchAndClickEvent
    // start checkCapsLockEvent
    const checkCapsLockEvent = (event, popover, el) => {
        if (event instanceof KeyboardEvent) {
            if (event.getModifierState('CapsLock')) {
                popover.show();
            } else {
                popover.hide();
            }
        }
    }
    // end checkCapsLockEvent
    // start checkCapsLockHideEvent
    const checkCapsLockHideEvent = (popover, el) => {
        popover.hide();
    }
    // end checkCapsLockHideEvent
    return {
        /**
         * (Function) keyup??? ????????? ????????? ?????? ?????????????????? ?????? ?????? ???????????? ????????????. (num, en, num+en, hour, minute, custom)
         * @param {string} type (num, en, num+en, hour, minute, custom)
         * @param {Element} el (element ??????)
         * @param {RegExp} pattern (regExp ??????, custom????????? ??????)
         */
        deleteRegexOnkeyUp: (type, el, pattern) => {
            deleteRegexOnkeyUp(type, el, pattern);
        },
        /**
         * (Function) select ????????? value??? ???????????? ID??? ?????? ????????? ?????? class??? ??????????????? ????????????. select ????????? ?????? ?????? value??? ???????????? otherClassList??? class??? ??????????????? ????????????.
         * @param {Element} selectEl (select ????????? ??????)
         * @param {string} addClass (value??? ???????????? ????????? ?????? class List)
         * @param {string} removeClass (value??? ???????????? ???????????? ????????? class List)
         * @param {string} otherAddClass (value ????????? ????????? ?????? class List)
         * @param {string} otherRemoveClass (value ????????? ???????????? ????????? class List)
         */
        fnSelectChangerRemoveAndAddClass: (selectEl, addClass, removeClass, otherAddClass, otherRemoveClass) => {
            fnSelectChangerRemoveAndAddClass(selectEl, addClass, removeClass, otherAddClass, otherRemoveClass);
        },
        fnInputValueOfBlur: (blurEl, inputEl, beforeFuntion, afterFunction) => {
            fnInputValueOfBlur(blurEl, inputEl, beforeFuntion, afterFunction);
        },
        fnSetInputValueOfKeyID: (object) => {
            fnSetInputValueOfKeyID(object);
        },
        fnImagePreviewOnFileInput: (inputElID, imgElID) => {
            fnImagePreviewOnFileInput(inputElID, imgElID);
        },
        /**
         * ????????? ????????? ????????? ???????????? ????????????.
         * @param {Date} date ???????????? ??????????????? ?????? Date ??????
         * @param {string} format ??????????????? ?????? ?????? (yyyy-MM-ddThh:mm:ss)
         * @returns ????????? ??????
         */
        getDateFormat: (date, format) => {
            var result = getDateFormat(date, format);
            return result;
        },
        /**
         * (Function) URL ??????????????? Object ????????? ????????????.
         * @param {string} searchTxt (URL??? ????????????)
         * @returns {Object} object {paramkey = value};
         */
        getUrlParameterOfSearchTxt: (searchTxt) => {
            var result = getUrlParameterOfSearchTxt(searchTxt);
            return result;
        },
        /**
         * Byte????????? ?????? ????????? ???????????? ???????????? ???????????????.
         * @param {number} beforeSize ??????????????? ?????? ????????????
         * @returns ????????? ????????? ?????? (sizeByte)
         */
        fileSizeToString: (beforeSize) => {
            return fileSizeToString(beforeSize);
        },
        /**
         * ?????? ??????????????? ????????? ????????? hidden ????????? input??? ????????????.
         * @param {Element} el ????????? ??????
         * @param {string} name input??? ??????
         * @param {string} value input??? ???
         * @returns 
         */
        appendChildEL: (el, name, value) => {
            return appendChildEL(el, name, value);
        },
        touchAndClickEvent: (tempVar, clickFn) => {
            return touchAndClickEvent(tempVar, clickFn);
        },
        /**
         * CapsLock ???????????? ??????????????? ?????? popover??? ????????????.
         * @param {Event} event ????????? ??????
         * @param {bootstrap} popover popover ??????
         * @param {Element}} el popover ??????
         */
        checkCapsLockEvent: (event, popover, el) => {
            return checkCapsLockEvent(event, popover, el);
        },
        /**
         * ?????? ???????????? ?????? ????????????.
         * @param {bootstrap} popover popover ??????
         * @param {Element} el popover ??????
         */
        checkCapsLockHideEvent: (popover, el) => {
            return checkCapsLockHideEvent(popover, el);
        }
    }
})();
const Jay9011Spinner = (() => {
    let keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    }
    let supportsPassive = false;
    try {
        let opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
    } catch (e) {}
    let wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    function eventStop(e) {
        e.preventDefault();
    }

    function eventStopForKeys(e) {
        if (keys[e.keyCode]) {
            eventStop(e);
            return false;
        }
    }

    const scrollDisable = () => {
        window.addEventListener('DOMMouseScroll', eventStop, false);
        window.addEventListener(wheelEvent, eventStop, wheelOpt);
        window.addEventListener('touchmove', eventStop, wheelOpt);
        window.addEventListener('keydown', eventStopForKeys, false);
    }
    const scrollAble = () => {
        window.removeEventListener('DOMMouseScroll', eventStop, false);
        window.removeEventListener(wheelEvent, eventStop, wheelOpt);
        window.removeEventListener('touchmove', eventStop, wheelOpt);
        window.removeEventListener('keydown', eventStopForKeys, false);
    }
    const install = () => {
        let dom = document.createElement('div');
        let back = document.createElement('div');
        let img = document.createElement('div');
        let spinner1 = document.createElement('div');
        let spinner2 = document.createElement('div');
        let spinner3 = document.createElement('div');
        spinner1.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_100');
        spinner2.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_200');
        spinner3.setAttribute('class', 'spinner-grow spinner-grow-sm text-primary animation_delay_300');
        dom.setAttribute('id', 'front_spinner')
        back.setAttribute('class', 'spinner_back')
        img.setAttribute('class', 'spinner_img')
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
            setTimeout(() => {
                if (document.querySelector('#front_spinner .spinner_back')) {
                    document.querySelector('#front_spinner .spinner_back').style.opacity = '1';
                }
            }, 10);
        }
    }
    const remove = () => {
        if (document.querySelector('#front_spinner')) {
            document.querySelector('#front_spinner').remove();
            scrollAble();
        } else {
            return;
        }
    }
    return {
        /**
         * Spinner ??????
         */
        showSpinner: () => {
            return install();
        },
        /**
         * Spinner ??????
         */
        removeSpinner: () => {
            return remove();
        }
    }
})();
let $showSpinner = () => {
    Jay9011Spinner.showSpinner();
}
let $removeSpinner = () => {
    Jay9011Spinner.removeSpinner();
}

document.addEventListener('click', (event) => {
    let type = event.target.dataset['type'];

    if (!type) {
        return false;
    } else {
        switch (type) {
            // ???????????? ?????? ?????? ?????????
            case 'checkGroup':
                let target = event.target;
                if (target.dataset['isparent'] === 'true') {
                    // ?????? ????????????
                    document.querySelectorAll(`[data-group=${target.dataset['group']}]`).forEach((el) => {
                        el.checked = target.checked;
                    });
                } else {
                    // ?????? ????????? ???????????? (??????)
                    let isChecked = true;
                    let parentEl = document.querySelector(`[data-group=${target.dataset['group']}][data-isparent=true]`);
                    document.querySelectorAll(`[data-group=${target.dataset['group']}][data-isparent=false]`).forEach((el) => {
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
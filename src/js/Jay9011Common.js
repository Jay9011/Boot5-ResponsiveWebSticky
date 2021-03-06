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
        // 클릭 이벤트 발생 감지
        if ('ontouchstart' in document.documentElement) {
            // 터치 가능 디바이스에서
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
            // 클릭 이벤트로만 등록
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
         * (Function) keyup시 유효성 검사를 하고 유효성검사에 맞지 않는 텍스트는 제거한다. (num, en, num+en, hour, minute, custom)
         * @param {string} type (num, en, num+en, hour, minute, custom)
         * @param {Element} el (element 요소)
         * @param {RegExp} pattern (regExp 패턴, custom일때만 사용)
         */
        deleteRegexOnkeyUp: (type, el, pattern) => {
            deleteRegexOnkeyUp(type, el, pattern);
        },
        /**
         * (Function) select 요소의 value에 해당하는 ID를 가진 요소를 찾아 class를 추가하거나 제거한다. select 요소가 가진 다른 value의 요소들은 otherClassList의 class를 추가하거나 제거한다.
         * @param {Element} selectEl (select 타입의 요소)
         * @param {string} addClass (value에 해당하는 요소에 넣을 class List)
         * @param {string} removeClass (value에 해당하는 요소에서 제거할 class List)
         * @param {string} otherAddClass (value 이외의 요소에 넣을 class List)
         * @param {string} otherRemoveClass (value 이외의 요소에서 제거할 class List)
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
         * 날짜를 원하는 형태의 문자열로 변환한다.
         * @param {Date} date 문자열로 변환하고자 하는 Date 객체
         * @param {string} format 변환하고자 하는 형식 (yyyy-MM-ddThh:mm:ss)
         * @returns 변환된 문자
         */
        getDateFormat: (date, format) => {
            var result = getDateFormat(date, format);
            return result;
        },
        /**
         * (Function) URL 파라미터를 Object 형태로 변환한다.
         * @param {string} searchTxt (URL의 파라미터)
         * @returns {Object} object {paramkey = value};
         */
        getUrlParameterOfSearchTxt: (searchTxt) => {
            var result = getUrlParameterOfSearchTxt(searchTxt);
            return result;
        },
        /**
         * Byte단위의 파일 사이즈 텍스트를 단위별로 변환시킨다.
         * @param {number} beforeSize 변환하고자 하는 파일크기
         * @returns 변환된 크기와 단위 (sizeByte)
         */
        fileSizeToString: (beforeSize) => {
            return fileSizeToString(beforeSize);
        },
        /**
         * 특정 엘리먼트의 마지막 위치에 hidden 타입의 input을 추가한다.
         * @param {Element} el 삽입할 요소
         * @param {string} name input의 이름
         * @param {string} value input의 값
         * @returns 
         */
        appendChildEL: (el, name, value) => {
            return appendChildEL(el, name, value);
        },
        touchAndClickEvent: (tempVar, clickFn) => {
            return touchAndClickEvent(tempVar, clickFn);
        },
        /**
         * CapsLock 이벤트가 필터링되면 해당 popover를 토글한다.
         * @param {Event} event 이벤트 객체
         * @param {bootstrap} popover popover 객체
         * @param {Element}} el popover 요소
         */
        checkCapsLockEvent: (event, popover, el) => {
            return checkCapsLockEvent(event, popover, el);
        },
        /**
         * 해당 팝오버를 숨김 처리한다.
         * @param {bootstrap} popover popover 객체
         * @param {Element} el popover 요소
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
         * Spinner 실행
         */
        showSpinner: () => {
            return install();
        },
        /**
         * Spinner 제거
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
            // 체크박스 그룹 클릭 이벤트
            case 'checkGroup':
                let target = event.target;
                if (target.dataset['isparent'] === 'true') {
                    // 부모 요소라면
                    document.querySelectorAll(`[data-group=${target.dataset['group']}]`).forEach((el) => {
                        el.checked = target.checked;
                    });
                } else {
                    // 부모 요소가 아니라면 (개인)
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
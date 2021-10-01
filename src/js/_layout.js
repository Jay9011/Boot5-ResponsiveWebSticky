const customLayout = (() => {
    function activeNowPage(page, dataPage, className) {
        document.querySelectorAll(`[data-page="${dataPage}"]`).forEach((el) => {
            if (el) {
                try {
                    el.classList.add(className);
                } catch (error) {

                }
            }
        });
    }
    return {
        /**
         * data-page를 검색해서 해당 data-page 값을 가진 요소들에 class를 추가한다.
         * @param {string}} page data-page를 검색할 문자열
         * @param {string} dataPage 검색 할 data-page 값
         * @param {string} className 추가 할 class명
         */
        activeNowPage: (page, dataPage, className) => {
            return activeNowPage(page, dataPage, className);
        }
    }
})();
window.onload = () => {
    document.querySelector('#mainContent').style.backgroundPosition = 'center';
}

// Cookie 관련
/**
 * 쿠키 설정
 * @param {string} name 쿠키명
 * @param {*} value 쿠키값
 * @param {*} expires 만료시간
 */
function setCookie(name, value, expires) {
    document.cookie = `${name}=${escape(value)}; path=/; expires=${expires.toGMTString()}`;
}
/**
 * 쿠키 가져오기
 * @param {string} Name 쿠키명
 * @returns 쿠키를 가져온다.
 */
function getCookie(Name) {
    let search = Name + "="
    if (document.cookie.length > 0) {
        let offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            let end = document.cookie.indexOf(";", offset)
            if (end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
    }
    return "";
}
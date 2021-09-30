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
});
window.onload = () => {
    document.querySelector('#mainContent').style.backgroundPosition = 'center';
}
const BS5Base = (() => {
    const _dom = document.documentElement;
    let _navThrottle;

    function navBarBackdrop() {
        const {
            scrollTop
        } = _dom;
        const navBarEl = document.querySelector('[data-nav-scroll]');
        if (scrollTop === 0) {
            navBarEl.classList.remove('backdrop');
        } else {
            navBarEl.classList.add('backdrop');
        }
    };
    return {
        setNavBarScroll: () => {
            if (!_navThrottle) {
                _navThrottle = setTimeout(() => {
                    _navThrottle = null;
                    return navBarBackdrop();
                }, 100);
            }
        }
    };
})();
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', BS5Base.setNavBarScroll);
    document.querySelector('.navbar-toggler').addEventListener('click', (e) => {
        const navbarMenu = document.querySelector('.navbar-toggler');
        if (document.querySelector('.navbar-toggler').getAttribute('aria-expanded') == true) {

        }
    });
});
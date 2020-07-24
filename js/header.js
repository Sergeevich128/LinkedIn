const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];
const searchContainer = document.getElementsByClassName('search-container')[0];

document.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu-js');
    let menuName = '';

    if (parent) {
        menuName = parent.dataset.menu;
    }
    if (window.matchMedia("(max-width: 767px)").matches) {
        if (parent === searchContainer) return;
    }

    body.setAttribute(
        'data-menu',
        body.dataset.menu === menuName ? '' : menuName
    );
});

header.addEventListener('click', (event) => {
    if (event.target.closest('.search-container')) {
        header.className = 'active-search';
    } else if (event.target.closest('.user-data')) {
        header.className = 'active-user';
    }
});
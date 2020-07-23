const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];
const searchContainer = document.getElementsByClassName('search-container')[0];
const userData = document.getElementsByClassName('user-data')[0];
const menuBurger = document.getElementsByClassName('menu-burger')[0];

document.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu-js');
    let menuName = '';

    if (parent) {
        menuName = parent.dataset.menu;
    }
    body.setAttribute(
        'data-menu',
        body.dataset.menu === menuName ? '' : menuName
    );
});

header.addEventListener('click', (event) => {
    event.target.closest('.search-container') ?
        header.className = 'active-search' :
        header.className = 'active-data';
    // if (event.target.closest('.search-container')) {
    //     header.className = 'active-search';
    //     return;
    // }
    // header.className = 'active-data';
});
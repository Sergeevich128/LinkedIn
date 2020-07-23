const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];

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

document.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu-switch');
    if (parent) {
        header.setAttribute('data-menu', parent.dataset.menu);
    }
});
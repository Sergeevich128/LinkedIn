const header = document.getElementsByTagName('header')[0];
const body = document.getElementsByTagName('body')[0];

document.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu-js');
    if (parent) {
        if (parent.dataset.menu === body.dataset.menu) {
            body.setAttribute('data-menu', '');
            console.log(parent)
        } 
        else {
            body.setAttribute('data-menu', parent.dataset.menu);
            console.log(parent)
        }
    } 
    else {
        body.setAttribute('data-menu', '');
    }
});

document.addEventListener('click', (event) => {
    const parent = event.target.closest('.menu-switch');
    if (parent) {
            header.setAttribute('data-menu', parent.dataset.menu);
    } 
});
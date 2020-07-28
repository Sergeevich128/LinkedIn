const content = document.getElementsByClassName('content')[0];
const buttons = document.getElementsByClassName('buttons')[0];
const buttonsInfo = document.getElementsByClassName('buttons-info')[0];
const buttonsFastAccess = document.getElementsByClassName('fast-access')[0];

buttons.addEventListener('click', (event) => {
    const link = event.target.closest('div.button');
    if (link) {
        buttons.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

buttonsInfo.addEventListener('click', (event) => {
    const link = event.target.closest('button.button-info');
    if (link) {
        buttonsInfo.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

content.addEventListener('click', (event) => {
    let elem = event.target.closest('.link');
    if (elem) {
        elem.parentNode.classList.toggle('active')
        elem.parentNode.classList.contains('active') ?
            elem.previousElementSibling.style.maxHeight = `${elem.previousElementSibling.scrollHeight}px` :
            elem.previousElementSibling.style.maxHeight = ``;
    }
});

// buttonsFastAccess.addEventListener('click', function(event) {
//     const link = event.target.closest('div.button-footer');
//     if (link) {
//         buttonsFastAccess.getElementsByClassName('active')[0].classList.remove('active');
//         link.classList.add('active');
//     }
// });
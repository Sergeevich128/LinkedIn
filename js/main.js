const main = document.getElementsByTagName('main')[0];
const buttons = document.getElementsByClassName('buttons')[0];
const buttonsInfo = document.getElementsByClassName('buttons-info')[0];
const buttonsFastAccess = document.getElementsByClassName('fast-access')[0];
const link = document.getElementsByClassName('link')[0];
const inputMore = document.getElementsByClassName('input-more');

buttons.addEventListener('click', event => {
    const link = event.target.closest('div.button');
    if (link) {
        buttons.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

buttonsInfo.addEventListener('click', event => {
    const link = event.target.closest('button.button-info');
    if (link) {
        buttonsInfo.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

main.addEventListener('click', event => {
    const elem = event.target.closest('.input-more');
    if (elem && elem.checked) {
        const prev = elem.previousElementSibling.innerText;// пытаюсь сохранить изначальное значение, но не получается.
        //Делаю это для того, потому что везде разное значение (show all(17), show all(13), see more)
        console.log(prev)
        elem.previousElementSibling.innerText = 'show less'; // меняю текст у span на 'show less'
    } else if (elem) {
        // elem.previousElementSibling.innerText = 'Show all(17)';
        elem.previousElementSibling.innerText = prev; // хочу поменять 'show less' на изначальное значение,
        // которое не смог сохранить		
    }
});

// buttonsFastAccess.addEventListener('click', function(event) {
//     const link = event.target.closest('div.button-footer');
//     if (link) {
//         buttonsFastAccess.getElementsByClassName('active')[0].classList.remove('active');
//         link.classList.add('active');
//     }
// });
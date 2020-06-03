const buttons = document.getElementsByClassName('buttons')[0];

buttons.addEventListener('click', function(event) {
    const link = event.target.closest('div.button');
    if (link) {
        buttons.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

const buttonsInfo = document.getElementsByClassName('buttons-info')[0];

buttonsInfo.addEventListener('click', function(event) {
    const link = event.target.closest('button.button-info');
    if (link) {
        buttonsInfo.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});

const buttonsFastAccess = document.getElementsByClassName('fast-access')[0];

buttonsFastAccess.addEventListener('click', function(event) {
    const link = event.target.closest('div.button-footer');
    if (link) {
        buttonsFastAccess.getElementsByClassName('active')[0].classList.remove('active');
        link.classList.add('active');
    }
});
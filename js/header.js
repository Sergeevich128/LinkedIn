const userData = document.getElementsByClassName('user-data')[0];
const userAvatar = document.getElementsByClassName('user-avatar')[0];
const userInfo = document.getElementsByClassName('user-information')[0];
const searchContainer = document.getElementsByClassName('search-container')[0];
const iconSearch = document.getElementsByClassName('icon-search')[0];
const input = document.getElementsByClassName('search')[0];

const menuBtn = document.getElementsByClassName('menu-btn')[0];
const menuLinks = document.getElementsByClassName('menu-links')[0];


searchContainer.addEventListener('click', function(event) {
    if (input.classList.contains('none')) {
        input.classList.remove('none');
        userInfo.classList.add('none');
        userAvatar.classList.add('auto');
        iconSearch.classList.remove('auto');
    }
});

userData.addEventListener('click', function(event) {
    if (userInfo.classList.contains('none')) {
        userInfo.classList.remove('none');
        input.classList.add('none');
        userAvatar.classList.remove('auto');
        iconSearch.classList.add('auto');
    }
});


menuBtn.addEventListener('click', function(event) {
    if (menuBtn.classList.contains('menu-btn-active')) {
        menuBtn.classList.remove('menu-btn-active');
        menuLinks.classList.add('menu-none');
    } else {
        menuBtn.classList.add('menu-btn-active');
        menuLinks.classList.remove('menu-none');
    }
})
const userData = document.getElementsByClassName('user-data')[0];
const userAvatar = document.getElementsByClassName('user-avatar')[0];
const userInfo = document.getElementsByClassName('user-information')[0];
const searchContainer = document.getElementsByClassName('search-container')[0];
const iconSearch = document.getElementsByClassName('icon-search')[0];
const input = document.getElementsByClassName('search')[0];

const menuBtn = document.getElementsByClassName('menu-btn')[0];
const navigation = document.getElementsByClassName('navigation')[0];

const profileMore = document.getElementsByClassName('profile-more')[0];
const userInformation = document.getElementsByClassName('user-information')[0];
const svgMore = profileMore.getElementsByTagName('svg')[0];


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
        navigation.classList.add('menu-none');
        navigation.classList.remove('menu-show');
    } else {
        menuBtn.classList.add('menu-btn-active');
        navigation.classList.remove('menu-none');
        navigation.classList.add('menu-show');
        userInformation.classList.add('info-none');
        profileMore.classList.remove('profile-active');
        svgMore.classList.remove('svg-rotate');

    }
});


profileMore.addEventListener('click', function(event) {
    if (userInformation.classList.contains('info-none')) {
        userInformation.classList.remove('info-none');
        navigation.classList.add('menu-none');
        menuBtn.classList.remove('menu-btn-active');
        svgMore.classList.add('svg-rotate');
        profileMore.classList.add('profile-active');
    } else {
        userInformation.classList.add('info-none');
        menuBtn.classList.remove('menu-btn-active');
        svgMore.classList.remove('svg-rotate');
        profileMore.classList.remove('profile-active');
    }
});


const header = document.getElementsByTagName('header')[0];
const userData = document.getElementsByClassName('user-data')[0];
const userInfo = document.getElementsByClassName('user-information')[0];
const searchContainer = document.getElementsByClassName('search-container')[0];
const menuBtn = document.getElementsByClassName('menu-btn')[0];
const navigation = document.getElementsByClassName('navigation')[0];
const profileMore = document.getElementsByClassName('profile-more')[0];

header.addEventListener('click', (event) => {
    if (event.target === searchContainer) {
        searchContainer.classList.add('active');
        userData.classList.remove('active');
    }

    if (event.target === userData) {
        userData.classList.add('active');
        searchContainer.classList.remove('active');
    }

    if (event.target === menuBtn) {
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        } else {
            menuBtn.classList.add('active');
            navigation.classList.add('active');
            profileMore.classList.remove('active');
            userInfo.classList.remove('active');
        }
    }

    if (event.target === profileMore) {
        if (profileMore.classList.contains('active')) {
            profileMore.classList.remove('active');
            userInfo.classList.remove('active');
        } else {
            profileMore.classList.add('active');
            userInfo.classList.add('active');
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        }
    }
});




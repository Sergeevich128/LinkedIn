const header = document.getElementsByTagName('header')[0];

document.addEventListener('click', (event) => {
    const elem = event.target;
    if (elem.closest('.menu-btn')) {
        header.classList.toggle('active-btn');
    } else if (elem.closest('.profile-more')) {
        header.classList.toggle('active-profile');
        return;
    } else if (elem.closest('.other')) {
        header.classList.toggle('active-other');
    } else if (elem.closest('.icon-menu')) {
        header.classList.toggle('active-menu');
    } else if (elem.closest('.icon-other')) {
        header.classList.toggle('active-other');
    }

    if (elem.closest('.search-container')) {
        header.className = 'active-search';
    } else if (elem.closest('.user-data')) {
        header.className = '';
    }
});




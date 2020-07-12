const header = document.getElementsByTagName('header')[0];

document.addEventListener('click', (event) => {
    const elem = event.target;
    header.classList.remove('active-btn', 'active-profile', 'active-other');
    if (elem.closest('.menu-btn')) {
        header.classList.toggle('active-btn');
        console.log('click')
    } else if (elem.closest('.profile-more')) {
        header.classList.toggle('active-profile');
        return;
    } else if (elem.closest('.other')) {
        header.classList.toggle('active-other');
    }

    if (elem.closest('.search-container')) {
        header.className = 'active-search';
    } else if (elem.closest('.user-data')) {
        header.className = '';
    }
});
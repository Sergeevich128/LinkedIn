const skillsContainer = document.getElementsByClassName('skills')[0];

const skills = [
	{
        id: 1,
        title: 'User experience (UX)',
        images: [
            'images/avatars/photo.png',
            'images/avatars/photo1.png',
            'images/avatars/photo2.png',
            'images/avatars/photo3.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    },
    {
        id: 2,
        title: 'User interface (UI)',
        images: [
            'images/avatars/photo5.png',
            'images/avatars/photo1.png',
            'images/avatars/photo6.png',
            'images/avatars/photo7.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    },
    {
        id: 3,
        title: 'Brand identity',
        images: [
            'images/avatars/photo7.png',
            'images/avatars/photo4.png',
            'images/avatars/photo6.png',
            'images/avatars/photo5.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png',
            'images/avatars/photo1.png'
        ],
        number: ''
    },
    {
        id: 4,
        title: 'User experience (UX)',
        images: [
            'images/avatars/photo3.png',
            'images/avatars/photo5.png',
            'images/avatars/photo4.png',
            'images/avatars/photo.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png',
            'images/avatars/photo2.png'
        ],
        number: ''
    },
    {
        id: 5,
        title: 'User interface (UI)',
        images: [
            'images/avatars/photo1.png',
            'images/avatars/photo5.png',
            'images/avatars/photo6.png',
            'images/avatars/photo4.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png'
        ],
        number: ''
    },
    {
        id: 6,
        title: 'Brand identity',
        images: [
            'images/avatars/photo2.png',
            'images/avatars/photo7.png',
            'images/avatars/photo6.png',
            'images/avatars/photo.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    },
    {
        id: 7,
        title: 'User interface (UI)',
        images: [
            'images/avatars/photo1.png',
            'images/avatars/photo5.png',
            'images/avatars/photo6.png',
            'images/avatars/photo4.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png',
            'images/avatars/photo7.png'
        ],
        number: ''
    },
    {
        id: 8,
        title: 'User experience (UX)',
        images: [
            'images/avatars/photo.png',
            'images/avatars/photo1.png',
            'images/avatars/photo2.png',
            'images/avatars/photo3.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    },
    {
        id: 9,
        title: 'Brand identity',
        images: [
            'images/avatars/photo2.png',
            'images/avatars/photo7.png',
            'images/avatars/photo6.png',
            'images/avatars/photo.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    },
    {
        id: 10,
        title: 'User experience (UX)',
        images: [
            'images/avatars/photo2.png',
            'images/avatars/photo4.png',
            'images/avatars/photo5.png',
            'images/avatars/photo1.png',
            'images/avatars/photo.png',
            'images/avatars/photo4.png'
        ],
        number: ''
    }
];

const htmlSkillsContainer = skills.map((el) => {
    const skill = document.createElement('div');
    skill.classList.add('skill');

    const skillName = document.createElement('div');
    skillName.classList.add('skill-name');

    const title = document.createElement('h4');
    title.innerText = el.title;

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imgs-skills');

    let numImg = 0;
    let numImg2 = 0;
    el.images.forEach(item => {
        if (numImg < 5) {
            numImg++;
            const img = document.createElement('img');
            img.src = item;
            img.classList.add(`img${numImg}`);
            imgContainer.append(img);
        } else {
            numImg2++;
            const plus = document.createElement('div');
            plus.classList.add('icon-plus');
            plus.innerText = `+${numImg2}`
            imgContainer.append(plus);
        }
    });

    const num = document.createElement('span');
    num.classList.add('skill-number');
    num.innerText = numImg + numImg2;

    skillName.append(title, num);
    skill.append(skillName, imgContainer);
    return skill;
});

skillsContainer.nextElementSibling.firstChild.innerText += ` (${skills.length})`;
skillsContainer.append(...htmlSkillsContainer);
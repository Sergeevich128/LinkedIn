const projectsSlider = document.getElementsByClassName('projects-slider')[0];
const projectsLink = document.getElementsByClassName('projects-link')[0];
const numProject = document.getElementsByClassName('project-num')[0];
const about = document.getElementsByClassName('about-text')[0];

const items = [
    {
        id: 1,
        img: 'images/png/project1.png',
        title: 'Zara redesign concept',
        about: 'UX/UI design, 15.07.2019'
    },
    {
        id: 2,
        img: 'images/png/project2.png',
        title: 'SCTHON event brand identity',
        about: 'Graphic design, 03.31.2019'
    },
    {
        id: 3,
        img: 'images/png/project3.png',
        title: 'Drozd. Brand identity. 2016',
        about: 'Graphic design, 03.04.2016'
    },
    {
        id: 4,
        img: 'images/png/project1.png',
        title: 'Zara redesign concept',
        about: 'UX/UI design, 15.07.2019'
    },
    {
        id: 5,
        img: 'images/png/project2.png',
        title: 'SCTHON event brand identity',
        about: 'Graphic design, 03.31.2019'
    },
    {
        id: 6,
        img: 'images/png/project3.png',
        title: 'Drozd. Brand identity. 2016',
        about: 'Graphic design, 03.04.2016'
    },
    {
        id: 7,
        img: 'images/png/project1.png',
        title: 'Zara redesign concept',
        about: 'UX/UI design, 15.07.2019'
    },
    {
        id: 8,
        img: 'images/png/project2.png',
        title: 'SCTHON event brand identity',
        about: 'Graphic design, 03.31.2019'
    },
    {
        id: 9,
        img: 'images/png/project3.png',
        title: 'Drozd. Brand identity. 2016',
        about: 'Graphic design, 03.04.2016'
    }
];

const containers = items.map((item) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    const img = document.createElement('img');
    img.src = item.img;
    const title = document.createElement('h4');
    title.innerText = item.title;
    const about = document.createElement('span');
    about.classList.add('project-about');
    about.innerText = item.about;
    projectContainer.append(img, title, about);
    return projectContainer;
});

projectsSlider.nextElementSibling.firstChild.innerText += ` (${items.length})`;
numProject.innerText += ` ${items.length}`;

projectsSlider.append(...containers);


const text = [
    `I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with
	creative projects, such as landing pages or unusual corporate websites. I'm more experienced in 
	eCommerce web projects and mobile banking apps, but also like to work with creative projects, such 
	as landing pages or unusual corporate websites. I'm more experienced in eCommerce web projects and 
	mobile banking apps, but also like to work with creative projects, such as landing pages or unusual
	corporate websites. I'm more experienced in eCommerce web projects and mobile banking apps, but also
	like to work with creative projects, such as landing pages or unusual corporate websites.I'm more 
	experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
	projects, such as landing pages or unusual corporate websites.I'm more experienced in eCommerce web
    projects and mobile banking apps, but also like to work with creative projects, such as landing 
	pages or unusual corporate websites.`
]

about.append(...text)
// const projectsSlider = document.getElementsByClassName('projects-slider')[0];
//
// const items = [
//     {
//         id: 1,
//         img: 'images/png/project1.png',
//         title: 'Zara redesign concept',
//         about: 'UX/UI design, 15.07.2019'
//     },
//     {
//         id: 2,
//         img: 'images/png/project2.png',
//         title: 'SCTHON event brand identity',
//         about: 'Graphic design, 03.31.2019'
//     },
//     {
//         id: 3,
//         img: 'images/png/project3.png',
//         title: 'Drozd. Brand identity. 2016',
//         about: 'Graphic design, 03.04.2016'
//     },
//     {
//         id: 4,
//         img: 'images/png/project4.png',
//         title: 'Zara redesign concept',
//         about: 'UX/UI design, 15.07.2019'
//     },
//     {
//         id: 5,
//         img: 'images/png/project5.png',
//         title: 'SCTHON event brand identity',
//         about: 'Graphic design, 03.31.2019'
//     },
//     {
//         id: 6,
//         img: 'images/png/project6.png',
//         title: 'Drozd. Brand identity. 2016',
//         about: 'Graphic design, 03.04.2016'
//     },
//     {
//         id: 7,
//         img: 'images/png/project7.png',
//         title: 'Zara redesign concept',
//         about: 'UX/UI design, 15.07.2019'
//     },
//     {
//         id: 8,
//         img: 'images/png/project8.png',
//         title: 'SCTHON event brand identity',
//         about: 'Graphic design, 03.31.2019'
//     },
//     {
//         id: 9,
//         img: 'images/png/project9.png',
//         title: 'Drozd. Brand identity. 2016',
//         about: 'Graphic design, 03.04.2016'
//     }
// ]
//
// const containers = items.map((item) => {
//     const projectContainer = document.createElement('div');
//     projectContainer.classList.add('project');
//     return projectContainer;
// });
//
// projectsSlider.append(...containers);
//
// console.log(containers);
//
// const images = items.map((item) => {
//
// });

// items.forEach((item) => {
//     console.log(item);
// })

// images[0].classList.add('active');
// activeImg = images[0];
// projectsSlider.append(...images);

//
// const titles = projectTitle.map((item) => {
//     const title = document.createElement('h4');
//     title.innerText = item;
//     return title;
// });
//
// projectsSlider.append(...titles);
//
// const aboutProjects = [
//     "UX/UI design, 15.07.2019",
//     "Graphic design, 03.31.2019",
//     "Graphic design, 03.04.2016",
//     "UX/UI design, 15.07.2019",
//     "Graphic design, 03.31.2019",
//     "Graphic design, 03.04.2016",
//     "UX/UI design, 15.07.2019",
//     "Graphic design, 03.31.2019",
//     "Graphic design, 03.04.2016",
// ];
//
// const projectInformation = aboutProjects.map((item) => {
//     const projectAbout = document.createElement('span');
//     projectAbout.innerText = item;
//     projectAbout.classList.add('project-about');
//     return projectAbout;
// });
//
// projectsSlider.append(...projectInformation);
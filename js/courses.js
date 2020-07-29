const recommendations = document.getElementsByClassName('recommendations')[0];
const coursesContainer = document.getElementsByClassName('courses')[0];

const courses = [
	{
        id: 1,
        img: 'url("images/png/course1.png")',
        title: 'UX Foundations: Prototyping',
        viewers: '27,959 viewers'
    },
    {
        id: 2,
        img: 'url("images/png/course2.png")',
        title: 'Designing with Adobe XD and pro',
        viewers: '9,122 viewers'
    },
    {
        id: 3,
        img: 'url("images/png/course3.png")',
        title: 'UX Foundations: Styles and GUIs',
        viewers: '13,858 viewers'
    },
    {
        id: 4,
        img: 'url("images/png/course1.png")',
        title: 'UX Foundations: Prototyping',
        viewers: '27,959 viewers'
    },
    {
        id: 5,
        img: 'url("images/png/course2.png")',
        title: 'Designing with Adobe XD and pro',
        viewers: '9,122 viewers'
    },
    {
        id: 6,
        img: 'url("images/png/course3.png")',
        title: 'UX Foundations: Styles and GUIs',
        viewers: '13,858 viewers'
    },
    {
        id: 7,
        img: 'url("images/png/course1.png")',
        title: 'UX Foundations: Prototyping',
        viewers: '27,959 viewers'
    },
];

const htmlCourses = courses.map(item => {
    const course = document.createElement('div');
    course.classList.add('course');

    const courseImg = document.createElement('div');
    courseImg.classList.add('course-img')	
    courseImg.style.background = item.img;

    const play = document.createElement('img');
    play.src = 'images/png/play.png';

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-course');

    const title = document.createElement('h3');
    title.innerText = item.title;

    const viewer = document.createElement('span');
    viewer.innerText = item.viewers;

    courseImg.append(play);
    infoContainer.append(title, viewer);
    course.append(courseImg, infoContainer)
    coursesContainer.append(course);
    return coursesContainer;
});
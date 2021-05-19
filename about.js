let body = document.querySelector('body');
let sun = document.querySelector('.sun');
let title = document.querySelector('.about__right_title');
let title2 = document.querySelector('.about__title');
let about =  document.querySelector('.about');
sun.style = `
    font-size:60px;
    position: fixed;
    top: 2%;
    left: 2%;
    color: black;
    user-select: none;  
`
sun.addEventListener('click', function () {
    if (sun.style.color == 'black') {
        sun.style.color = 'white';
        body.style.background = 'black';
        title.style.color = 'white';
        title2.style.color = 'white';
        about.style.background = '#161616';
    } else {
        sun.style.color = 'black';
        body.style.background = 'white';
        title.style.color = 'black';
        title2.style.color = 'black';
        about.style.background = '#f5f5f5';
    }
})


let links = document.querySelectorAll('.header_list_link');
links[0].style.color = 'black';
links[1].style.color = 'black';
links[2].style.color = 'black';
for (let i = 0; i < links.length; i++) {
    sun.addEventListener('click', function () {
        if (sun.style.color == 'black') {
            links[i].style.color = 'black';
        } else{
            links[i].style.color = 'white';
        }
    })
}
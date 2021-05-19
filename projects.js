let body = document.querySelector('body');
let sun = document.querySelector('.sun');
let content = document.querySelector('.project-content');
let title = document.querySelector('.project-content__title');
let left = document.querySelector('.project__links_link');
let right = document.querySelector('.project__links_link2');
let arrowLeft = document.querySelector('.pe-7s-angle-left');
let arrowRight = document.querySelector('.pe-7s-angle-right');
let keypad = document.querySelector('.pe-7s-keypad');
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
        content.style.background = '#161616';
        title.style.color = 'white';
        left.style.color = 'black';
        right.style.color = 'black';
        arrowLeft.style.color = 'white';
        arrowRight.style.color = 'white';
        keypad.style.color = 'black';
    } else {
        sun.style.color = 'black';
        body.style.background = 'white';
        content.style.background = '#f6f6f6';
        title.style.color = 'black';
        left.style.color = 'white';
        right.style.color = 'white';
        arrowLeft.style.color = 'black';
        arrowRight.style.color = 'black';
        keypad.style.color = 'white';
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
let text = document.querySelectorAll('.project__list_text_span');
text[0].style.color = 'black';
text[1].style.color = 'black';
text[2].style.color = 'black';
for (let i = 0; i < text.length; i++) {
    sun.addEventListener('click', function () {
        if (sun.style.color == 'black') {
            text[i].style.color = 'black';
        } else{
            text[i].style.color = 'white';
        }
    })
}
let body = document.querySelector('body');
let sun = document.querySelector('.sun');
let massage = document.querySelector('.massage');
let title =  document.querySelector('.contact__left_title');
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
        massage.style.background = '#161616';
        title.style.color = 'white';
    } else {
        sun.style.color = 'black';
        body.style.background = 'white';
        massage.style.background = '#f5f5f5';
        title.style.color = 'black';
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
let span = document.querySelectorAll('.contact__list_link_span');
span[0].style.color = 'black';
span[1].style.color = 'black';
span[2].style.color = 'black';
span[3].style.color = 'black';
for (let i = 0; i < span.length; i++) {
    sun.addEventListener('click', function () {
        if (sun.style.color == 'black') {
            span[i].style.color = 'black';
        } else{
            span[i].style.color = 'white';
        }
    })
    
}
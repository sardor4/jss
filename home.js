let body = document.querySelector('body');
let sun = document.querySelector('.sun');
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
    } else {
        sun.style.color = 'black';
        body.style.background = 'white';
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
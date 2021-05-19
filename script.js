let body = document.querySelector('body');
let sun = document.querySelector('.sun');
let up = document.querySelector('.pe-7s-angle-left-circle');
let auTitle =  document.querySelector('.au_title');
let auContent = document.querySelector('.au_content');
let auTitle2 = document.querySelector('.au_title2');
let prTitle =  document.querySelector('.process_title');
let icon1 = document.querySelector('.pe-7s-diamond');
let icon2 = document.querySelector('.pe-7s-arc');
let icon3 = document.querySelector('.pe-7s-phone');
let icon4 = document.querySelector('.pe-7s-joy');
let icon5 = document.querySelector('.pe-7s-plane');
let icon6 = document.querySelector('.icon-card .pe-7s-star');
let icon7 = document.querySelector('.pe-7s-magic-wand');
let icon8 = document.querySelector('.pe-7s-paint-bucket');
let iconContent = document.querySelector('.icons2');
let tit = document.querySelector('.title');
let mass = document.querySelector('.massage');
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
        up.style.color = 'white';
        auTitle.style.color = 'white';
        auContent.style.background = '#161616';
        auTitle2.style.color = 'white';
        prTitle.style.color = 'white';
        icon1.style.color = 'white';
        icon2.style.color = 'white';
        icon3.style.color = 'white';
        icon4.style.color = 'white';
        icon5.style.color = 'white';
        icon6.style.color = 'white';
        icon7.style.color = 'white';
        icon8.style.color = 'white';
        iconContent.style.background = '#161616';
        tit.style.color = 'white';
        mass.style.background = '#161616';
    } else {
        sun.style.color = 'black';
        body.style.background = 'white';
        up.style.color = 'black';
        auTitle.style.color = 'black';
        auContent.style.background = '#f8f9f9';
        auTitle2.style.color = 'black';
        prTitle.style.color = 'black';
        icon1.style.color = '#686868';
        icon2.style.color = '#686868';
        icon3.style.color = '#686868';
        icon4.style.color = '#686868';
        icon5.style.color = '#686868';
        icon6.style.color = '#686868';
        icon7.style.color = '#686868';
        icon8.style.color = '#686868';
        iconContent.style.background = '#f5f5f5';
        tit.style.color = 'black';
        mass.style.background = '#f5f5f5';
    }
})


let progText = document.querySelectorAll('.progress_title');
progText[0].style.color = 'black';
progText[1].style.color = 'black';
progText[2].style.color = 'black';
for (let i = 0; i < progText.length; i++) {
    sun.addEventListener('click', function () {
        if (sun.style.color == 'black') {
            progText[i].style.color = 'black';

        } else{
            progText[i].style.color = 'white';

        }
    })
}
let icTitle = document.querySelectorAll('.ic-title');

icTitle[0].style.color = 'black';
icTitle[1].style.color = 'black';
icTitle[2].style.color = 'black';
icTitle[3].style.color = 'black';
icTitle[4].style.color = 'black';
icTitle[5].style.color = 'black';
icTitle[6].style.color = 'black';
icTitle[7].style.color = 'black';

for (let i = 0; i < icTitle.length; i++) {
    sun.addEventListener('click', function () {
        if (sun.style.color == 'black') {
            icTitle[i].style.color = 'black';
            
        } else{
            icTitle[i].style.color = 'white';
            
        }
    })
}
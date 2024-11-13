function setVhUnit() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVhUnit);
window.addEventListener('orientationchange', setVhUnit);
setVhUnit();

let mode = 0;
let toggle_button = document.querySelector('#checkbox');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    SwitchLightDarkMode();
    toggle_button.checked = true;
}

function SwitchLightDarkMode() {
    if (mode == 0) {
        document.querySelector(':root').style.setProperty('--color_1', "#B9E5E8");
        document.querySelector(':root').style.setProperty('--color_3', "#DFF2EB");
        document.querySelector(':root').style.setProperty('--color_4', "#4A4947");
        document.querySelector(':root').style.setProperty('--color_5', "#000");
        document.querySelector(':root').style.setProperty('--color_6', "#fff");
        mode = 1;
        document.querySelector('.fa-sun').classList.remove('active');
        document.querySelector('.fa-moon').classList.toggle('active');
    } else {
        document.querySelector(':root').style.setProperty('--color_1', "#7286D3");
        document.querySelector(':root').style.setProperty('--color_3', "#E5E0FF");
        document.querySelector(':root').style.setProperty('--color_4', "#FFF2F2");
        document.querySelector(':root').style.setProperty('--color_5', "#fff");
        document.querySelector(':root').style.setProperty('--color_6', "#000");
        mode = 0;
        document.querySelector('.fa-sun').classList.toggle('active');
        document.querySelector('.fa-moon').classList.remove('active');
    }
}

function imgFull(img) {
    img.classList.toggle('img-box-active');
    setTimeout (function () {
        img.classList.remove('img-box-active');
    }, 2000);
}

function paperFull(img) {
    img.classList.toggle('paper-con-active');
    setTimeout (function () {
        img.classList.remove('paper-con-active');
    }, 2000);
}
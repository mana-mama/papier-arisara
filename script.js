let transparent_bg = document.querySelector('.transparent-bg');
var showing_now;


let all_videos = document.querySelectorAll('video');
for (i=0; i<all_videos.length; i++) {
    all_videos[i].playbackRate = 0.25;
}

function showImgof(picture) {
    if (picture.classList.contains("landscape")) {
        picture.classList.toggle("showing-ls");
    } else if (picture.classList.contains("portrait")) {
        picture.classList.toggle("showing-pt");
    }

    transparent_bg.style.display = "block";
    showing_now = picture
}

function hideImg() {
    transparent_bg.style.display = "none";
    
    if (showing_now.classList.contains("landscape")) {
        showing_now.classList.remove("showing-ls");
    } else if (showing_now.classList.contains("portrait")) {
        showing_now.classList.remove("showing-pt");
    }

    showing_now = null;
}

let nav_bar = document.querySelector(".navigation-bar");
let menu = document.querySelector(".nav-bar-short");
console.log(nav_bar)

function toggleNavbar() {
    menu.classList.toggle('selected');
    nav_bar.classList.toggle('show-menu');
}

let root = document.querySelector(':root');

function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const fontSize = Math.max(24, 62.5/1524 * screenWidth);
    root.style.fontSize = fontSize + "%";
}

window.addEventListener("resize", adjustFontSize);
window.addEventListener("load", adjustFontSize);
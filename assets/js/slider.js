let images = ["assets/images/gs-1.jpg", "assets/images/gs-2.jpg", "assets/images/gs-3.jpg", "assets/images/gs-4.jpg"]; 
let mainImg = document.querySelector("img");


let num = 0;
function next() {
    num++;
    if (num >= images.length) {
        num = 0;
    }
    mainImg.src = images[num];
}

function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    mainImg.src = images[num];
}
document.getElementById("next").addEventListener("click", next);
document.getElementById("back").addEventListener("click", back);


const auto = true;
const intervalTime = 1500;
let slideInterval;

if (auto) {
    slideInterval = setInterval(next, intervalTime);
}

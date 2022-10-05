const frh = document.querySelectorAll(".frh");
const flh = document.querySelectorAll(".flh");
const fuh = document.querySelectorAll(".fuh");

const Observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("fs");
        }
    });
});

flh.forEach((el) => Observer.observe(el));
frh.forEach((el) => Observer.observe(el));
fuh.forEach((el) => Observer.observe(el));

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
};

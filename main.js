const hamburgerMenu = document.querySelector(
    "[data-collapse-toggle='navbar-default']"
);
hamburgerMenu.addEventListener("click", () => {
    let navLinkContainer = document.querySelector(".navLinks-container");
    navLinkContainer.classList.toggle("hidden-elem");
});

const navLinks = document.querySelectorAll(".navLinks");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((elem) => {
            elem.classList.remove("text-pink-300");
            elem.classList.remove("bg-pink-500");
            elem.classList.remove("text-pink-500");
        });
        if (window.innerWidth <= 768) {
            link.classList.add("text-pink-300");
            link.classList.add("bg-pink-500");
        }
        if (window.innerWidth >= 768) {
            link.classList.add("text-pink-500");
        }
    });
});

document.querySelectorAll(".text-stroke").forEach((element) => {
    setTimeout(() => {
        element.classList.remove("hidden-text");
    });
});

window.onload = function () {
    const picMain = document.querySelector(".pic-main");
    picMain.classList.add("fadeInPic");
};

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const movingElement = document.getElementById("movingElement");
    if (scrollPosition >= 0 && scrollPosition < 100) {
        movingElement.style.bottom = "0px";
    } else {
        movingElement.style.bottom = `${scrollPosition - 90}px`;
    }
});

document.getElementById("current-year").textContent = new Date().getFullYear();
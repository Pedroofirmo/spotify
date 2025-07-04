document.addEventListener("DOMContentLoaded", function () {
    const biblioteca = document.querySelector(".biblioteca");
    const logo = document.querySelector(".logo");
    const mobileToggle = document.querySelector(".biblioteca h3 span");

logo.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        biblioteca.classList.add("open");
    }
});

    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
    biblioteca.classList.add("open");
    });
}

document.addEventListener("click", (e) => {
    const clickedInside = biblioteca.contains(e.target) || logo.contains(e.target);
    if (!clickedInside && window.innerWidth <= 768) {
        biblioteca.classList.remove("open");
    }
    });
});

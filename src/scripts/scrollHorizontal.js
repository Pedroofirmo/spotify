document.addEventListener("DOMContentLoaded", function () {
    const filas = document.querySelectorAll(".cards-grid, .artistas-container");

filas.forEach((fila) => {
    fila.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        fila.scrollLeft += e.deltaY;
    }
        });
    });
});

window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    const trigger = window.innerHeight / 1.2;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) el.classList.add("visible");
    });
});

function toggleTexto(btn) {
    const textoExtra = btn.previousElementSibling;
    if (textoExtra.classList.contains("oculto")) {
        textoExtra.classList.remove("oculto");
        btn.textContent = "Leer menos";
    } else {
        textoExtra.classList.add("oculto");
        btn.textContent = "Leer más";
    }
}

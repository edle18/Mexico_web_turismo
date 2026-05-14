const slider = document.getElementById("slider");

let imagenes = [
    "images/Portada1.jpg",
    "images/Portada2.jpg",
    "images/sitio1.jpg",
    "images/sitio2.jpg",
    "images/cultura1.jpg",
    "images/comida4.jpg"
];

const pagina = window.location.pathname;

if (pagina.includes("IndexGastro.html")) {
    imagenes = [
        "images/comidaprin.jpg",
        "images/comida0.jpg",
        "images/comida1.jpg",
        "images/comida2.jpg",
        "images/comida3.jpg",
        "images/comida4.jpg"
    ];
}

if (pagina.includes("IndexCultura.html")) {
    imagenes = [
        "images/culturaprin.jpg",
        "images/cultura1.jpg",
        "images/cultura2.jpg",
        "images/cultura3.jpg",
        "images/cultura4.jpg",
        "images/cultura5.jpg"
    ];
}

if (pagina.includes("Indexsitio.html")) {
    imagenes = [
        "images/sitioprin.jpg",
        "images/sitio1.jpg",
        "images/sitio2.jpg",
        "images/sitio3.jpg",
        "images/sitio4.jpg",
        "images/sitio5.jpg"
    ];
}
let i = 0;

setInterval(() => {

    slider.style.opacity = 0;

    setTimeout(() => {

        i++;
        if (i >= imagenes.length) i = 0;

        slider.src = imagenes[i];

        slider.style.opacity = 1;

    }, 400);

}, 3000);
document.querySelectorAll(".menu > a").forEach(item => {
    item.addEventListener("click", function(e){
        if(window.innerWidth <= 768){
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});
const mensaje = document.getElementById("mensaje");
const idioma = document.getElementById("idioma");

function cambiarMensaje(idiomaSeleccionado){

    if (window.location.href.includes("IndexGastro.html")) {

        if (idiomaSeleccionado === "es") mensaje.textContent = "Bienvenido a la gastronomía mexicana";
        if (idiomaSeleccionado === "en") mensaje.textContent = "Welcome to Mexican gastronomy";
        if (idiomaSeleccionado === "fr") mensaje.textContent = "Bienvenue dans la gastronomie mexicaine";

    }

    else if (window.location.href.includes("IndexCultura.html")) {

        if (idiomaSeleccionado === "es") mensaje.textContent = "Bienvenido a la cultura mexicana";
        if (idiomaSeleccionado === "en") mensaje.textContent = "Welcome to Mexican culture";
        if (idiomaSeleccionado === "fr") mensaje.textContent = "Bienvenue dans la culture mexicaine";

    }

    else if (window.location.href.includes("Indexsitio.html")) {

        if (idiomaSeleccionado === "es") mensaje.textContent = "Bienvenido a los sitios turísticos de México";
        if (idiomaSeleccionado === "en") mensaje.textContent = "Welcome to tourist sites of Mexico";
        if (idiomaSeleccionado === "fr") mensaje.textContent = "Bienvenue aux sites touristiques du Mexique";

    }

    else {

        if (idiomaSeleccionado === "es") mensaje.textContent = "Bienvenido a Mexico";
        if (idiomaSeleccionado === "en") mensaje.textContent = "Welcome to Mexico";
        if (idiomaSeleccionado === "fr") mensaje.textContent = "Bienvenue au Mexique";

    }
}
idioma.addEventListener("change", function(){
    cambiarMensaje(this.value);
});

cambiarMensaje("es");

document.addEventListener("DOMContentLoaded", () => {

    const menus = document.querySelectorAll(".menu");

    menus.forEach(menu => {
        const link = menu.querySelector("a");
        const submenu = menu.querySelector(".submenu");

        if(submenu){

            link.addEventListener("mouseenter", () => {
                submenu.style.opacity = "1";
                submenu.style.transform = "translateY(0)";
                submenu.style.pointerEvents = "auto";
            });

            menu.addEventListener("mouseleave", () => {
                submenu.style.opacity = "0";
                submenu.style.transform = "translateY(10px)";
                submenu.style.pointerEvents = "none";
            });

        }

    });

});
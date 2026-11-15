/* =========================================
   1. ELEMENTOS PRINCIPALES
========================================= */

const pantallaBienvenida = document.getElementById("pantalla-bienvenida");
const pantallaCorona = document.getElementById("pantalla-corona");
const pantallaDedicatoria = document.getElementById("pantalla-dedicatoria");
const pantallaRecuerdos = document.getElementById("pantalla-recuerdos");
const pantallaFinal = document.getElementById("pantalla-final");

const sobre = document.getElementById("abrir-sobre");
const recogerCorona = document.getElementById("recoger-corona");

const musica = document.getElementById("musica-fondo");
const botonMusica = document.getElementById("boton-musica");
const estadoMusica = document.getElementById("estado-musica");

const ventanaRecuerdo = document.getElementById("ventana-recuerdo");
const fotografiaRecuerdo = document.getElementById("fotografia-recuerdo");
const tituloRecuerdo = document.getElementById("titulo-recuerdo");
const dedicatoriaRecuerdo = document.getElementById("dedicatoria-recuerdo");

const botonCerrarRecuerdo = document.getElementById("cerrar-recuerdo");


/* =========================================
   2. CONTROL DE LAS CINCO PANTALLAS
========================================= */

const pantallas = [
    pantallaBienvenida,
    pantallaCorona,
    pantallaDedicatoria,
    pantallaRecuerdos,
    pantallaFinal
];

function cambiarPantalla(pantallaDestino) {

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    pantallaDestino.classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   3. MÚSICA PERSONALIZADA
========================================= */

async function reproducirMusica() {

    try {

        await musica.play();

        botonMusica.textContent = "⏸️";
        estadoMusica.textContent = "Reproduciendo música";

    } catch (error) {

        botonMusica.textContent = "🎵";
        estadoMusica.textContent = "Toca para reproducir";

        console.log("No se pudo reproducir la música:", error);

    }

}

function pausarMusica() {

    musica.pause();

    botonMusica.textContent = "▶️";
    estadoMusica.textContent = "Música pausada";

}

botonMusica.addEventListener("click", () => {

    if (musica.paused) {
        reproducirMusica();
    } else {
        pausarMusica();
    }

});

musica.addEventListener("ended", () => {
    botonMusica.textContent = "▶️";
    estadoMusica.textContent = "Nuestra canción";
});


/* =========================================
   4. ABRIR EL SOBRE
========================================= */

let sobreAbierto = false;

sobre.addEventListener("click", async () => {

    if (sobreAbierto) return;

    sobreAbierto = true;

    sobre.disabled = true;

    const solapa = sobre.querySelector(".sobre-solapa");
    const carta = sobre.querySelector(".carta-dentro");

    solapa.style.transformOrigin = "top";
    solapa.style.transition = "transform 0.8s ease";
    solapa.style.transform = "rotateX(180deg)";

    carta.style.transition = "transform 0.8s ease";
    carta.style.transform = "translateY(-45px)";

    reproducirMusica();

    setTimeout(() => {

        cambiarPantalla(pantallaCorona);

    }, 1300);

});


/* =========================================
   5. RECOGER LA CORONITA
========================================= */

let coronaRecogida = false;

recogerCorona.addEventListener("click", () => {

    if (coronaRecogida) return;

    coronaRecogida = true;

    const corona = document.querySelector(".corona-animada");

    recogerCorona.disabled = true;
    recogerCorona.textContent = "¡Es tuya, mi reina! 💛";

    corona.style.transition = "all 0.7s ease";
    corona.style.transform = "scale(1.5) rotate(20deg)";
    corona.style.opacity = "0";

    setTimeout(() => {

        cambiarPantalla(pantallaDedicatoria);

    }, 900);

});


/* =========================================
   6. PASAR A NUESTROS RECUERDOS
========================================= */

document.getElementById("ir-recuerdos")
    .addEventListener("click", () => {

        cambiarPantalla(pantallaRecuerdos);

    });


/* =========================================
   7. CONFIGURACIÓN DE LAS 12 FOTOGRAFÍAS
========================================= */

const recuerdos = [

    {
        numero: 1,
        foto: "fotos/recuerdo1.jpg",
        titulo: "Nuestro primer recuerdo 💛",
        dedicatoria: "Un momento contigo que siempre guardaré en mi corazón."
    },

    {
        numero: 2,
        foto: "fotos/recuerdo2.jpg",
        titulo: "Un momento especial 💗",
        dedicatoria: "Cada instante contigo tiene algo que lo hace único."
    },

    {
        numero: 3,
        foto: "fotos/recuerdo3.jpg",
        titulo: "Tú y yo ✨",
        dedicatoria: "Mi parte favorita de cualquier recuerdo siempre eres tú."
    },

    {
        numero: 4,
        foto: "fotos/recuerdo4.jpg",
        titulo: "Una sonrisa para recordar 😊",
        dedicatoria: "Tu sonrisa es una de mis cosas favoritas."
    },

    {
        numero: 5,
        foto: "fotos/recuerdo5.jpg",
        titulo: "Nuestro pequeño mundo 💕",
        dedicatoria: "Me encanta todo lo que vamos construyendo juntos."
    },

    {
        numero: 6,
        foto: "fotos/recuerdo6.jpg",
        titulo: "Un recuerdo inolvidable 🌷",
        dedicatoria: "Ojalá podamos repetir muchos momentos como este."
    },

    {
        numero: 7,
        foto: "fotos/recuerdo7.jpg",
        titulo: "Mi persona favorita 💛",
        dedicatoria: "Entre tantas personas, mi corazón te eligió a ti."
    },

    {
        numero: 8,
        foto: "fotos/recuerdo8.jpg",
        titulo: "Un pedacito de felicidad 🥹",
        dedicatoria: "Gracias por hacer especiales hasta los días más simples."
    },

    {
        numero: 9,
        foto: "fotos/recuerdo9.jpg",
        titulo: "Juntos en cada recuerdo 💗",
        dedicatoria: "Cada fotografía es una historia que quiero seguir escribiendo contigo."
    },

    {
        numero: 10,
        foto: "fotos/recuerdo10.jpg",
        titulo: "Mi niña hermosa 🌸",
        dedicatoria: "Qué bonito es tenerte en mi vida."
    },

    {
        numero: 11,
        foto: "fotos/recuerdo11.jpg",
        titulo: "Por muchos momentos más ✨",
        dedicatoria: "Todavía nos quedan muchísimas historias por vivir."
    },

    {
        numero: 12,
        foto: "fotos/recuerdo12.jpg",
        titulo: "Nuestro recuerdo número doce 👑",
        dedicatoria: "Si pudiera elegir de nuevo, volvería a elegirte a ti."
    }

];


/* =========================================
   8. ABRIR CADA CORONITA
========================================= */

const botonesRecuerdos = document.querySelectorAll(".corona-recuerdo");

let ultimaCorona = null;

botonesRecuerdos.forEach(boton => {

    boton.addEventListener("click", () => {

        const numero = Number(boton.dataset.recuerdo);

        const recuerdo = recuerdos.find(item => {
            return item.numero === numero;
        });

        if (!recuerdo) return;

        ultimaCorona = boton;

        fotografiaRecuerdo.src = recuerdo.foto;
        fotografiaRecuerdo.alt = recuerdo.titulo;

        tituloRecuerdo.textContent = recuerdo.titulo;
        dedicatoriaRecuerdo.textContent = recuerdo.dedicatoria;

        ventanaRecuerdo.hidden = false;

        document.body.style.overflow = "hidden";

        botonCerrarRecuerdo.focus();

    });

});


/* =========================================
   9. CERRAR LA FOTOGRAFÍA
========================================= */

function cerrarRecuerdo() {

    ventanaRecuerdo.hidden = true;

    document.body.style.overflow = "";

    fotografiaRecuerdo.removeAttribute("src");

    if (ultimaCorona) {
        ultimaCorona.focus();
    }

}

botonCerrarRecuerdo.addEventListener("click", cerrarRecuerdo);

ventanaRecuerdo.addEventListener("click", (evento) => {

    if (evento.target === ventanaRecuerdo) {
        cerrarRecuerdo();
    }

});

document.addEventListener("keydown", (evento) => {

    if (
        evento.key === "Escape" &&
        !ventanaRecuerdo.hidden
    ) {

        cerrarRecuerdo();

    }

});


/* =========================================
   10. CONTINUAR HACIA EL FINAL
========================================= */

document.getElementById("ir-final")
    .addEventListener("click", () => {

        cambiarPantalla(pantallaFinal);

    });


/* =========================================
   11. COMPROBAR LAS FOTOGRAFÍAS
========================================= */

fotografiaRecuerdo.addEventListener("error", () => {

    fotografiaRecuerdo.alt =
        "No se encontró esta fotografía. Revisa el nombre del archivo dentro de la carpeta fotos.";

    console.warn(
        "No se encontró la fotografía:",
        fotografiaRecuerdo.src
    );

});


/* =========================================
   12. BOTONES PARA REGRESAR
========================================= */

document.querySelectorAll(".btn-regresar").forEach(boton => {

    boton.addEventListener("click", () => {

        const destinoId = boton.dataset.volver;
        const pantallaDestino = document.getElementById(destinoId);

        if (!pantallaDestino) return;

        // Si regresamos al sobre, permitimos abrirlo otra vez.
        if (destinoId === "pantalla-bienvenida") {

            sobreAbierto = false;
            sobre.disabled = false;

            const solapa = sobre.querySelector(".sobre-solapa");
            const carta = sobre.querySelector(".carta-dentro");

            solapa.style.transition = "none";
            solapa.style.transform = "";

            carta.style.transition = "none";
            carta.style.transform = "";

        }

        // Si regresamos a la coronita, permitimos recogerla otra vez.
        if (destinoId === "pantalla-corona") {

            coronaRecogida = false;

            recogerCorona.disabled = false;
            recogerCorona.textContent = "Recoger mi coronita 💛";

            const corona = document.querySelector(".corona-animada");

            corona.style.transition = "none";
            corona.style.transform = "";
            corona.style.opacity = "";

        }

        cambiarPantalla(pantallaDestino);

    });

});


/* =========================================
   13. INICIO DE LA EXPERIENCIA
========================================= */

cambiarPantalla(pantallaBienvenida);

console.log("💛 La sorpresa para Andrea está preparada.");
console.log("👑 Hay 12 coronitas esperando ser descubiertas.");
console.log("🍮 ¡Bienvenida a nuestra pequeña historia!");
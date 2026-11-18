// @ts-check
/**
 * main.js · Interactividad de la landing de Nébula (UT4)
 * Galería, modal de vídeo y reproductor de audio.
 */

/**
 * Datos de los mundos de la galería, en el mismo orden que las miniaturas del HTML.
 * Cada objeto guarda la ruta de la imagen en alta resolución (grande) y el nombre del mundo (titulo).
 * @type {Array<{grande: string, titulo: string}>}
 */
const MUNDOS = [
    { grande: 'assets/img/atlas-cuna-grande.webp', titulo: 'La Cuna' },
    { grande: 'assets/img/atlas-dos-soles-grande.webp', titulo: 'Dos Soles' },
    { grande: 'assets/img/atlas-genesis-grande.webp', titulo: 'Génesis' }
];

/**
 * Inicializa la galería del atlas: localiza el visor y las miniaturas
 * y prepara el cambio de imagen al pulsar cada miniatura.
 * @returns {void}
 */
function iniciarGaleria() {
    const visor = /** @type {HTMLImageElement} */ (document.getElementById('visor-img'));
    const titulo = /** @type {HTMLElement} */ (document.getElementById('visor-titulo'));
    const miniaturas = /** @type {NodeListOf<HTMLButtonElement>} */ (document.querySelectorAll('.miniatura'));

    miniaturas.forEach(function (boton, indice) {
        boton.addEventListener('click', function () {
            const mundo = MUNDOS[indice];
            const miniatura = /** @type {HTMLImageElement} */ (boton.querySelector('img'));

            // 1. Desvanecer el visor (la transición la hace el CSS)
            visor.classList.add('cambiando');

            // 2. Cuando termina el fundido, cambiar la imagen y hacerla reaparecer
            setTimeout(function () {
                visor.src = mundo.grande;
                titulo.textContent = mundo.titulo;
                visor.alt = miniatura.alt;
                visor.classList.remove('cambiando');
            }, 250);

            // 3. Mover la marca de miniatura activa a la pulsada
            miniaturas.forEach(function (otra) {
                otra.classList.remove('activa');
            });
            boton.classList.add('activa');
        });
    });
}

iniciarGaleria();

/**
 * Inicializa el modal del vídeo: reproduce el reel al abrirse y lo pausa al cerrarse.
 * @returns {void}
 */
function iniciarModalVideo() {
    const modal = /** @type {HTMLElement} */ (document.getElementById('modal-reel'));
    const video = /** @type {HTMLVideoElement} */ (document.getElementById('video-reel'));

    // Bootstrap avisa cuando el modal ya está visible: reproducir.
    modal.addEventListener('shown.bs.modal', function () {
        video.play();
    });

    // Bootstrap avisa cuando el modal empieza a cerrarse: pausar
    modal.addEventListener('hide.bs.modal', function () {
        video.pause();
    });
}

iniciarModalVideo();

/**
 * Inicializa el reproductor de audio con sus propios botones.
 * @returns {void}
 */
function iniciarAudio() {
    const audio = /** @type {HTMLAudioElement} */ (document.getElementById('audio-ambiente'));
    const botonAudio = /** @type {HTMLButtonElement} */ (document.getElementById('boton-audio'));
    const botonSilencio = /** @type {HTMLButtonElement} */ (document.getElementById('boton-silencio'));

    // Un solo botón para todo: si está parado lo pongo en marcha y, si ya suena, lo paro
    botonAudio.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            botonAudio.textContent = 'Pausar ambiente espacial';
        } else {
            audio.pause();
            botonAudio.textContent = 'Escuchar ambiente espacial';
        }
    });

    // Silencio sin parar la música: el audio sigue avanzando, solo le quito la voz
    botonSilencio.addEventListener('click', function () {
        audio.muted = !audio.muted;

        // El texto avisa de lo que pasará al volver a pulsar
        if (audio.muted) {
            botonSilencio.textContent = 'Activar sonido';
        } else {
            botonSilencio.textContent = 'Silenciar';
        }
    });
}

iniciarAudio();

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

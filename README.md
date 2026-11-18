# Nébula · Landing page de una artista digital

**Autor:** Jose Ramón Neira Vega
**Módulo:** Diseño de Interfaces Web · 2º DAW
**Repositorio:** https://github.com/jramonnv0786-prog/Landing_Nebula

Landing page de **Nébula**, una artista digital **ficticia** especializada en paisajes de ciencia ficción. Además de pintar mundos, los lleva a cortometrajes y les pone sonido. Todos los recursos multimedia se han buscado, editado y optimizado respetando sus licencias de uso y las buenas prácticas de rendimiento (WPO) y accesibilidad.

> Nébula es un personaje ficticio. Las obras que aparecen en la página pertenecen a sus autores reales, citados en cada `<figcaption>`.

---

## 1. Estructura del proyecto

```
/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js            (UT4: galería, modal de vídeo y audio)
    ├── img/
    │   ├── hero-carina.webp
    │   ├── logo-nebula.svg    (versión externa; en la página va inline desde la UT4)
    │   ├── atlas-cuna.webp            + atlas-cuna-grande.webp
    │   ├── atlas-dos-soles.webp       + atlas-dos-soles-grande.webp
    │   ├── atlas-genesis.webp         + atlas-genesis-grande.webp
    │   ├── cta-neon.webp
    │   └── poster.webp
    ├── audio/
    │   └── ambiente-nebula.mp3
    └── video/
        └── m83-nebula.mp4
```

- Nombres de archivo en minúsculas, con guiones y sin tildes: en servidores Linux `Logo.svg` y `logo.svg` son archivos distintos.
- La hoja de estilos se ubica en `assets/css/`, junto al resto de recursos estáticos.
- Los originales sin tratar y los archivos de trabajo se mantienen fuera del repositorio (`.gitignore`).

---

## 2. Recursos y licencias

| Recurso | Obra original | Autor / crédito | Fuente | Licencia | Cambios |
|---|---|---|---|---|---|
| Hero | Carina Nebula Jets (NIRCam Narrowband Filters) | NASA, ESA, CSA, and STScI, J. DePasquale (STScI) | [esawebb.org/images/carinanebula3](https://esawebb.org/images/carinanebula3/) | CC BY 4.0 | Redimensionada y comprimida |
| Galería · La Cuna | Artist's impression of protoplanetary disc | ESO/L. Calçada | [esawebb.org/images/weic2329a](https://esawebb.org/images/weic2329a/) | CC BY 4.0 | Recortada, redimensionada y comprimida |
| Galería · Dos Soles | Alpha Centauri A and Planet (Artist's Concept) | NASA, ESA, CSA, STScI, R. Hurt (Caltech/IPAC) | [esawebb.org/images/weic2515a](https://esawebb.org/images/weic2515a/) | CC BY 4.0 | Recortada, redimensionada y comprimida |
| Galería · Génesis | Extreme debris disc (artist's concept) | NASA, ESA, CSA, J. Olmsted (STScI) | [esawebb.org/images/weic2618a](https://esawebb.org/images/weic2618a/) | CC BY 4.0 | Recortada, redimensionada y comprimida |
| Vídeo | Pan of M83 (MIRI image) | ESA/Webb, NASA & CSA, A. Adamo (Stockholm University) and the FEAST JWST team, N. Bartmann (ESA/Webb) | [esawebb.org/videos/potm2310a](https://esawebb.org/videos/potm2310a/) | CC BY 4.0 | Recortado a 15 s, comprimido y sin pista de audio |
| Audio | Ambiente espacial sintético (Freesound #410592) | OSFX | [freesound.org/people/OSFX/sounds/410592](https://freesound.org/people/OSFX/sounds/410592/) | CC0 | Recortado a 15 s con fundidos |
| Logo | Diseño propio | Jose Ramón Neira Vega | — | CC BY 4.0 (licencia del proyecto) | — |
| CTA animado | Diseño propio | Jose Ramón Neira Vega | — | CC BY 4.0 (licencia del proyecto) | — |

**Criterios seguidos:**

- Se descartaron Unsplash, Pexels y Pixabay: tienen **licencias propias**, no Creative Commons, como exige el enunciado. Las imágenes y el vídeo proceden de **ESA/Webb** ([política de uso](https://esawebb.org/copyright/), CC BY 4.0) y el audio de **Freesound** con licencia **CC0**.
- Se evitaron licencias **ND** (*NoDerivatives*), porque recortar o comprimir ya es una obra derivada.
- **Atribución en la página:** cada `<figcaption>` indica autor, enlace a la fuente, licencia y cambios realizados, como exige CC BY 4.0 (en la versión 4.0 el título de la obra es opcional).
- El vídeo original incluía una pista musical de un tercero con su propia licencia: **se eliminó la pista de audio**.

### 2.1 Licencia del proyecto y compatibilidad

Mi trabajo (diseño, código, textos, logo y CTA) se publica bajo **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es)**, indicado en el *footer* de la página con `rel="license"`. Los créditos de cada recurso se mantienen en su `<figcaption>`, y el *footer* recuerda que las imágenes, el vídeo y el audio pertenecen a sus autores.

**Por qué es compatible con los recursos usados:**

| Licencia del recurso | Qué exige | ¿Compatible con CC BY 4.0? |
|---|---|---|
| **CC BY 4.0** (hero, galería, vídeo) | Citar autor, fuente y licencia, e indicar los cambios. Permite obras derivadas y cualquier uso. | ✅ Sí. Es la misma licencia: la atribución está en cada `<figcaption>` y no añado restricciones que impidan a otros cumplirla. |
| **CC0** (audio) | Nada: es dominio público. | ✅ Sí. Se puede usar y modificar sin condiciones; se cita igualmente por buena práctica. |

Ninguno de los recursos es **ND** (que prohibiría recortarlos o comprimirlos) ni **NC** (que me impediría publicar con una licencia que permite el uso comercial).

**Escenario hipotético: un recurso CC BY-SA.**
Si una de las imágenes fuera **CC BY-SA 4.0** (*ShareAlike*, "compartir igual"), al recortarla y comprimirla estaría creando una obra derivada, y **esa versión editada tendría que publicarse también con CC BY-SA 4.0**, nunca con una licencia más abierta ni más cerrada.

- **La imagen editada:** tendría que llevar CC BY-SA 4.0 en su `<figcaption>`, aunque mi licencia general sea CC BY 4.0.
- **El resto de la página:** podría seguir con CC BY 4.0. La imagen solo se incluye en la página junto a otros contenidos independientes, y el "compartir igual" afecta a la obra que se adapta, no a todo lo que la rodea.
- **Si se mezclara de verdad con mi obra** (por ejemplo, integrada dentro del logo), el conjunto resultante pasaría a ser CC BY-SA 4.0.
- **Con una licencia NC** en mi proyecto sería **incompatible**: CC BY-SA no permite añadir la restricción "no comercial" a una obra derivada. Por eso también elegí CC BY 4.0.

---

## 3. Tratamiento de cada recurso

### 3.1 Imagen principal (hero)

| | Original | Final |
|---|---|---|
| Formato | TIFF (LZW) | **WebP** con pérdida |
| Dimensiones | 14570 × 8452 px | **1920 × 1114 px** (proporción mantenida) |
| Peso | ~199 MB | **194.834 bytes (~190 KB)** · requisito < 250 KB ✔ |

**Proceso:** conversión del TIFF a WebP con FreeConvert (Squoosh no abre TIFF) → **Squoosh**: *Resize* Lanczos3 a 1920 px de ancho con la proporción bloqueada → WebP calidad 80, *effort* 5. Reducción de peso: ~99 %.

### 3.2 Logotipo

- **Diseño propio** escrito a mano en SVG: un planeta (`<circle>` con degradado radial) y un anillo inclinado (`<ellipse>` con `rotate(-20)`), con `<title>` para accesibilidad.
- Optimizado con **SVGOMG**: eliminación de comentarios y espacios, conservando `<title>`, `width` y `height`.
- Peso: **943 → 479 bytes** (−49 %).

### 3.3 Galería de trabajos

- 3 ilustraciones de ESA/Webb convertidas en miniaturas de **400 × 250 px** en **WebP**.
- **Proceso (GIMP 3.2):** recorte a proporción **16:10** (la de 400 × 250) escogiendo el encuadre → *Escalar la imagen* a 400 × 250 → exportación WebP con pérdida, calidad 70, **sin metadatos**.
- Se recorta **antes** de escalar: si solo se redimensiona una imagen 16:9 o 3:2 a 400 × 250, se deforma.

| Archivo | Original | Peso final |
|---|---|---|
| `atlas-cuna.webp` | 3000 × 2000 · 1,8 MB | 3.774 bytes |
| `atlas-dos-soles.webp` | 4800 × 2700 · 3,0 MB | 3.516 bytes |
| `atlas-genesis.webp` | 3840 × 2160 (según la fuente) | 9.784 bytes |

Total de la galería: **~17 KB**.

### 3.4 Animación de llamada a la acción (CTA)

Letrero de neón **"encarga tu mundo"**, diseño propio en **GIMP 3.2** (320 × 80 px):

- **Construcción:** fondo `#0b0b14` + capa *tubo* (texto y marco redondeado de 2 px en `#c8faff`, casi blanco, como el núcleo de un neón) + capa *halo* (copia coloreada en cian `#00e5ff` y desenfocada con desenfoque gaussiano).
- **4 fotogramas** (mínimo exigido: 3), generados con *Copia visible → Pegar como capa nueva*. En GIMP cada capa es un fotograma y su duración se indica en el nombre (`f1 (400ms) (replace)`):

| Fotograma | Estado | Duración |
|---|---|---|
| f1 | Apagado (tubo al 30 %, sin halo) | 400 ms |
| f2 | Medio (halo al 50 %) | 200 ms |
| f3 | Encendido (halo al 100 %) | 700 ms |
| f4 | Medio | 200 ms |

- **Exportación:** WebP animado, "Como animación" + "Repetir indefinidamente", calidad 80.
- Resultado: **9.578 bytes**, 4 fotogramas, bucle infinito.
- **Ubicación:** en la hero, como llamada a la acción principal (abre el correo para encargos). Con `mix-blend-mode: screen` el fondo oscuro del WebP se funde con la imagen y solo queda la luz del neón. La sección de contacto mantiene un enlace de texto al correo.

### 3.5 Vídeo de presentación

| | Original | Final |
|---|---|---|
| Contenedor / códec | MP4 · H.264 Main + AAC | **MP4 · H.264 High**, sin audio |
| Resolución | 1280 × 720 · 25 fps | 1280 × 720 · 25 fps |
| Duración | 30 s | **15,00 s** (tramo del segundo 7 al 22) |
| Bitrate | ~6.200 kbps | **1.393 kbps** |
| Peso | 22,9 MB | **2.612.642 bytes (~2,49 MB)** · requisito < 3 MB ✔ |

**Cálculo del bitrate:**

```
bitrate = peso × 8 × 1000 ÷ duración = 3 MB × 8 × 1000 ÷ 15 s = 1.600 kbps (máximo teórico)
margen del 10 % (cabecera MP4 y picos del codificador) → 1.440 kbps → se usa 1.400 kbps
```

**Comandos (FFmpeg, codificación a dos pasadas):**

```bash
ffmpeg -y -ss 7 -i m83-original.m4v -t 15 -c:v libx264 -preset slow -b:v 1400k -pass 1 -an -f mp4 NUL
ffmpeg -ss 7 -i m83-original.m4v -t 15 -c:v libx264 -preset slow -b:v 1400k -pass 2 -an -movflags +faststart assets/video/m83-nebula.mp4
```

- **Dos pasadas:** la primera analiza la complejidad de cada escena y la segunda reparte los bits en función de ella, ajustando el peso al objetivo.
- **`-an`:** elimina la pista de audio (música de un tercero; además, el audio ambiental de la página va aparte).
- **`-movflags +faststart`:** coloca el índice del MP4 al principio, para que la reproducción empiece antes de descargar el archivo completo.

**Póster** (`poster.webp`): fotograma del segundo 3, WebP calidad 75, **1280 × 720** (mismas dimensiones que el vídeo, para evitar saltos de maquetación), **87.028 bytes**.

```bash
ffmpeg -ss 3 -i assets/video/m83-nebula.mp4 -frames:v 1 -c:v libwebp -quality 75 assets/img/poster.webp
```

### 3.6 Audio ambiental

| | Original | Final |
|---|---|---|
| Formato | WAV PCM 24 bits | **MP3** (LAME) |
| Canales / frecuencia | Estéreo · 44,1 kHz | Estéreo · 44,1 kHz |
| Duración | 50 s | **15 s** (tramo del segundo 10 al 25) |
| Bitrate | 2.116 kbps | **128 kbps CBR** |
| Peso | 13,2 MB | **241.205 bytes (~236 KB)** |

```bash
ffmpeg -ss 10 -i ambiente-original.wav -t 15 -af "afade=t=in:st=0:d=2,afade=t=out:st=13:d=2" -c:a libmp3lame -b:a 128k -ar 44100 -ac 2 -map_metadata -1 -map_chapters -1 assets/audio/ambiente-nebula.mp3
```

- **Fundidos:** entrada de 2 s (0-2 s) y salida de 2 s (13-15 s), verificados por nivel medio: −44,6 dB al inicio, −23,4 dB en el centro y −46,1 dB al final.
- **`-map_metadata -1 -map_chapters -1`:** elimina metadatos heredados del original (software, fecha, identificadores, capítulos).
- **Peso esperado:** 128 kbps × 15 s ÷ 8 = 240 KB, que coincide con el resultado.
- Algunas herramientas muestran 15,05 s: el MP3 trabaja en tramas de 1.152 muestras (~26 ms) y el codificador añade un relleno técnico. El contenido dura 15,00 s.

---

## 4. Justificación de formatos

| Recurso | Formato | Motivo |
|---|---|---|
| Hero y miniaturas | **WebP con pérdida** | Fotografías e ilustraciones con degradados y mucho detalle: necesitan compresión con pérdida (en PNG pesarían varios MB). WebP comprime bastante más que JPEG con calidad visual equivalente y lo soportan todos los navegadores actuales. No necesitan transparencia. |
| Logo | **SVG** | Gráfico vectorial: nítido a cualquier tamaño y en pantallas de alta densidad, pesa menos de 0,5 KB, es texto (se comprime con gzip/brotli en el servidor y se puede editar), es accesible y, al ser un diseño propio, se publica con la licencia del proyecto. En la UT3 se cargaba como archivo externo con `<img>`; en la UT4 pasa a **SVG inline** para poder cambiar sus colores con CSS (ver apartado 8.1). |
| CTA animado | **WebP animado** | El GIF está limitado a 256 colores: el degradado del halo de neón saldría con bandas. WebP admite color de 24 bits y transparencia, comprime mucho más y es la opción recomendada en el enunciado. |
| Vídeo | **MP4 · H.264** | Compatibilidad universal en navegadores. Códecs más recientes (VP9 en WebM, AV1) comprimen más y podrían añadirse como `<source>` adicional, pero H.264 garantiza la reproducción en cualquier dispositivo. |
| Audio | **MP3 · 128 kbps estéreo** | Compatibilidad universal. 128 kbps en estéreo es la tasa adecuada para música o ambientes, ya que conserva la sensación de espacio; para voz bastarían 64 kbps en mono. |

> Recordatorio: **MP4 es un contenedor, no un códec**. El contenedor es la "caja"; H.264 es el formato en que se comprime el vídeo que va dentro.

---

## 5. Decisiones de rendimiento (WPO) y accesibilidad

### Rendimiento

- **`width` y `height` reales** en todas las imágenes y en el vídeo: el navegador reserva el espacio antes de descargar y la página no "salta" (evita CLS).
- **`loading="lazy"`** y `decoding="async"` en las imágenes que están por debajo de la primera pantalla (galería).
- **Excepción justificada: la hero, el logo y el CTA de neón no llevan `loading="lazy"`.** El enunciado pide *lazy* en todas las imágenes estáticas, pero la hero es el **LCP** (*Largest Contentful Paint*), el elemento más grande de la primera pantalla. Cargarla en diferido retrasaría la aparición de la página y empeoraría la métrica de Core Web Vitals. Por eso se precarga con `<link rel="preload">` y lleva `fetchpriority="high"`. El logo y el CTA de neón también están en la primera pantalla.
- **Vídeo:** `preload="metadata"` (solo descarga la duración y las dimensiones) y `poster` para la precarga visual.
- **Audio:** `preload="none"` (no descarga nada hasta que el usuario pulsa *play*).
- **Sin fuentes web:** se usan **fuentes del sistema** (`system-ui`), con cero descargas adicionales. En la UT4 se añade **Bootstrap 5.3.9** por CDN solo para el modal del vídeo (ver apartado 8.3).
- **Peso total de los recursos multimedia: ~3,2 MB**, de los que el vídeo supone 2,5 MB.

### Accesibilidad

- **HTML5 semántico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`/`<figcaption>`, `<footer>`. Un único `<h1>` y una jerarquía h1 → h2 sin saltos. Cada sección está vinculada a su título con `aria-labelledby`.
- **Atributo `alt`:**
  - Descriptivo en todas las imágenes de contenido: describe lo que se ve, sin créditos.
  - **Vacío (`alt=""`) en el logo**, porque es decorativo: el nombre "Nébula" ya aparece como texto a su lado y, si no, un lector de pantalla lo repetiría.
  - **Funcional en el CTA** (`alt="Encarga tu mundo"`): la imagen está dentro de un enlace, así que el `alt` describe la acción, no el dibujo.
- **El CTA es un enlace `<a href="mailto:">` y no un `<button>`**, porque navega (abre el correo).
- **Sin reproducción automática:** el vídeo y el audio solo se reproducen cuando el usuario lo decide (WCAG 1.4.2).
- **Animación del CTA:** ciclo de 1,5 s y ningún cambio dura menos de 200 ms, es decir, **menos de 3 destellos por segundo** (WCAG 2.3.1).
- **`:focus-visible`:** contorno visible para la navegación con teclado.
- **Contraste:** degradado oscuro sobre la hero para garantizar la legibilidad del título.
- **Idioma:** `<html lang="es">`.

### Diseño (CSS)

- **Variables CSS** (`:root`) para la paleta: fondo `#0b0b14`, texto `#e8e8f0` (blanco roto, menos fatiga visual que el blanco puro) y acento cian `#00e5ff`, el mismo del CTA.
- **`object-fit: cover`** en la hero: llena el espacio sin deformarse.
- **Tipografía fluida con `clamp()`**.
- **Galería con CSS Grid** (`repeat(auto-fit, minmax(260px, 1fr))`): el número de columnas se adapta al ancho disponible sin media queries.
- Contenido centrado con un ancho máximo de 1100 px; el texto de la hero está alineado con esa misma columna.

---

## 6. Validación

- **HTML:** validado con el [Nu HTML Checker del W3C](https://validator.w3.org/nu/) (vnu 26.11.4) sobre la versión final de `index.html` · **0 errores y 0 advertencias** (*"Document checking completed. No errors or warnings to show."*).

---

## 7. Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| **Squoosh** | Redimensionado y compresión WebP de la hero |
| **FreeConvert** | Conversión TIFF → WebP (paso intermedio) |
| **GIMP 3.2** | Recorte y escalado de miniaturas; diseño y animación del CTA |
| **SVGOMG** | Optimización del logo SVG |
| **FFmpeg 9.0** | Recorte, compresión y conversión de vídeo y audio; extracción del póster |
| **Visual Studio Code** | Maquetación HTML y CSS |
| **Git / GitHub** | Control de versiones |
| **Bootstrap 5.3.9 (CDN)** | Componente Modal para el vídeo (UT4) |
| **Chrome DevTools** | Depuración con `debugger;`, consola y modo dispositivo (UT4) |

---

## 8. UT4 · Interactividad (RA4)

Rama de trabajo: `artista-nebula2`. La entrega anterior queda marcada con la etiqueta `ut3`.
Toda la interactividad está en **`assets/js/main.js`**, escrito en JavaScript sin librerías (*Vanilla JS*), con funciones tradicionales (`function`), tipado con **JSDoc** y comprobado con `// @ts-check` en VS Code.

### 8.1 Logo en SVG inline

- El logo pasa de `<img src="logo-nebula.svg">` a **SVG escrito dentro del HTML** (*inline*).
- Sus colores no están fijados en el SVG: salen del CSS mediante clases (`.logo-anillo`, `.logo-base`…) y **variables CSS** (`--logo-anillo`, `--logo-planeta`, `--logo-hover`), aplicadas con `stroke` y `stop-color`.
- Con `:hover` y `:focus-visible` sobre el enlace `.brand`, el anillo cambia de cian a magenta con `transition: stroke 0.3s`.
- Accesibilidad: `aria-hidden="true"` y `focusable="false"`, porque el texto "Nébula" ya da nombre al enlace.

**Ventajas del SVG inline frente a `<img>`:**

| SVG inline | SVG con `<img>` |
|---|---|
| El CSS de la página llega a cada parte del dibujo (cambiar colores, animar) | El SVG es una caja cerrada: el CSS de la página no entra |
| Sin petición HTTP extra | Una petición más (aunque se puede cachear) |
| Se puede manipular desde JS como cualquier elemento del DOM | No accesible desde el DOM de la página |
| Sigue siendo vectorial y ligero | Igual |

El inconveniente es que no se cachea por separado; con un logo de menos de 1 KB no compensa.

### 8.2 Galería dinámica

- Un **visor** (`<figure class="visor">`) muestra la obra en **alta resolución (1200 × 750 WebP)** y las tres miniaturas son `<button type="button" class="miniatura">`, porque ejecutan una acción y no navegan.
- `main.js` guarda los datos de cada mundo en un **array de objetos** (`{ grande, titulo }`) en el mismo orden que las miniaturas. `querySelectorAll('.miniatura')` + `forEach` asocian a cada botón un `addEventListener('click')` que:
  1. añade la clase `.cambiando` al visor (el CSS lo funde a `opacity: 0`);
  2. con `setTimeout` de 250 ms cambia `src`, `alt` y título, y quita la clase para que reaparezca;
  3. mueve la clase `.activa` (borde cian) a la miniatura pulsada.
- **Versiones grandes** generadas con FFmpeg a partir de los originales, recortadas a 16:10 sin deformar:

| Archivo | Peso |
|---|---|
| `atlas-cuna-grande.webp` | 31.806 bytes |
| `atlas-dos-soles-grande.webp` | 78.424 bytes |
| `atlas-genesis-grande.webp` | 81.860 bytes |

- *Dos Soles* necesitó un recorte manual (`crop=3800:2375:600:0,scale=1200:750`) para conservar los dos soles y dejar fuera el rótulo *"Artist's Concept"* del original.

### 8.3 Modal de vídeo con Bootstrap

- **Bootstrap 5.3.9** se carga por CDN: el CSS en el `<head>` **antes** de `style.css` (así mis estilos prevalecen en la cascada) y el *bundle* de JS (incluye Popper) antes de `</body>`, seguido de `main.js`.
- El botón **"Ver Reel de Animación"** abre el modal con `data-bs-toggle="modal"` y `data-bs-target="#modal-reel"`. El modal (`.modal.fade`, centrado y extragrande) contiene el `<video>` y su crédito; `data-bs-theme="dark"` adapta sus colores al diseño oscuro.
- `main.js` escucha los **eventos del componente**:
  - `shown.bs.modal` → `video.play()` cuando el modal termina de abrirse.
  - `hide.bs.modal` → `video.pause()` en cuanto empieza a cerrarse. Funciona con la ✕, con un clic fuera del modal y con la tecla Esc.
- Al cargar Bootstrap, su CSS daba a las miniaturas el aspecto de botón del navegador: se anuló con un *reset* en `.miniatura` (`padding: 0`, `border: 0`, `background: none`).

### 8.4 Audio con controles propios

- El `<audio>` **no lleva `controls`**: el reproductor nativo queda oculto y se maneja con dos botones propios (clase `.boton`, el mismo estilo neón del resto de la página):
  - **"Escuchar ambiente espacial"**: si `audio.paused` es `true` llama a `.play()`; si no, a `.pause()`. El texto cambia a "Pausar ambiente espacial".
  - **"Silenciar"**: `audio.muted = !audio.muted`; el audio sigue avanzando sin sonido y el texto cambia a "Activar sonido".
- El texto del botón indica siempre qué pasará al pulsarlo, de modo que el usuario sabe en qué estado está el audio.
- Se mantiene `preload="none"`: el MP3 no se descarga hasta que se pulsa.

### 8.5 Feedback visual (CSS3)

Todos los elementos interactivos tienen los estados **reposo · `:hover` · `:focus-visible` · `:active`**, con transiciones suaves de `transform` (escala), `opacity` o color:

| Elemento | `:hover` / `:focus-visible` | `:active` |
|---|---|---|
| Logo | el anillo cambia a magenta | el planeta encoge (`scale(0.9)`) |
| Menú | el enlace se pone cian | se atenúa (`opacity: 0.7`) |
| Botones `.boton` (hero, Reel, audio, contacto) | se rellenan de cian | encogen (`scale(0.96)`) |
| CTA de neón | crece (`scale(1.05)`) | encoge (`scale(0.96)`) |
| Miniaturas | zoom (`scale(1.05)`) | se atenúan (`opacity: 0.8`) |
| Enlaces de créditos y licencia | se aclaran | se atenúan |
| ✕ del modal | estilos de Bootstrap | — |

- `:focus-visible` comparte selector con `:hover`: quien navega con el **teclado** (Tab) ve el mismo efecto que quien usa el ratón, y además el contorno cian general.
- La miniatura seleccionada queda marcada con `outline` cian (`.miniatura.activa`).

### 8.6 Pruebas en navegadores y dispositivos

| Prueba | Chrome (escritorio) | Chrome · modo dispositivo |
|---|---|---|
| Galería: cambia la imagen con fundido | ✅ | ✅ |
| Modal: reproduce al abrir y pausa al cerrar (✕, clic fuera, Esc) | ✅ | ✅ |
| Audio: reproducir, pausar, silenciar | ✅ | ✅ |
| Hover y foco con teclado visibles | ✅ | ✅ |
| Consola sin errores | ✅ | ✅ |
| Sin desplazamiento horizontal | ✅ | ✅ (responsive, 390 px y 768 px) |

- Las pruebas en **Firefox y Edge** no se han realizado en esta entrega.
- **Responsive:** por debajo de 600 px (`@media (max-width: 600px)`) el logo se coloca encima del menú para que no se solapen, y el crédito de la hero gana margen lateral.
- **Zonas táctiles (mínimo 44 × 44 px):** medidas en un iPhone 13 (390 px) y un iPad Mini (768 px) emulados:
  - Los enlaces del menú se ampliaron con `padding` (de 19 px a ≥ 44 px de alto) y el logo con `min-height: 44px`.
  - Los botones miden 48-55 px de alto.
  - **Excepción justificada: los enlaces de créditos** (*Imagen*, *CC BY 4.0*, *Audio*, *CC0*) quedan por debajo de 44 px. Son enlaces **dentro de una frase** de letra pequeña, un caso que las pautas de accesibilidad (WCAG 2.2, criterio 2.5.8, excepción *"Inline"*) eximen del tamaño mínimo. Agrandarlos rompería la lectura de los pies de foto, que son información secundaria.

---

## 9. Bibliografía

**Apuntes del módulo (ILERNA):**

- ILERNA. *Diseño de Interfaces Web*. Material didáctico, 2º DAW.
- ILERNA. *Desarrollo Web en Entorno Cliente*. Material didáctico, 2º DAW.

**Documentación técnica:**

- MDN Web Docs. [`Document.getElementById()`](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
- MDN Web Docs. [`Document.querySelectorAll()`](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)
- MDN Web Docs. [`EventTarget.addEventListener()`](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- MDN Web Docs. [`NodeList.forEach()`](https://developer.mozilla.org/es/docs/Web/API/NodeList/forEach)
- MDN Web Docs. [`setTimeout()`](https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout)
- MDN Web Docs. [`HTMLMediaElement`](https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement) (`play()`, `pause()`, `paused`, `muted`)
- MDN Web Docs. [`:focus-visible`](https://developer.mozilla.org/es/docs/Web/CSS/:focus-visible)
- Bootstrap. [Modal · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/components/modal/) (estructura y eventos `shown.bs.modal` / `hide.bs.modal`)
- Bootstrap. [Color modes · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/customize/color-modes/) (`data-bs-theme`)
- Visual Studio Code. [JavaScript type checking](https://code.visualstudio.com/docs/languages/javascript#_type-checking) (`// @ts-check`)
- TypeScript. [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- W3C. [WCAG 2.2 · 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- Creative Commons. [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es) · [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.es)

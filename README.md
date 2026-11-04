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
    ├── img/
    │   ├── hero-carina.webp
    │   ├── logo-nebula.svg
    │   ├── atlas-cuna.webp
    │   ├── atlas-dos-soles.webp
    │   ├── atlas-genesis.webp
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
| Logo | Diseño propio | Jose Ramón Neira Vega | — | Propio | — |
| CTA animado | Diseño propio | Jose Ramón Neira Vega | — | Propio | — |

**Criterios seguidos:**

- Se descartaron Unsplash, Pexels y Pixabay: tienen **licencias propias**, no Creative Commons, como exige el enunciado. Las imágenes y el vídeo proceden de **ESA/Webb** ([política de uso](https://esawebb.org/copyright/), CC BY 4.0) y el audio de **Freesound** con licencia **CC0**.
- Se evitaron licencias **ND** (*NoDerivatives*), porque recortar o comprimir ya es una obra derivada.
- **Atribución en la página:** cada `<figcaption>` indica autor, enlace a la fuente, licencia y cambios realizados, como exige CC BY 4.0 (en la versión 4.0 el título de la obra es opcional).
- El vídeo original incluía una pista musical de un tercero con su propia licencia: **se eliminó la pista de audio**.

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
| Logo | **SVG** | Gráfico vectorial: nítido a cualquier tamaño y en pantallas de alta densidad, pesa menos de 0,5 KB, es texto (se comprime con gzip/brotli en el servidor y se puede editar), es accesible mediante `<title>` y `alt`, y al ser un diseño propio no requiere licencia. Se carga como archivo externo con `<img>` para aprovechar la caché del navegador. |
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
- **Sin frameworks CSS ni fuentes web:** se usan **fuentes del sistema** (`system-ui`), con cero descargas adicionales.
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
- **`prefers-reduced-motion`:** desactiva las transiciones y el desplazamiento suave para quien lo solicite en su sistema operativo.
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

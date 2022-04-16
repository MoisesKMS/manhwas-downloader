document.addEventListener('DOMContentLoaded', eventos);

function eventos() {
    ultimosCapitulos();
}

function listarSeries(titulo, url, imagen, capitulo_nombre, capitulo_url) {
    const seriesContainer = document.querySelector('#lista-series')

    const div_serie = document.createElement('DIV');
    div_serie.classList.add('serie');

    const img_imagen = document.createElement('IMG');
    img_imagen.src = imagen;
    img_imagen.setAttribute('alt', titulo)
    img_imagen.classList.add('serie__imagen')
    div_serie.appendChild(img_imagen)

    const a_capitulo = document.createElement('A');
    a_capitulo.classList.add('serie__capitulo')
    a_capitulo.setAttribute('href', capitulo_url)
    a_capitulo.textContent = capitulo_nombre
    div_serie.appendChild(a_capitulo)


    const div_info = document.createElement('DIV');
    div_info.classList.add('serie__info');

    const h2_nombre = document.createElement('H2');
    h2_nombre.classList.add('serie__nombre')
    h2_nombre.textContent = titulo
    div_info.appendChild(h2_nombre)
    div_serie.appendChild(div_info)


    const a_url = document.createElement('a');
    a_url.classList.add('serie__url')
    a_url.setAttribute('href', url)
    a_url.textContent = 'Ver más';
    div_serie.appendChild(a_url)

    seriesContainer.appendChild(div_serie)

}
async function ultimosCapitulos() {
    const seriesContainer = document.querySelector('#lista-series')

    slider(seriesContainer);
    try {
        const respuesta = await fetch('http://127.0.0.1:3000/api/tumanhwas/latest-updates');
        const resultado = await respuesta.json()

        const series = resultado.last_updates;

        limpiarHTML(seriesContainer);
        series.forEach(serie => {
            const { titulo, url, imagen } = serie;
            const { capitulo_nombre, capitulo_url } = serie.ultimo_capitulo;
            listarSeries(titulo, url, imagen, capitulo_nombre, capitulo_url);
        });

    } catch (error) {
        console.log(error);
    }
}

function slider(contenedor) {
    contenedor.innerHTML = `<div class="spinner"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>`;
}

function limpiarHTML(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}
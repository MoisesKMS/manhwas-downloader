document.addEventListener('DOMContentLoaded', eventos);

function eventos() {
    ultimosCapitulos();
}

async function ultimosCapitulos() {
    // <div class="serie">
    //             <img src="https://tumanhwas.com/assets_m/series/covers/60b673810d0c0.jpg" alt="NOMBRE SERIE" class="serie__imagen">
    //             <div class="serie__info">
    //                 <h2 class="serie__nombre">La Villana Es Una Marioneta</h2>
    //                 <a href="#" class="serie__capitulo">Chapter: 55</a>
    //             </div>
    //             <a href="#" class="serie__url">Ver más</a>
    //         </div>

    try {
        const respuesta = await fetch('http://127.0.0.1:3000/api/tumanhwa/latest-updates');
        const resultado = await respuesta.json()

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
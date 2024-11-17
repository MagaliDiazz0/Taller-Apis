function obtenerChiste() {
    const idioma = document.getElementById('language').value;  // Obtener el idioma seleccionado
    const url = `https://v2.jokeapi.dev/joke/Any?lang=${idioma}`;  // Solo usar el parámetro lang para el idioma

    // Realizar la solicitud a la API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarChiste(data);
        })
        .catch(error => {
            document.getElementById('jokeContainer').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function mostrarChiste(data) {
    const jokeContainer = document.getElementById('jokeContainer');

    // Mostrar el contenedor de los chistes
    jokeContainer.classList.remove('oculto');

    if (data.type === 'single') {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
    } else if (data.type === 'twopart') {
        jokeContainer.innerHTML = `<p><strong>${data.setup}</strong><br>${data.delivery}</p>`;
    } else {
        jokeContainer.innerHTML = `<p>No se encontraron chistes para el idioma seleccionado.</p>`;
    }
}




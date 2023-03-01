
let personajeActual = 1;

const botonIzquierda = document.querySelector('.bi-chevron-left');
const botonDerecha = document.querySelector('.bi-chevron-right');
const cajaInicio = document.querySelector('#caja-inicio');
const cajaExperiencia = document.querySelector('#caja-experiencia');
const cajaEducacion = document.querySelector('#caja-educacion');
const cajaCertificaciones = document.querySelector('#caja-certificaciones');
const cajaProyectos = document.querySelector('#caja-proyectos');

botonIzquierda.addEventListener('click', () => {
    if (personajeActual > 1) {
    personajeActual--;
    mostrarPersonaje(personajeActual);
    }
});

botonDerecha.addEventListener('click', () => {
    if (personajeActual < data.personajes.length) {
    personajeActual++;
    mostrarPersonaje(personajeActual);
    }
});

function mostrarPersonaje(id) {
    const personaje = data.personajes.find(p => p.id === id);
    const contenidoCaja = `
    <div class="col-6">
        <h1>${personaje.nombre}</h1>
        <h6>${personaje.nacimiento} (${personaje.edad} años)</h6>
        <p>${personaje.descripcion}</p>
    </div>
    <div class="col-4">
        <img src="./assets/img/${personaje.imagen}" alt="Foto de ${personaje.nombre}">
    </div>
    `;
    const contenidoExp = `
    <div class="col-12">
        <ul>
            ${personaje.experiencia.map(exp => `<li>${exp.nombre} - ${exp.descripcion} (${exp.inicio} - ${exp.fin})</li>`).join('')}
        </ul>
    </div>
    `;
    const contenidoEdu = `
    <div class="col-12">
        <ul>
            ${personaje.educacion.map(edu => `<li>${edu.nombre} - ${edu.descripcion} (${edu.inicio} - ${edu.fin})</li>`).join('')}
        </ul>
    </div>
    `;
    const contenidoCert = `
    <div class="col-12">
        <ul>
            ${personaje.certificaciones.map(cert => `<li>${cert.nombre} (${cert.inicio} - ${cert.fin})</li>`).join('')}
        </ul>
    </div>
    `;
    const contenidoProy = `
    <div class="col-12">
        <ul>
            ${personaje.proyectos.map(proy => `<li>${proy.nombre} - ${proy.descripcion} (${proy.inicio} - ${proy.fin})</li>`).join('')}
        </ul>
    </div>
    `;
    cajaInicio.innerHTML = contenidoCaja;
    cajaExperiencia.innerHTML = contenidoExp;
    cajaEducacion.innerHTML = contenidoEdu;
    cajaCertificaciones.innerHTML = contenidoCert;
    cajaProyectos.innerHTML = contenidoProy;
}

// Mostrar el primer personaje al cargar la página
mostrarPersonaje(personajeActual);
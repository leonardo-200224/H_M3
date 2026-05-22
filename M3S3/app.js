// Selección usando getElementById
const notaInput = document.getElementById("notaInput");
const agregarBtn = document.getElementById("agregarBtn");

// Selección usando querySelector
const listaNotas = document.querySelector("#listaNotas");

// Mostrar referencias en consola
console.log(notaInput);
console.log(agregarBtn);
console.log(listaNotas);


let notas = [];

// Obtener datos guardados
const notasGuardadas = localStorage.getItem("notas");

// Verificar si existen notas guardadas
if (notasGuardadas) {

    // Convertir JSON a arreglo
    notas = JSON.parse(notasGuardadas);

    // Mostrar cantidad cargada
    console.log(`${notas.length} notas cargadas`);

    // Renderizar notas guardadas
    notas.forEach((nota) => {
        crearNota(nota);
    });
}

agregarBtn.addEventListener("click", () => {

    // Obtener texto limpio
    const textoNota = notaInput.value.trim();

    // Validar que no esté vacío
    if (textoNota === "") {

        alert("Por favor escribe una nota");

        return;
    }

    // Agregar nota al arreglo
    notas.push(textoNota);

    // Guardar en Local Storage
    guardarNotas();

    // Crear elemento en el DOM
    crearNota(textoNota);

    // Mensaje en consola
    console.log("Nota agregada");

    // Limpiar input
    notaInput.value = "";

    // Regresar foco al input
    notaInput.focus();
});

function crearNota(texto) {

    // Crear elemento li
    const li = document.createElement("li");

    // Crear span para el texto
    const span = document.createElement("span");

    // Agregar contenido
    span.textContent = texto;

    // Crear botón eliminar
    const eliminarBtn = document.createElement("button");

    eliminarBtn.textContent = "Eliminar";

    // Agregar clase CSS
    eliminarBtn.classList.add("eliminarBtn");

    // Agregar elementos al li
    li.appendChild(span);

    li.appendChild(eliminarBtn);

    // Agregar li al ul
    listaNotas.appendChild(li);

    // Evento para eliminar nota
    eliminarBtn.addEventListener("click", () => {

        // Eliminar li del DOM
        listaNotas.removeChild(li);

        // Eliminar nota del arreglo
        notas = notas.filter((nota) => nota !== texto);

        // Actualizar Local Storage
        guardarNotas();

        // Mensaje en consola
        console.log("Nota eliminada");
    });
}

function guardarNotas() {

    // Guardar arreglo en Local Storage
    localStorage.setItem(
        "notas",
        JSON.stringify(notas)
    );
    console.log("Notas guardadas en Local Storage");
}
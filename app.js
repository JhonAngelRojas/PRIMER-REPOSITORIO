// app.js

document.getElementById('eventoForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita que la página se recargue

    // Capturar datos del formulario
    const nombreEvento = document.getElementById('nombreEvento').value;
    const fechaEvento = document.getElementById('fechaEvento').value;

    // Validar que los campos no estén vacíos
    if (nombreEvento && fechaEvento) {
        agregarEvento(nombreEvento, fechaEvento);
        document.getElementById('eventoForm').reset();  // Reiniciar el formulario
    }
});

function agregarEvento(nombre, fecha) {
    const listaEventos = document.getElementById('listaEventos');
    const li = document.createElement('li');
    
    // Insertar evento en la lista
    li.innerHTML = `${nombre} - ${fecha} <button onclick="eliminarEvento(this)">Eliminar</button>`;
    listaEventos.appendChild(li);
}

function eliminarEvento(button) {
    const li = button.parentElement;
    li.remove();  // Eliminar el evento de la lista
}

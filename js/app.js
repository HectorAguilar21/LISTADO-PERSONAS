const personas = [];

function mostrarPersonas() {
  if (personas.length > 0) {
    nombreCompleto = ''
    for (i = 0; i < personas.length; i++) {
      nombreCompleto += `<li> ${personas[i]._nombres} ${personas[i]._apellidos} </li>`

    }
    document.getElementById('listado-info').innerHTML = nombreCompleto
  } else {
    const mensaje = `<h3> Aun no hay personas agregadas </h3>`
    return document.getElementById('listado-info').innerHTML = mensaje
  }
}

function agregarPersonas(event) {
  event.preventDefault();

  const forma = document.forms['forma']
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];

  if (nombre.value != '' && apellido.value != '') {
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);

    mostrarPersonas();
  }
}

document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const asunto = document.getElementById("asunto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validar campos vacíos
  if (!nombre || !correo || !asunto || !mensaje) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  // Validar formato del correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }

  telefono ? telefono = telefono : telefono = 0;

  // Validar que el teléfono sea numérico
  if (isNaN(telefono)) {
    alert("Por favor, introduce un número de teléfono válido.");
    return;
  }


  // Si todo es válido, mostrar mensaje de éxito
  alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
  // Reiniciar formulario
  e.target.reset();
});

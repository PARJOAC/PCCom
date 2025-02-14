// Esperamos a que el DOM (estructura de la página) esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Usamos fetch para cargar el archivo "nav.html" de forma asincrónica
  fetch("./extra/nav.html")
    .then((response) => response.text()) // Convierte la respuesta en texto
    .then((data) => {
      // Inyectamos el contenido de "nav.html" en el elemento con id "navBar"
      document.getElementById("navBar").innerHTML = data;
    })
    .catch((error) => {
      // Si ocurre un error al cargar el archivo, lo mostramos en la consola
      console.error("Error al cargar el nav:", error);
    });
});

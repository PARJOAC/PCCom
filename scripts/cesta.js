// Array que representa los productos en el carrito de compras
const carrito = [
  {
    nombre: "Procesador AMD Ryzen 7 5800X",
    precio: 532,
    cantidad: 1,
    imagen: "./img/componentes/ryzen7_5800x3d.png",
  },
  {
    nombre: "Gigabyte GeForce RTX­­ 4060 Ti GAMING OC 8GB GDDR6 DLSS3",
    descripcion: "Tarjeta gráfica con arquitectura Ampere, ideal para gaming en 1080p y 1440p.",
    precio: 466,
    cantidad: 1,
    imagen: "./img/graficas/rtx_4060ti_gaming.png",
  },
];

// Función para actualizar el contenido del carrito en la página
function actualizarCarrito() {
  const contenedorCarrito = document.getElementById("carrito-items");
  contenedorCarrito.innerHTML = ""; // Limpiamos el contenedor antes de renderizar nuevamente
  let precioTotal = 0;

  // Iteramos sobre los productos del carrito para mostrarlos
  carrito.forEach((item, indice) => {
    const totalItem = item.precio * item.cantidad; // Calculamos el precio total de este artículo
    precioTotal += totalItem; // Sumamos el total al precio general del carrito

    // HTML para mostrar el producto en el carrito
    const itemCarritoHtml = `
      <div class="row item-carrito align-items-center mb-3">
        <div class="col-4 col-md-3">
          <img src="${item.imagen}" class="producto-img img-fluid" alt="${item.nombre}" />
        </div>
        <div class="col-8 col-md-6">
          <h5>${item.nombre}</h5>
          <p>Precio Unitario: ${item.precio.toFixed(2)}€</p>
          <p>Total: ${totalItem.toFixed(2)}€</p>
        </div>
        <div class="col-12 col-md-3 text-end">
          <div class="d-flex justify-content-center justify-content-md-end align-items-center">
            <button class="btn btn-cantidad" onclick="disminuirCantidad(${indice})">-</button>
            <span class="mx-2">${item.cantidad}</span>
            <button class="btn btn-cantidad" onclick="aumentarCantidad(${indice})">+</button>
            <button class="btn btn-eliminar ms-2" onclick="eliminarItem(${indice})">Eliminar</button>
          </div>
        </div>
      </div>
    `;
    // Añadimos el HTML del producto al contenedor
    contenedorCarrito.innerHTML += itemCarritoHtml;
  });

  // Actualizamos el total del carrito en la página
  document.getElementById("precio-total").textContent = `${precioTotal.toFixed(2)}€`;
}

// Función para aumentar la cantidad de un producto en el carrito
function aumentarCantidad(indice) {
  carrito[indice].cantidad++; // Aumentamos la cantidad
  actualizarCarrito(); // Volvemos a actualizar el carrito
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(indice) {
  // Si la cantidad es mayor que 1, la disminuimos. Si no, eliminamos el producto
  if (carrito[indice].cantidad > 1) {
    carrito[indice].cantidad--;
  } else {
    eliminarItem(indice); // Eliminamos el producto si la cantidad es 1
  }
  actualizarCarrito(); // Volvemos a actualizar el carrito
}

// Función para eliminar un producto del carrito
function eliminarItem(indice) {
  carrito.splice(indice, 1); // Eliminamos el producto en la posición indicada
  actualizarCarrito(); // Volvemos a actualizar el carrito
}

// Inicializamos el carrito para que se muestre cuando se carga la página
actualizarCarrito();

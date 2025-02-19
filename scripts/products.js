// Objeto que contiene los productos organizados por categorías
const productos = {
  "Periféricos": [
    {
      nombre:
        "Newskill Atreo Ratón Gaming RGB 6200 DPI",
      descripcion:
        "Apareciendo desde las sombras llega Newskill Atreo, el miembro más compacto y ligero de nuestra familia de ratones. Su versatilidad y capacidad de deslizamiento harán que no puedas quitar tus manos de él.",
      precio: 25.95,
      precioDescuento: null,
      imagen: "./img/perifericos/atreoRaton.png",
      calificacion: 4.7,
    },
    {
      nombre: "MSI G27C4X 27 LED FullHD 250Hz FreeSync Premium Curvo",
      descripcion:
        "Visualiza tu victoria con el monitor MSI G27C4X Curved Gaming™. Equipado con un panel de 1920x1080, 250hz de frecuencia de actualización y 1ms de tiempo de respuesta.",
      precio: 239,
      precioDescuento: 189,
      imagen: "./img/perifericos/pantallaMSI250hz.png",
      calificacion: 4.7,
    },
    {
      nombre: "Tempest K11 Ogre Teclado Mecánico Gaming RGB Negro",
      descripcion:
        "Tempest nunca deja de sorprender y nos presenta su nuevo teclado K11 Ogre Mecánico. Un teclado con tecnología de cable reforzado mallado USB que destaca por su diseño y ergonomía desde su primer uso.",
      precio: 239,
      precioDescuento: 189,
      imagen: "./img/perifericos/tecladoTempest.png",
      calificacion: 4.6,
    },
  ],
  "Componentes": [
    {
      nombre: "Procesador AMD Ryzen 5 5600X",
      descripcion:
        "Procesador de 6 núcleos y 12 hilos, ideal para gaming y multitarea.",
      precio: 376,
      precioDescuento: 144.95,
      imagen: "./img/componentes/ryzen5_5600x.png",
      calificacion: 4.8,
    },
    {
      nombre: "Procesador Intel Core i5-12600K",
      descripcion:
        "Procesador de 10 núcleos con rendimiento sobresaliente para juegos y productividad.",
      precio: 219.99,
      precioDescuento: 183.99,
      imagen: "./img/componentes/i5_12600k.png",
      calificacion: 4.8,
    },
    {
      nombre: "Procesador AMD Ryzen 7 5800X",
      descripcion:
        "Procesador de 8 núcleos para tareas intensivas y gaming de alto nivel.",
      precio: 532,
      precioDescuento: null,
      imagen: "./img/componentes/ryzen7_5800x3d.png",
      calificacion: 4.8,
    },
    {
      nombre: "Procesador Intel Core i7-12700K",
      descripcion:
        "Potente procesador de 12 núcleos, perfecto para gaming, edición y multitarea avanzada.",
      precio: 349.99,
      precioDescuento: 296.74,
      imagen: "./img/componentes/i7_12700.png",
      calificacion: 4.8,
    },
    {
      nombre: "Procesador AMD Ryzen 5 3600",
      descripcion:
        "Excelente opción para gaming y productividad diaria, con 6 núcleos y 12 hilos.",
      precio: 97.86,
      precioDescuento: null,
      imagen: "./img/componentes/ryzen5_3600.png",
      calificacion: 4.8,
    },
    {
      nombre: "Procesador Intel Core i3-12100F",
      descripcion:
        "Procesador de 4 núcleos y 8 hilos, ideal para tareas ligeras y gaming básico.",
      precio: 89,
      precioDescuento: null,
      imagen: "./img/componentes/i3_12100f.png",
      calificacion: 4.7,
    },
    {
      nombre: "Procesador AMD Ryzen 9 7900X",
      descripcion:
        "Procesador de 12 núcleos y 24 hilos, diseñado para tareas de alto rendimiento y gaming extremo.",
      precio: 671,
      precioDescuento: 422.64,
      imagen: "./img/componentes/ryzen9_7900x.png",
      calificacion: 4.7,
    },
  ],
  "Gráficas": [
    {
      nombre: "Gigabyte GeForce RTX­­ 4060 Ti GAMING OC 8GB GDDR6 DLSS3",
      descripcion:
        "Tarjeta gráfica con arquitectura Ampere, ideal para gaming en 1080p y 1440p.",
      precio: 466,
      precioDescuento: null,
      imagen: "./img/graficas/rtx_4060ti_gaming.png",
      calificacion: 4.8,
    },
    {
      nombre:
        "Tarjeta Gráfica AsRock Challenger D AMD Radeon RX 6600 8 GB GDDR6",
      descripcion:
        "Tarjeta gráfica de alto rendimiento para gaming en 1080p, con excelente relación calidad-precio.",
      precio: 279.99,
      precioDescuento: 232.95,
      imagen: "./img/graficas/rx_6600_8gb.png",
      calificacion: 4.7,
    },
    {
      nombre: "ASUS Dual GeForce RTX 4060 EVO OC Edition 8GB GDDR6 DLSS3",
      descripcion:
        "Tarjeta gráfica con arquitectura Ampere, ideal para gaming en 1080p.",
      precio: 399.99,
      precioDescuento: 348.99,
      imagen: "./img/graficas/asus_dual_rtx_4060_evo_oc.png",
      calificacion: 4.8,
    },
    {
      nombre:
        "Zotac Gaming GeForce RTX 4080 SUPER Trinity Black Edition 16GB GDDR6X DLSS3",
      descripcion:
        "Tarjeta gráfica con arquitectura Ampere, ideal para gaming en 4K.",
      precio: 1299,
      precioDescuento: 1099.99,
      imagen: "./img/graficas/rtx_4080_super.png",
      calificacion: 4.8,
    },
    {
      nombre:
        "Zotac Gaming GeForce RTX 4070 Ti SUPER Trinity Black Edition 16GB GDDR6X DLSS3",
      descripcion:
        "Tarjeta gráfica con arquitectura Ampere, ideal para gaming en 1440p.",
      precio: 999.99,
      precioDescuento: 869.99,
      imagen: "./img/graficas/rtx_4070.png",
      calificacion: 4.8,
    },
  ],
  "Pc's Montados": [
    {
      nombre:
        "PcCom Ready AMD Ryzen 7 5800X / 32GB / 1TB SSD / RTX 4060 Ti + Windows 11 Home",
      descripcion:
        "PC de entrada con procesador Ryzen 7 y tarjeta gráfica RTX 4060 Ti para juegos a 1440p.",
      precio: 1556.31,
      precioDescuento: 1349,
      imagen:
        "./img/pcMontado/pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-4060-ti-windows-11-home.png",
      calificacion: 4.7,
    },
    {
      nombre:
        "Ordenador Sobremesa PcCom Ready Intel Core i5-12400F / 32 GB / 1TB SSD / RTX 4060",
      descripcion:
        "PC de alto rendimiento con procesador Intel i5 y tarjeta gráfica RTX 4060, ideal para gaming en 1080p y streaming.",
      precio: 962.17,
      precioDescuento: 859,
      imagen:
        "./img/pcMontado/pccom-ready-intel-core-i5-12400f-32-gb-1tb-ssd-rtx-4060.png",
      calificacion: 4.6,
    },
    {
      nombre:
        "PcCom Custom AMD Ryzen 7 7800X3D / 64GB / 2TB SSD / RTX 4080 Super 16GB + Windows 11 Home",
      descripcion:
        "PC de alto rendimiento con procesador Ryzen 7 y tarjeta gráfica RTX 4080, ideal para gaming en 4K y streaming.",
      precio: 4322.64,
      precioDescuento: null,
      imagen:
        "./img/pcMontado/pccom-custom-amd-ryzen-7-7800x3d-64gb-2tb-ssd-rtx-4080-super-16gb-windows-11-home.png",
      calificacion: 5,
    },
    {
      nombre: "PC Racing Gaming AMD Ryzen 5 5600G/16GB/1TB SSD/RTX 3050",
      descripcion:
        "PC de alto rendimiento con procesador Ryzen 5 y tarjeta gráfica RTX 3050, ideal para gaming en 1080p y streaming.",
      precio: 1098.99,
      precioDescuento: 719.98,
      imagen:
        "./img/pcMontado/pccom-racing-gaming-amd-ryzen-5-5600g-16gb-1tb-ssd-rtx-3050.png",
      calificacion: 4.5,
    },
  ]
};

// Función para generar las estrellas en función de la calificación del producto
function renderStars(rating) {
  const estrellaCompleta = Math.floor(rating); // Estrellas completas
  const mediaEstrella = rating % 1 >= 0.5 ? 1 : 0; // Media estrella si la calificación es >= 0.5
  const sinEstrellas = 5 - estrellaCompleta - mediaEstrella; // Estrellas vacías

  // Devuelve la representación visual de las estrellas
  return "★".repeat(estrellaCompleta) + "☆".repeat(sinEstrellas);
}

// Código que se ejecuta una vez que el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const categoriasProductos = document.getElementById("product-categories");

  // Recorremos todas las categorías de productos
  Object.keys(productos).forEach((categoria) => {
    const productosCategoria = productos[categoria];

    // Creamos una nueva sección para cada categoría
    const seccionCategoria = document.createElement("div");
    seccionCategoria.classList.add("col-12");
    seccionCategoria.innerHTML = `
      <h3 class="text-center my-4 text-capitalize">${categoria}</h3>
      <div class="row g-4" id="${categoria}"></div>
    `;

    categoriasProductos.appendChild(seccionCategoria);

    // Obtenemos el contenedor de la categoría para agregar los productos
    const contenedorCategoria = document.getElementById(categoria);
    productosCategoria.forEach((producto) => {
      // Si tiene descuento, lo mostramos de forma especial
      const descuento = producto.precioDescuento
        ? `<span class='original-price'>${producto.precio.toFixed(2)}€</span> <span class='text-danger'>${producto.precioDescuento.toFixed(2)}€</span>`
        : `${producto.precio.toFixed(2)}€`;

      // Generamos las estrellas con la calificación del producto
      const estrellas = renderStars(producto.calificacion);

      // Agregamos el producto al contenedor de su categoría
      contenedorCategoria.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card product-card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <div class="product-info">
                <div class="price">${descuento}</div>
                <div class="stars">${producto.calificacion}${estrellas}</div>
              </div>
              <a href="../cesta.html" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      `;
    });
  });
});

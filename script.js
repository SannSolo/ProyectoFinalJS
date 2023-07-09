let productosCarrito = [];

async function mostrarProductos() {
  try {
    let contenedorProductos = document.getElementById("prendas");
    const response = await fetch('products.json');
    const data = await response.json();

    data.forEach((prenda) => {
      let contenedor = document.createElement("div");
      contenedor.classList.add("container-fluid");

      contenedor.innerHTML = `
        <div class="card">
          <img class="card-img-top" style="width:400px" src="${prenda.imagen}" alt="Card image">
          <div id="ropa" class="card-body">
            <h4 class="card-title">${prenda.nombre}</h4> 
            <h3 class="card-text">$${prenda.precio}</h3>
            <p class="card-text">talle ${prenda.talle}</p>
            <button type="button" id="${prenda.id}" class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      `;

      contenedorProductos.appendChild(contenedor);
    });

    let botonesAgregar = document.querySelectorAll(".btn-primary");

    botonesAgregar.forEach((boton) => {
      boton.addEventListener('click', function(e) {
        const id = e.currentTarget.id;
        console.log("click en producto", id);
        let producto = data.find(p => p.id === parseInt(id));
        agregarAlCarrito(producto);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

mostrarProductos();

function marcarBoton(id) {
  let boton = document.getElementById(id);
  boton.classList.add('added');
  setTimeout(() => {
    boton.classList.remove('added');
  }, 1000);
}

function agregarAlCarrito(producto) {
  let productoEnCarrito = productosCarrito.find(p => p.id === producto.id);
  if(productoEnCarrito){
    productoEnCarrito.cantidad += 1;
  } else {
    producto = {...producto, cantidad: 1};
    productosCarrito.push(producto);
  }
  marcarBoton(producto.id);
  guardarCarritoEnStorage();
}

function guardarCarritoEnStorage() {
  localStorage.setItem('carrito', JSON.stringify(productosCarrito));
}

function cargarCarritoDeStorage() {
  let carritoGuardado = localStorage.getItem('carrito');
  if(carritoGuardado) {
    productosCarrito = JSON.parse(carritoGuardado);
  }
}

cargarCarritoDeStorage();

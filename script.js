
async function mostrarProductos() {
  try {
    let contenedorProductos = document.getElementById("prendas");
  
    console.log(prendas);
  
    const response = await fetch('products.json');
    const data = await response.json();
  
    console.log(data);
  
    data.forEach((prenda) => {
      console.log(prenda);
  
      let contenedor = document.createElement("div");
      contenedor.classList.add("container-fluid");
  
      contenedor.innerHTML = `
        <div class="card">
          <img class="card-img-top" style="width:400px" src="${prenda.imagen}" alt="Card image">
          <div id="ropa" class="card-body">
            <h4 class="card-title">${prenda.nombre}</h4> 
            <h3 class="card-text">$${prenda.precio}</h3>
            <p class="card-text">talle ${prenda.talle}</p>
            <button type="button" id="agregar-al-carrito" class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      `;
  
      contenedorProductos.appendChild(contenedor);
    });
  } catch (error) {
    console.log(error);
  }
}

mostrarProductos();



let botonesAgregar = document.querySelectorAll(".btn-primary")

botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", avisoAdd)
})

function avisoAdd() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}

// // let carrito = document.getElementById("prendas")
// //     console.log(prendas.innerHTML)


// prendas.forEach((prenda) => console.log(prenda.nombre));

// console.log("              LOS PRECIOS (en mismo orden que modelo)                      ")

// prendas.forEach((prenda) => console.log(prenda.precio))

// console.log("          PRODUCTOS EN STOCK              ")


// let enStock = prendas.filter((prenda) => prenda.stock > 0)
// console.log(enStock);

// console.log("          PRODUCTOS TALLE UNICO              ")

// let talleUnico = prendas.filter((prenda) => prenda.talle === "unico")
// console.log(talleUnico)




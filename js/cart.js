let carrito = [];
const productoContenedor = document.getElementById("producto-contenedor");


productoContenedor.addEventListener('click', (event) => {
    if (event.target.classList.contains('agregar')) {
           validarProductoCarrito(event.target.id);
    }
  });
  
const validarProductoCarrito = (productoId) => {
    const estaRepetido = carrito.some((producto) => producto.id == productoId);
  
    if (estaRepetido) {
      const producto = carrito.find((producto) => producto.id == productoId);
      producto.cantidad++;
      const cantidad = document.getElementById(`cantidad${producto.id}`);
      cantidad.textContent = `Cantidad: ${producto.cantidad}`
    } else {
      const producto = pinturas.find((producto) => producto.id == productoId);
      carrito.push(producto);
      pintarProductoCarrito(producto);
    }
  };
  
  const pintarProductoCarrito = (producto) => {
    const carritoContenedor = document.getElementById("carrito-contenedor");
  
    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
  
    div.innerHTML += `
      <p>${producto.color}</p>
      <p>$ ${producto.precio}</p>
      <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
      <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    carritoContenedor.appendChild(div);
  };
  
  const eliminarProductoCarrito = (productoId) => {
    const productoIndex = carrito.findIndex((producto) => producto.id == productoId);
  
    // carrito[productoIndex].cantidad === 1
    //   ? carrito.splice(productoIndex, 1)
    //   : carrito[productoIndex].cantidad--
  
    if (carrito[productoIndex].cantidad === 1) {
      carrito.splice(productoIndex, 1)
    } else {
      carrito[productoIndex].cantidad--
    }
  
    pintarCarrito(carrito);
  };
  
  const pintarCarrito = (carrito) => {
    const carritoContenedor = document.getElementById('carrito-contenedor');
  
    carritoContenedor.innerHTML = '';
  
    carrito.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('productoEnCarrito');
  
      div.innerHTML += `
        <p>${producto.color}</p>
        <p>$ ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad} </p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
      `
      carritoContenedor.appendChild(div);
    });
  };

//   //modal

  const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(event.target.value);
    };
});
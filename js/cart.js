let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const productoContenedor = document.getElementById('producto-contenedor');
const mostrarCarrito = document.querySelector('.mostrarCarrito');
const botonComprar = document.querySelector('#comprar');
const botonVaciar = document.getElementById('vaciar');

const pintarCarrito = (carrito) => {
  const carritoContenedor = document.getElementById('carrito-contenedor');
  if(carritoContenedor){
  carritoContenedor.innerHTML = '';
  carrito.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');

    div.innerHTML += `
        <p>${producto.color}</p>
        <img src=${producto.img}>
        <p>$ ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad} </p>
        <button class="boton-eliminar" value="${producto.id}">Eliminar</button>
      `
    carritoContenedor.appendChild(div);
  })};
};


if(productoContenedor){
productoContenedor.addEventListener('click', (event) => {
  if (event.target.classList.contains('agregar')) {
        validarProductoCarrito(event.target.id);
        Toastify({
          text: "Agregaste la pintura al carrito\n\n :)",
          className: "info",
          gravity: "bottom",
          position: "right", 
          style: {
            background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
            color:"black"
          }
        }).showToast();
  }
})};

const validarProductoCarrito = (productoId) => {
  const estaRepetida = carrito.some((producto) => producto.id == productoId);

  if (estaRepetida) {
    const producto = carrito.find((producto) => producto.id == productoId);
    producto.cantidad++;
    const cantidad = document.getElementById(`cantidad${producto.id}`);
    cantidad.textContent = `Cantidad: ${producto.cantidad}`
    actualizarTotalCarrito(carrito);
  } else {
    const producto = pinturas.find((producto) => producto.id == productoId);
    carrito.push(producto);

    pintarProductoCarrito(producto);
    actualizarTotalCarrito(carrito);
  }
};

const pintarProductoCarrito = (producto) => {
  const carritoContenedor = document.getElementById("carrito-contenedor");
  const div = document.createElement('div');
  div.classList.add('productoEnCarrito');

  div.innerHTML += `
      <p>${producto.color}</p>
      <img src=${producto.img}>
      <p>$ ${producto.precio}</p>
      <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
      <button class="boton-eliminar" value="${producto.id}">Eliminar</button>
    `
  carritoContenedor.appendChild(div);
};

const eliminarProductoCarrito = (productoId) => {
  const productoIndex = carrito.findIndex((producto) => producto.id == productoId);

  carrito[productoIndex].cantidad === 1
    ? carrito.splice(productoIndex, 1)
    : carrito[productoIndex].cantidad--

    Toastify({
      text: "Quitaste la pintura de tu compra",
      className: "info",
      gravity: "bottom",
      position: "right", 
      style: {
        background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
        color:"black"
      }
    }).showToast();
  pintarCarrito(carrito);
  actualizarTotalCarrito(carrito);
};

function vaciarCarrito(producto) {
 carrito.splice(producto, carrito.length);
 Toastify({
  text: "Haz vaciado tu \n carrito de compras",
  className: "info",
  gravity: "bottom",
  position: "right", 
  style: {
    background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
    color:"black"
  }
}).showToast();
      pintarCarrito(carrito);
    actualizarTotalCarrito(carrito);
}

const actualizarTotalCarrito = (carrito) => {
  const litrosTotal = carrito.reduce((acc, producto) => acc + (producto.cantidad * producto.litros), 0);
  const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  const compraTotal = carrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);


  pintarTotalesCarrito(cantidadTotal, compraTotal, litrosTotal);
  guardarCarritoStorage(carrito);
};

const pintarTotalesCarrito = (cantidadTotal, compraTotal, litrosTotal) => {
  const litrosCarrito = document.getElementById('litrosTotal');
  const contadorCarrito = document.getElementById('contador-carrito');
  const precioTotal = document.getElementById('precioTotal');
if(litrosCarrito){litrosCarrito.innerText = litrosTotal;}
  if(precioTotal){precioTotal.innerText = compraTotal;}
  contadorCarrito.innerText = cantidadTotal;
  };

  
const guardarCarritoStorage = (carrito) => {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};


if(mostrarCarrito){
mostrarCarrito.addEventListener('click', (event) => {
  if (event.target.classList.contains('boton-eliminar')) {
    eliminarProductoCarrito(event.target.value);
  };
})};

function avisarCarritoVacío (){
  if( carrito.length === 0 ){
    Toastify({
      text: "El carrito está vacío",
      className: "info",
      position: "center", 
      style: {
        background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
        color:"black"
      }
    }).showToast();
  }
 };

function botonComprarCarrito (){
  avisarCarritoVacío()
    Toastify({
    text: "Tu compra está procesada \n\n Gracias por elegirnos :)",
    className: "info",
    position: "center",
    style: {
      background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
      color: "black"
    }
  }).showToast();
  let carritoContenedor = document.getElementById('carrito-contenedor');
  while (carritoContenedor.hasChildNodes()) {
    carritoContenedor.removeChild(carritoContenedor.firstChild);
    vaciarCarrito()
  }} 

if(botonComprar){
botonComprar.addEventListener("click", botonComprarCarrito)};
if(botonVaciar){
botonVaciar.addEventListener("click", vaciarCarrito)};


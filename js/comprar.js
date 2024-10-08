document.addEventListener('DOMContentLoaded', () => {
  pintarProductos(pinturas);
  pintarProductoCarrito();
  actualizarTotalCarrito(carrito);

});

const pintarProductos = (pinturas) => {
    const contenedor = document.getElementById("producto-contenedor");

    pinturas.forEach(producto => {
       const div = document.createElement('div');
       div.classList.add('card');
       div.innerHTML += `<div class="card-image">
                           <img src=${producto.img}>
                           <span class="card-title">${producto.color}</span>
                           <a class="agregar"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                         </div>
                         <div class="card-content">
                             <p>${producto.tipo} | ${producto.litros} litros</p>
                             <p> $${producto.precio}</p>
                         </div>
                        `
       contenedor.appendChild(div);
     });
   };

<<<<<<< HEAD
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
=======
  const pintarProductos = () => {
    const contenedor = document.getElementById("producto-contenedor");
    fetch('/pinturas2.json')
       .then((response) => response.json())
      .then((productos) => {
        productos.forEach((producto) => {
          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML += `<div class="card-image">
                              <img src=${producto.img}>
                              <span class="card-title">${producto.color}</span>
                              <a class=""><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                                <p>${producto.tipo} | ${producto.litros} litros</p>
                                <p> $${producto.precio}</p>
                            </div>
                           `
          contenedor.appendChild(div);
        })
      })}
>>>>>>> branch1

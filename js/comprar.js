
const pintarProductos = (pinturas) => {
    const contenedor = document.getElementById("producto-contenedor");

   pinturas.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.img}>
                          <span class="card-title">${producto.color}</span>
                          <a class=""><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.tipo}</p>
                            <p> $${producto.precio}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };

//   const productos =
//   [
//       {
//           id: 1,
//           nombre: "Buzo 1",
//           tipo: "buzo",
//           desc: "Un buzo que re va con vos",
//           precio: 1200,
//           talle: "L",
//           imagen: '../public/images/buzo.jpg',
//           cantidad:1
//       },
  
//       {
//           id: 2,
//           nombre: "Remera 1",
//           tipo: "remera",
//           desc: "Una remera que re va con vos",
//           precio: 500,
//           talle: "L",
//           imagen: '../public/images/remera.jpg',
//           cantidad:1
//       },
  
//       {
//           id: 3,
//           nombre: "Camisa 1",
//           tipo: "camisa",
//           desc: "Una camisa que re va con vos",
//           precio: 900,
//           talle: "S",
//           imagen: '../public/images/camisa.jpg',
//           cantidad:1
//       },
  
//       {
//           id: 4,
//           nombre: "Pantalon 1",
//           tipo: "pantalon",
//           desc: "Una pantalon que re va con vos",
//           precio: 1600,
//           talle: "L",
//           imagen: '../public/images/pantalon.jpg',
//           cantidad:1
//       },
  
//       {
//           id: 5,
//           nombre: "Buzo 2",
//           tipo: "buzo",
//           desc: "Un buzo que re va con vos",
//           precio: 1200,
//           talle: "L",
//           imagen: '../public/images/buzo.jpg',
//           cantidad:1
//       },
  
//       {
//           id: 6,
//           nombre: "Remera 2",
//           tipo: "remera",
//           desc: "Una remera que re va con vos",
//           precio: 500,
//           talle: "L",
//           imagen: '../public/images/remera.jpg',
//           cantidad:1
//       }
//   ];
  
document.addEventListener('DOMContentLoaded', pintarProductos(pinturas));


//CALCULADORA

const text = document.querySelector("#text");
const boton = document.getElementById("btn-calcular");
if (text) { text.innerText = "La superficie de tu pared es... "; }
if (boton) {
  boton.addEventListener("click", () => {
    let alto = document.querySelector(".num_uno").value;
    let ancho = document.querySelector(".num_dos").value;
    if (alto == "" || ancho == "") {
      Toastify({
        text: "Ingresa los metros",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
          color: "black"
        }
      }).showToast();
    } else {
let total = 0;
      let manos = 3;
      let superficie = (ancho * alto);
      let pintura = superficie / 12;
      total = pintura * manos;
      text.innerText = "Cantidad de manos: " + manos + "\n";
      text.innerText += "La superficie de tu pared es " + superficie + "  metros cuadrados. " + "\n";
      text.innerHTML += "Necesitas " + pintura.toFixed(2) + " litros de pintura por mano para cubrir tu pared." + "\n";
      
      text.innerHTML += "\n" + " Necesitas un total de " + Math.ceil(total) + " litros de pintura";
    }
  })
};



//Dark mode

if (document.getElementById('interruptor')) {
  const interruptor = document.getElementById('interruptor');
  const mainCalculadora = document.querySelector('.main-calculator')
  interruptor.onclick = () => {
    interruptor.classList.toggle('active');
    if (interruptor.className == 'theme-switch__checkbox active') {
      mainCalculadora.classList.toggle('dark')
    } else {
      mainCalculadora.classList.toggle('dark')
    }
  }
}

//Contador
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contador = document.getElementById("contadorCarrito")
const cantidadCarrito = ()=>{
let cantidad = 0 + (carrito.length)
console.log (cantidad)
if(contador){ contador.innerText = cantidad}
}
cantidadCarrito()

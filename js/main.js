document.addEventListener('DOMContentLoaded', () => {
  pintarProductos(pinturas);
  pintarCarrito(carrito);
  actualizarTotalCarrito(carrito);

});

//CALCULADORA

const text = document.querySelector("#text");
const boton = document.getElementById("btn-calcular");

text.innerText ="La superficie de tu pared es... ";
boton.addEventListener("click", () => {
  let alto = document.querySelector(".num_uno").value;
  let ancho = document.querySelector(".num_dos").value;
    	if (alto == "" || ancho == ""){
        Toastify({
          text: "Ingresa los metros",
          className: "info",
          position: "left", 
          style: {
            background: "linear-gradient(to right,  #f6c8bd8f, #d481544d)",
            color:"black"
          }
        }).showToast();
	} else {
    let total = 0;
 for (let i = 1; i <= 3; i++) {
       let superficie = (ancho * alto);
    let pintura = superficie / 12;
      // alert("Pared nro " + i);
    // alert("Superficie de tu pared es " + superficie + " metros cuadrados");
    // alert("Necesitas " + pintura + " litros de pintura por mano para cubrir tu pared");
    total += pintura;
    text.innerText = "Cantidad de manos: " + i + "\n";
    text.innerText += "La superficie de tu pared es "+ superficie + "  metros cuadrados. " + "\n";
    text.innerHTML += "Necesitas " + pintura.toFixed(2) + " litros de pintura por mano para cubrir tu pared." + "\n";
} 
// alert(" Necesitas un total de " + total + " litros de pintura ")
text.innerHTML += "\n" + " Necesitas un total de " + Math.ceil(total) + " litros de pintura";
}});


//     alert(" Necesitas un total de " + total + " litros de pintura POR MANO")

//Descuento

function descuentoAmistad(compraTotal){
  if(compraTotal>= 55000){
    compraTotal- 5000
  }
}  
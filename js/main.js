

//Funciones

const text = document.querySelector("#text");
const boton = document.getElementById("btn-calcular");
text.innerHTML = "La superficie de tu pared es... "
boton.addEventListener("click", () => {
    // 	if (num_uno == "" || num_dos == ""){
	// 	alert("Debes de Rellenar los campos");
	// } else {
    let total = 0;
 for (let i = 1; i <= 3; i++) {
    let alto = document.querySelector(".num_uno").value;
    let ancho = document.querySelector(".num_dos").value;
    let superficie = (ancho * alto);
    let pintura = superficie / 12;
      // alert("Pared nro " + i);
    // alert("Superficie de tu pared es " + superficie + " metros cuadrados");
    // alert("Necesitas " + pintura + " litros de pintura por mano para cubrir tu pared");
    total += pintura;
    text.innerText = "Cantidad de manos: " + i + "\n";
    text.innerText += "La superficie de tu pared es "+ superficie + "  metros cuadrados " + "\n";
    text.innerHTML += "Necesitas " + Math.ceil(pintura) + " litros de pintura por mano para cubrir tu pared" + "\n";
} 
// alert(" Necesitas un total de " + total + " litros de pintura ")
text.innerHTML += " Necesitas un total de " + Math.ceil(total) + " litros de pintura";
});


//     alert(" Necesitas un total de " + total + " litros de pintura POR MANO")


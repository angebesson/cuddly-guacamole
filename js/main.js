document.addEventListener('DOMContentLoaded', () => {
  pintarProductos(pinturas);
  pintarCarrito(carrito);
  actualizarTotalCarrito(carrito);

});

//CALCULADORA

const text = document.querySelector("#text");
const boton = document.getElementById("btn-calcular");
if(text){text.innerText ="La superficie de tu pared es... ";}
if(boton){
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
}})};


//     alert(" Necesitas un total de " + total + " litros de pintura POR MANO")

//Descuento

function descuentoAmistad(compraTotal){
  if(compraTotal>= 55000){
    compraTotal- 5000
  }
}  

//Generar paleta de colores
const entryDropdown = document.getElementById('entry-dropdown');
const formPaleta = document.getElementById("form-paleta");
const search = document.getElementById("search");
const resultadoPaleta = document.getElementById("resultadoPaleta")
let color = search.value;
let mode = entryDropdown.value;

const getColorPalete = async (color, mode)=>{
  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`);
  const data = await response.json();
  console.log (data);
  mostrarPaleta(data);
}

const mostrarPaleta = (data)=> {
 const paleta = data.image.bare;
 const nombre = data.seed.name.value
 console.log(paleta);
 const div = document.createElement("div");
 div.classList.add("paletas");

 div.innerHTML = `
 <div class="contiene-colores">
    <h2>Resultado de tu búsqueda</h2>
    <img src="${paleta}" alt="paleta de colores relacionada">
     <h3>${nombre}</h3>
    
</div>
 `
 resultadoPaleta.innerHTML = "";
 if(resultadoPaleta){resultadoPaleta.appendChild(div);};


}


formPaleta.addEventListener("submit", (e) => {
  e.preventDefault();
  let color = search.value;
  let mode = entryDropdown.value;
  
  console.log(color)
  console.log(mode)
  if(color){
    getColorPalete(color,mode);
  }
  
})

//Acá para generar colores:

// function getRandomHex() {
//   var letters = '0123456789ABCDEF'.split('');
//   var color = '#';
//   for (var i = 0; i < 6; i++ ) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// https://www.thecolorapi.com/id?format=svg&hex=284614

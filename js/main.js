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
       total += pintura;
    text.innerText = "Cantidad de manos: " + i + "\n";
    text.innerText += "La superficie de tu pared es "+ superficie + "  metros cuadrados. " + "\n";
    text.innerHTML += "Necesitas " + pintura.toFixed(2) + " litros de pintura por mano para cubrir tu pared." + "\n";
} 
text.innerHTML += "\n" + " Necesitas un total de " + Math.ceil(total) + " litros de pintura";
}})};
//Descuento

function descuentoAmistad(compraTotal){
  if(compraTotal>= 55000){
    compraTotal- 5000
  }
}  

<<<<<<< HEAD


//acceso condicional a un objeto si uso ? me manda al or si es null, mejor control de errores
// console.log (usuario?.nombre || "El usuario no existe")
//tambien sobre propiedades q sean objetos usuario?.cursos?.javascript
=======
//Generar paleta de colores
const entryDropdown = document.getElementById('entry-dropdown');
const formPaleta = document.getElementById("form-paleta");
const search = document.getElementById("search");
const resultadoPaleta = document.getElementById("resultadoPaleta")
let color = search.value;
let mode = entryDropdown.value;
const resultadoColor = document.getElementById("resultadoColor")

const getColorPalete = async (color, mode)=>{
  const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`);
  const data = await response.json();
  mostrarPaleta(data);
  console.log(data)
}

const mostrarPaleta = (data)=> {
 const paleta = data.image.bare;
 const nombre = data.seed.name.value
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
    if(color){
    getColorPalete(color,mode);
  }
  
})

//Acá para generar colores:

document.getElementById('getColor').addEventListener('click', function(evt){
  evt.preventDefault;
  let colorRandom = getRandomHex();
  const h3 = document.createElement("h3");
  h3.innerHTML = `<h3>Código de tu color: ${colorRandom}</h3>`
  if(colorRandom){
    getColor(colorRandom)}
    resultadoCodigo.innerHTML = "";
    if(resultadoCodigo){resultadoCodigo.appendChild(h3);};
});

function getRandomHex() {
  let letters = '0123456789ABCDEF'.split('');
  let color = '';
  for (let i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const getColor = async (colorRandom)=>{
  const response = await fetch(`  https://www.thecolorapi.com/id?hex=${colorRandom}`);
  const data = await response.json();
  
mostrarColor(data)
}

const mostrarColor = (data)=> {
 const colorRand = data.image.bare;
 const nombre = data.name.value
 const div = document.createElement("div");
 div.classList.add("colorRandom");
 div.innerHTML = `
 <div class="contiene-color">
    <h2>Resultado de tu búsqueda:</h2>
    <img src="${colorRand}" alt="color generado aleatorio">
     <h3>${nombre}</h3>
      
</div>
 `
 resultadoColor.innerHTML = "";
 if(resultadoColor){resultadoColor.appendChild(div);};

}

>>>>>>> branch1

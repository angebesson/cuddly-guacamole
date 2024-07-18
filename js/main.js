

//Funciones

// function buyHealth() {
//     if (gold >= 10) {
//       gold -= 10;
//       health += 10;
//       goldText.innerText = gold;
//       healthText.innerText = health;
//     } else {
//       text.innerText = "You do not have enough gold to buy health.";
//     }
//   }
// function buyWeapon() {
//     if (gold >= 30) {
//       gold -= 30;
//       currentWeaponIndex++;
//       goldText.innerText = gold;
//       let newWeapon = weapons[currentWeaponIndex].name;
//       text.innerText = "You now have a " + newWeapon + ".";
//       inventory.push(newWeapon);
//       text.innerText += " In your inventory you have: ";
//     }
//   }
// function buyWeapon() {
//     if (currentWeaponIndex < weapons.length - 1) {
//       if (gold >= 30) {
//         gold -= 30;
//         currentWeaponIndex++;
//         goldText.innerText = gold;
//         let newWeapon = weapons[currentWeaponIndex].name;
//         text.innerText = "You now have a " + newWeapon + ".";
//         inventory.push(newWeapon);
//         text.innerText += " In your inventory you have: " + inventory;
//       } else {
//         text.innerText = "You do not have enough gold to buy a weapon.";
//       }
//     }else{
//       text.innerText = "You already have the most powerful weapon!"
//     }
//   }


// function fightDragon() {
//     fighting = 2; este es el indice
//     goFight();
//   }

// Uso del objeto math
//monsterHealth -= weapons[currentWeaponIndex].power +
//Math.floor(Math.random() * xp) + 1; 

// function defeatMonster() {
//     gold += Math.floor(monsters[fighting].level * 6.7);
//     xp += monsters[fighting].level;
//     goldText.innerText = gold;
//     xpText.innerText = xp ;
//   }

//Usar esto para agregar a las paredes??
// text.innerText += " Your "+inventory.pop()+" breaks."
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
    text.innerHTML += "Necesitas " + pintura + " litros de pintura por mano para cubrir tu pared" + "\n";
} 
// alert(" Necesitas un total de " + total + " litros de pintura ")
text.innerHTML += " Necesitas un total de " + total + " litros de pintura";
});


//     alert(" Necesitas un total de " + total + " litros de pintura POR MANO")


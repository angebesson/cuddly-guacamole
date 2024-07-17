const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
//Calculadora

const paredText = document.querySelector("#paredText");
const m2Text = document.querySelector("m2Text");
const litrosText = document.querySelector("litrosText");


//initialize buttons

button3.onclick = calcularPintura;
button4.innerHTML = pintura.color;
button5.innerText = latasPintura[litros][1];


//Funciones

function calcularPintura() {
    button3.innerText = "Go to town square";
    let total = 0;
      
    for (let i = 1; i <= 4; i++) {

        let ancho = parseFloat(prompt("Ingresa los metros de ancho de tu pared"));
        let alto = parseFloat(prompt("Ingresa los metros de alto de tu pared"));
        while (isNaN(ancho) || isNaN(alto)) {
            alert('Debes ingresar un valor en números');
            ancho = parseFloat(prompt("Ingresa los metros de ancho de tu pared"));
            alto = parseFloat(prompt("Ingresa los metros de alto de tu pared"));
                  }
        let superficie = (ancho * alto);
        let pintura = superficie / 12;
        paredText.innerText = i++;
        m2Text.innerHTML = superficie;
        litrosText.innerText = pintura;
        alert("Pared nro " + i);
        alert("Superficie de tu pared es " + superficie + " metros cuadrados");
        alert("Necesitas " + pintura + " litros de pintura por mano para cubrir tu pared");
        total += pintura;
        
 
    };
    
   
    alert(" Necesitas un total de " + total + " litros de pintura POR MANO")
}

// crearCalculoPared(i,superficie,pintura){
//     paredText.innerText = i;
//     m2Text.innerHTML = superficie;
//     litrosText.innerText = pintura;
// }

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
const slots = ["luffyf.png", "zasedxyn.png"];


const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");


var money = document.getElementById("money");


document.getElementById("slots_button").addEventListener("click", changeimage);


function changeimage() {
    slot1.src = slots[Math.floor(Math.random() * slots.length)];
    slot2.src = slots[Math.floor(Math.random() * slots.length)];
    slot3.src = slots[Math.floor(Math.random() * slots.length)];
    checkJackpot();
}


function checkJackpot() {
    if (slot1.src === slot2.src && slot3.src === slot1.src) {
        money.innerHTML = money.innerHTML - 2;
    }


}

const slots = ["luffyf.png", "zasedxyn.png", "rah.png", "7.png", "massive.png", "reddit gold.gif", "red.png"];


const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

var bet;
var money = 100;

document.getElementById("money").innerHTML = money;

document.getElementById("slots_button").addEventListener("click", roll);


function roll() {
    bet = document.getElementById("bet_input").value;
    if(bet > money || bet < 0){
        bet = 0;
    }

    slot1.src = slots[Math.floor(Math.random() * slots.length)];
    slot2.src = slots[Math.floor(Math.random() * slots.length)];
    slot3.src = slots[Math.floor(Math.random() * slots.length)];

    checkJackpot();
    updatescreen();
}


function checkJackpot() {
    if (slot1.src === slot2.src && slot3.src === slot1.src) {
        money = money + Math.floor(bet * 5);
        document.getElementById("head").innerHTML = "JACKPOT";
    }
    else if(slot1.src === slot2.src || slot3.src === slot2.src || slot3.src === slot1.src) {
        money = money + Math.floor(bet * 1.5);
        document.getElementById("head").innerHTML = "Lets Go Gambling!!!";
    }
    else{
        money = money - bet
        document.getElementById("head").innerHTML = "Lets Go Gambling!!!";
    }


}
function updatescreen() {
    if(money <= 0){
        money = 0
    }
    document.getElementById("money").innerHTML = money;
}

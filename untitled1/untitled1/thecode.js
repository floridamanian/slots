const slots = ["luffyf.png", "zasedxyn.png", "rah.png", "7.png", "massive.png", "reddit gold.gif", "red.png"];


const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

var bet;
var money = 100;

document.getElementById("money").innerHTML = money;

document.getElementById("slots_button").addEventListener("click", roll);

document.getElementById("button1").addEventListener("click", function (){
    money = money + 1;
    document.getElementById("button1").style.display = "none";
    updatescreen();
})

document.getElementById("button2").addEventListener("click", function (){
    money = money + 5;
    document.getElementById("button2").style.display = "none";
    updatescreen();
})

document.getElementById("button3").addEventListener("click", function (){
    money = money + 50;
    document.getElementById("button3").style.display = "none";
    updatescreen();
})

document.getElementById("button4").addEventListener("click", function (){
    money = money + 100;
    document.getElementById("button4").style.display = "none";
    updatescreen();
})

document.getElementById("button5").addEventListener("click", function (){
    money = money + 1000;
    document.getElementById("button5").style.display = "none";
    updatescreen();
})

document.getElementById("button6").addEventListener("click", function (){
    money = money + 5000;
    document.getElementById("button6").style.display = "none";
    updatescreen();
})

document.getElementById("button7").addEventListener("click", function (){
    money = money + .1;
    document.getElementById("button7").style.display = "none";
    updatescreen();
})

document.getElementById("button8").addEventListener("click", function (){
    money = money + 10000;
    document.getElementById("button8").style.display = "none";
    updatescreen();
})

document.getElementById("button9").addEventListener("click", function (){
    money = money + 25000;
    document.getElementById("button9").style.display = "none";
    updatescreen();
})

document.getElementById("button10").addEventListener("click", function (){
    money = money + 50000;
    document.getElementById("button10").style.display = "none";
    updatescreen();
})

document.getElementById("button11").addEventListener("click", function (){
    money = money + 100000;
    document.getElementById("button11").style.display = "none";
    updatescreen();
})

document.getElementById("button12").addEventListener("click", function (){
    money = money + 1000000;
    document.getElementById("button12").style.display = "none";
    updatescreen();
})

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

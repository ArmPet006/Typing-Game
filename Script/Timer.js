let ele = document.getElementById('countdown');
let play = document.getElementById('play');
let block = document.getElementById('center');
let count = document.getElementById('startcount');
let game = document.getElementById('game');
let voice1 = document.getElementById('voiice');

function start() {

    center.style.display = "none";
    countdown.style.display = "block";
    var sec = 3;
    ele.innerHTML = +sec;
        count = setInterval(() => {
            if (sec == 0) {
                countdown.style.display = "none";
                game.style.display = "block";
                gentext();
                clearInterval(count);
                
            } else {
                sec--;
                ele.innerHTML = +sec;
            }
        }, 1000)
   
    
}


function voicestart() {
    center.style.display = "none";
    countdown.style.display = "block";
    var sec = 3;
    ele.innerHTML = +sec;
        count = setInterval(() => {
            if (sec == 0) {
                countdown.style.display = "none";
                voice1.style.display = "block";
                voice();
                clearInterval(count);
                
            } else {
                sec--;
                ele.innerHTML = +sec;
            }
        }, 1000)
   
    
}
var word = document.getElementById('word');
var inp = document.getElementById('firstname');
var yourscore = document.getElementById('score');
var count1 = document.getElementById('timer');
var ele1 = document.getElementById('count');
var gameover = document.getElementById('game_over');
var youwin = document.getElementById('you_win');
var highscore = document.getElementById('highScore')
var secc = 5;

function gentext() {


    var words = ['բարև', 'հայտնի', 'մեկ', 'գիրք', 'տուն', 'բանակ','ճիշտ',
                'գեղեցիկ','գույն','հայրենիք','պատմություն','անձնական','փայտ',
                'անտառ','կարմիր','ծաղիկ','խնձոր','հավատալ','ուսանող','պարան','միջավայր','երազ','գլխավոր','աշխարհ'];
    let i = Math.floor(Math.random() * (words.length));
    word.innerHTML = words[i];
    timer();

    if (!localStorage.score) {
        localStorage.score = 0
    }
    var score = 1;
    yourscore.innerHTML = 0;
    highscore.innerHTML = localStorage.score
    if (inp.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            if (inp.value == word.innerHTML) {
                words.splice(i, 1);
                i = Math.floor(Math.random() * (words.length));
                inp.value = '';
                yourscore.innerHTML = +score;
                if (yourscore.innerHTML >= highscore.innerHTML) {
                    highscore.innerHTML = yourscore.innerHTML;
                    localStorage.score++
                }
                else{
                    highscore.innerHTML = localStorage.score
                }
                score++;
                word.innerHTML = words[i];
                secc += 3;
                if (words.length == 0) {
                    game.style.display = "none";
                    youwin.style.display = "flex";
                    word.innerHTML = "";
                    clearInterval(count1);
                }
            }
            else {
                inp.value = '';

            }
        }
    })) {
    }

}




function timer() {
    ele1.innerHTML = +secc;
    (function () {
        count1 = setInterval(() => {
            if (secc == 0) {
                game.style.display = "none";
                gameover.style.display = "flex";
                clearInterval(count1);
            }
            else {
                secc--;
                ele1.innerHTML = +secc;
            }
        }, 1000)
    })()

}

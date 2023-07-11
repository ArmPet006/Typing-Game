let input = document.getElementById('firstname1');
let vo = document.getElementById('voiice');
var score1 = document.getElementById('score1');
var highscore1 = document.getElementById('highScore1')
var count2 = document.getElementById('timer');
var ele2 = document.getElementById('time');
var ccount = document.getElementById('timer');
var gameover = document.getElementById('game_over');
var youwin = document.getElementById('you_win');


function voice() {

    var text = ['գիրք', 'մեկ', 'հայտնի', 'տուն','անտառ','աշխարհ','ծաղիկ','կարմիր','պատմություն'];
    var voiceFiles = [
        './Assets/Voice/girq.mp4',
        './Assets/Voice/mek.mp4',
        './Assets/Voice/haytni.mp4',
        './Assets/Voice/tun.mp4',
        './Assets/Voice/antar.mp4',
        './Assets/Voice/ashxarh.mp4',
        './Assets/Voice/caxik.mp4',
        './Assets/Voice/karmir.mp4',
        './Assets/Voice/patmutyun.mp4'
    ]

    function playRandomVoice() {
        var randomIndex = Math.floor(Math.random() * voiceFiles.length);
        var randomVoiceFile = voiceFiles[randomIndex];

        var audio = new Audio(randomVoiceFile);
        audio.play();
        return randomIndex;
    }


    var randomIndex = playRandomVoice();
    timer1();
    if (!localStorage.score1) {
        localStorage.score1 = 0
    }
    var score = 1;
    score1.innerHTML = 0;
    highscore1.innerHTML = localStorage.score1
    if (input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            if (input.value == text[randomIndex]) {
                voiceFiles.splice(randomIndex, 1);
                text.splice(randomIndex, 1);
                randomIndex = playRandomVoice()
                input.value = '';
                score1.innerHTML = +score;
                if (score1.innerHTML >= highscore1.innerHTML) {
                    highscore1.innerHTML = score1.innerHTML;
                    localStorage.score1++
                }
                else{
                    highscore1.innerHTML = localStorage.score1
                }
                score++;
                secc += 3;
                if (voiceFiles.length == 0) {
                    vo.style.display = "none";
                    youwin.style.display = "flex";
                    word.innerHTML = "";
                    clearInterval(count2);
                }
            }
            else {
                input.value = '';
            }

        }
    })) {
    }

}

function timer1() {
    ele2.innerHTML = +secc;
    (function () {
        ccount = setInterval(() => {
            if (secc == 0) {
                vo.style.display = "none";
                gameover.style.display = "flex";
                clearInterval(ccount);
            }
            else {
                secc--;
                ele2.innerHTML = +secc;
            }
        }, 1000)
    })()
}
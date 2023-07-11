var mySong = document.getElementById('mySong');
var btn = document.getElementById('music');
var set = document.getElementById('3');
let menu = document.getElementById('menu');

localStorage.setItem("music", 0);

function play() {

    if (mySong.paused) {
        mySong.play();
        localStorage.setItem('music', 1);
        console.log(localStorage);
    }
    else{
        mySong.pause();
        mySong.currentTime = 0;
        localStorage.setItem('music', 0);
        console.log(localStorage);

    }
}




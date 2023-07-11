let letter = [
    "Digit1", "Digit2", "Digit3", "Digit4",
    "Digit5", "Digit6", "Digit7", "Digit8",
    "Digit9", "Digit0", "Equal", "KeyQ",
    "KeyW", "KeyE", "KeyR", "KeyT", "KeyY",
    "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft",
    "BracketRight", "KeySh" ,"pinky2", "KeyA", "KeyS",
    "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ",
    "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC",
    "KeyV", "KeyB", "KeyN", "KeyM"
]


function func() {
    let i = Math.floor(Math.random() * letter.length);
    let oneletter = document.getElementById(letter[i])
    let falseEl;
    oneletter.classList.add("selected");

    document.addEventListener("keydown", function (e) {
        if (falseEl) {
            setTimeout(() => falseEl.classList.remove("hit"),100)
        }
        if (e.code == letter[i]) {
            oneletter.classList.remove("selected");
            i = Math.floor(Math.random() * letter.length);
            oneletter = document.getElementById(letter[i])
            oneletter.classList.add("selected");
        }
        else {
            falseEl = document.getElementById(e.code)
            falseEl.classList.add("hit");
        }
    })
}
func();
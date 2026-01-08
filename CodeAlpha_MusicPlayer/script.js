let audio = document.getElementById("audio");

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
}

function setVolume(value) {
    audio.volume = value;
}

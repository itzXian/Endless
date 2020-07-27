function partA () {
    this.src = "1.mp3";
    this.currentTime = 11;
    var pause = ctrl.innerHTML === 'STOP';
    ctrl.innerHTML = pause ? 'PLAY' : 'STOP';
    var method = pause ? 'pause' : 'play';
    this[method]();
    return false;
};

ctrl = document.getElementById('playButton');
ctrl.onclick = function () {
    partA = this.partA;
    partA = audio;
};

    var doneT;
audio.addEventListener('timeupdate', function(){
    console.clear()
    console.log(audio.currentTime);
    if(!doneT){
        if (audio.currentTime >= audio.duration - 0.2) {
        doneT = true;
        audio = new Audio();
        audio.src = "2.mp3";
        audio.currentTime = 75;
        audio.load();
        audio = audio;
        audio.play();
        }
    } else if (doneT) {
        audio.addEventListener('timeupdate', function(){
            console.clear()
            console.log(audio.duration);
            console.log(audio.currentTime);
        });
        if (audio.currentTime >= audio.duration - 0.1) {
        audio = new Audio();
        audio.src = "2.mp3";
        audio.load();
        audio = audio;
        audio.play();
        }
    };
});

// call Listener in Listener
// call click at the end
// packge them in a new funtion
// learn the this

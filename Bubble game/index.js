var timer = 5;
var score = 0;
var hitRandom = 0;

function totalScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitRandom = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitRandom;
}

function makBubble() {
    var clutter = "";

    for (var i = 0; i <= 175; i++) {
        var random = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random}</div>`

    }

    document.querySelector("#pbtm").innerHTML = clutter;

}

function runTimer() {
    var timeit = setInterval(function () {
        if (timer > 0) {
            timer--;
        }
        else {
            setInterval(timeit);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }

        document.querySelector("#timeint").textContent = timer;

    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickednum = (Number(dets.target.textContent));
        if (clickednum === hitRandom) {
            totalScore();
            getNewHit();
            makBubble();
        }
    });

runTimer();
makBubble();
getNewHit();




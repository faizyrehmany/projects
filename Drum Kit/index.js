
var handleClick = document.querySelectorAll(".drum").length;

for (var i = 0; i < handleClick; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        var buttonInnerHTML = this.innerHTML;

        characters(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        
    });
}

document.addEventListener("keypress", function (event) {
    characters(event.key);
    buttonAnimation(event.key);
});

function characters(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();

        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();

        case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;

        default: console.log(key)

    }

    
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)

}















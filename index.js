for( var i =0 ; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log(this.innerHTML);
        switch (this.innerHTML){
            case 'w':
                new Audio('./sounds/tom-1.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 'a':
                new Audio('./sounds/tom-2.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 's':
                new Audio('./sounds/tom-3.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 'd':
                new Audio('./sounds/tom-4.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 'j':
                new Audio('./sounds/snare.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 'k':
                new Audio('./sounds/crash.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
            case 'l':
                new Audio('./sounds/kick-bass.mp3').play();
                buttonAnimation (this.innerHTML);
                break;
        }
    });
}

document.addEventListener("keydown", function (event) {
    switch (event.key){
        case 'w':
            new Audio('./sounds/tom-1.mp3').play();
            buttonAnimation (event.key);
            break;
        case 'a':
            new Audio('./sounds/tom-2.mp3').play();
            buttonAnimation (event.key);
            break;
        case 's':
            new Audio('./sounds/tom-3.mp3').play();
            buttonAnimation (event.key);
            break;
        case 'd':
            new Audio('./sounds/tom-4.mp3').play();
            buttonAnimation (event.key);
            break;
        case 'j':
            new Audio('./sounds/snare.mp3').play();
            buttonAnimation (event.key);
            break;
        case 'k':
            new Audio('./sounds/crash.mp3').play();
            buttonAnimation (event.key);
            break;
        case 'l':
            new Audio('./sounds/kick-bass.mp3').play();
            buttonAnimation (event.key);
            break;
        default: console.log(event.key);
    }
})

function buttonAnimation (currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout( function (){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}
(document.querySelectorAll(".drum")).forEach(item => {
    item.addEventListener("click", function (){
        
        var button = this.innerHTML;

        switch(button){
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            
            case "s":
                var tom3 = new Audio ('sounds/tom-3.mp3');
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;

            case "j":
                var snare = new Audio('sounds/snare.mp3')
                snare.play();
            break;

            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;

            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;

            default:
                console.log("Button inner html not specified in switch statement")
        }
    });

})



document.addEventListener("keydown", (event) =>{
    switch(event.key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio ('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default:
            alert("ATTENTION! You can only play with the keyboard keys: W, A, S, D, J, K and L")
    }
})
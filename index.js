
for (var i = 0; i<document.querySelectorAll(".drum").length;i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);   
    });
    // anonymous function
}
    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("Music/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("Music/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("Music/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("Music/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("Music/snare.mp3");
                snare.play();
                break;
            case "k":
                var kick = new Audio("Music/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var crash = new Audio("Music/crash.mp3");
                crash.play();
                break;
            default:
                break;
        }
    }

    function buttonAnimation(key){
        var active = document.querySelector("."+key);
        active.classList.add("pressed");

        setTimeout(function(){
            active.classList.remove("pressed");  
        },100);
    }





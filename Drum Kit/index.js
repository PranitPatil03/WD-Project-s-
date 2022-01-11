var len=document.querySelectorAll(".drum").length;

document.addEventListener("keydown", (e)=>{
    makeSound(e.key)
    })

for(let i = 0; i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       
        var buttonInnerText=this.innerHTML;

        makeSound(buttonInnerText);
    })
}

function makeSound(char){

    switch (char) {
        case "w":
            let tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let kick=new Audio("sounds/crash.mp3");
            kick.play();
            break;

        case "l":
            let kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    
        default:console.log(buttonInnerText)
    }
}

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

var started=false;

var level=0;

function nextSquence(){

userClickedPattern=[];

level++;

$("#level-title").text("Level "+level);

 var getRandNo=Math.floor((Math.random()*4));

 var randomChosenColour=buttonColours[getRandNo];

 gamePattern.push(randomChosenColour)

 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 playSound(randomChosenColour);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function() {

    var userChosenColour=$(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    
    animatePress(userChosenColour);

    checkAnswers(userClickedPattern.length-1);

})

function animatePress(currentColour){

$("#"+currentColour).addClass("pressed");

setTimeout(function(){

    $("#"+currentColour).removeClass("pressed");

},100);

}

$(document).keypress(function (){

    if(!started){
        $("#level-title").text("Level "+level);
        nextSquence();
        started=true;   
    }
})

function checkAnswers(currentLevel){

if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){

    if(gamePattern.length===userClickedPattern.length){

        setTimeout(function(){
        nextSquence();
        },1000)
    }
}
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);

        startOver();
    }

}

function startOver(){
    level=0;
    started=false;
    gamePattern=[];
}

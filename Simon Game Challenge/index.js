
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

function nextSquence(){}{

var userClickedPattern=[];

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

})

function animatePress(currentColour){

$("#"+currentColour).addClass("pressed");

setTimeout(function(){

    $("#"+currentColour).removeClass("pressed");

},100);

}

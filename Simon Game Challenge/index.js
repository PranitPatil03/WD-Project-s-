
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

function nextSquence(){}{

 var getRandNo=Math.floor((Math.random()*4));

 var randomChosenColour=buttonColours[getRandNo];

 gamePattern.push(randomChosenColour)

 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

 var song="sounds/" + randomChosenColour + ".mp3"; 

 playSound(song);
}

function playSound(name) {
    var audio = new Audio(name);
    // audio.play();
  }

$(".btn").click(function() {
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
})
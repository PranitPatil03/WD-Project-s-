// use strict

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

function nextSquence(){}{

 var getRandNo=Math.floor((Math.random()*4));

 var randomChosenColour=buttonColours[getRandNo];

 gamePattern.push(randomChosenColour)

 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var song="sounds/" + randomChosenColour + ".mp3"
var audio = new Audio(song);
audio.play();


}
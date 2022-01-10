const getRandomNumber1=Math.floor((Math.random()*6)+1);


for(let i=1;i<=6;i++){
    if(getRandomNumber1==i){
        document.querySelector(".img1").setAttribute("src",`images/dice${i}.png`)
    }
}

const getRandomNumber2=Math.floor((Math.random()*6)+1);

for(let i=1;i<=6;i++){
    if(getRandomNumber2==i){
        document.querySelector(".img2").setAttribute("src",`images/dice${i}.png`)
    }
}


if(getRandomNumber1===getRandomNumber2){
    document.querySelector(".heading").innerText ="Draw!🏴"
}
else if(getRandomNumber1>getRandomNumber2){
    document.querySelector(".heading").innerText ="Player 1 Wins! 🚩"
}
else{
    document.querySelector(".heading").innerText ="Player 2 Wins! 🚩"
}
function makeBubble() {
    var a = "";
    for (i = 0; i < 65; i++) {
        a += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML = a;
}

var timer = 60;
function clock() {
    setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER<\h1>`;
            document.querySelector("#HIT").textContent="";
        }
    },1000);
}

var elmt=0;
function Hit(){
    elmt=Math.floor(Math.random()*10);
    document.querySelector("#HIT").textContent=elmt;
}

var Score=0;
function incScore() {
    Score+=10;
    document.querySelector("#SCORE").textContent=Score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var target=Number(details.target.textContent);
    if(target==elmt){
        incScore();
        makeBubble();
        Hit();
    }
});

makeBubble();
clock();
Hit();
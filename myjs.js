var number=1;
var plus=5;
window.onload=function(){
    //for SVG & JS
    setTimeout(moveCircle,1000/3)

    setTimeout(movie,30)
}

//FOR SVG
function moveCircle(){
    let title=document.querySelector("#title");
    //title.innerHTML=number;
    let mc=document.querySelector("#mycircle2");
    let old_cx=parseInt(mc.getAttribute("cx"));
    old_cx+=plus;
    if(old_cx>800)
        plus=plus*-1;
    if(old_cx<30)
        plus=plus*-1;
    mc.setAttribute("cx",old_cx);
    setTimeout(moveCircle,10)
}

var circle={
    cx=30,cy=50
}

//FOR Canvas
function movie(){
    var c= document.getElementById("mycanvas");
    var ctx=c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.heigth);

    ctx.beginPath();
    ctx.arc(circle.cx,circle.cy,25,0,2*Math.PI); //Math.PI = 반원
    ctx.stroke();
    ctx.fiilstyle="#0000ff";
    ctx.fill();
    circle.cx+=circle.plus;
    setTimeout(moveie,10)

    if(circle.cx>800)
        circle.plus=circle.plus*-1;
    if(circle.cx<30)
        circle.plus=circle.plus*-1;
}
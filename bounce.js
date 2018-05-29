var balls=[];
var canvas;
var start=0;
var number=10;

function slider(){
    var num=document.getElementById("myRange").value;
    document.getElementById("sliderVal").innerHTML=num;
}
function myFunction() {
    number=document.getElementById("myRange").value;
    for(x=0; x<number; x++){//x<number
        balls.push(new Ball(canvas.width,canvas.height));
    }
}


function Ball(width,height){
    this.width=width;
    this.height=height;
    this.color=getRandomColor();
    this.x=parseInt(Math.random() * width);
    this.y=parseInt(Math.random() * height);
    this.radius=10+parseInt(Math.random() * 10);
    this.originRadius=this.radius;
    this.x_speed=2+parseInt(Math.random() * 5);
    this.y_speed=this.x_speed;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    

    this.update=function(){
        if(this.x>(this.width-this.radius))
            this.x_speed=this.x_speed * -1;
        if(this.x<this.radius)
            this.x_speed=this.x_speed * -1;
        this.x+=this.x_speed;

        if(this.y>(this.height-this.radius))
            this.y_speed=this.y_speed * -1;
        if(this.y<this.radius)
            this.y_speed=this.y_speed * -1;
        this.y+=this.y_speed;
    }
   
    
}

window.onload=function(){
    canvas= document.getElementById("mycanvas");
    for(x=0; x<number; x++){//x<number
        balls.push(new Ball(canvas.width,canvas.height));
    }
    setTimeout(movie,100/3)
}

function movie(){
    let ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    for(x=0;x<number;x++){ //x<balls[x].length
        ctx.beginPath();
        ctx.arc(balls[x].x,balls[x].y,balls[x].radius,0,2*Math.PI); //Math.PI = 반원
        ctx.stroke();
        ctx.fillStyle = balls[x].color;
        ctx.fill();
        balls[x].update();
    }
    setTimeout(movie,100/3)
}

mycanvas.addEventListener("mouseenter",function(){
    Increase=setInterval(mousein,100);
    if(start!=0)clearInterval(Decrease);
    start=1;
});

mycanvas.addEventListener("mouseleave",function(){
    Decrease=setInterval(mouseout,100);
    clearInterval(Increase);
});

function mousein(){
    for(x=0;x<number;x++){
        if(balls[x].radius<50){
            balls[x].radius++;
            if(balls[x].radius==50){
                clearInterval(Increase);
            }
        }
    }
}
function mouseout(){
    for(x=0;x<number;x++){
        if(balls[x].radius>balls[x].originRadius){
            balls[x].radius--;
            if(balls[x].radius==balls[x].originRadius){
                clearInterval(Increase);
                clearInterval(Decrease);
            }
        }   
    }
}
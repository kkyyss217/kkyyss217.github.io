// alert("ok");

var images = new Array('images/naver1.jpg', 'images/naver2.jpg','images/naver3.jpg');
var sijak = 0;

document.getElementById("left").onclick=function(){
    //alert("left");
    sijak--;
    if(sijak<0)
        sijak = images.length -1;
    document.getElementById("myimage").src=images[sijak];
}

document.getElementById("right").onclick=function(){
    //alert("right");
    sijak++;
    if(sijak>images.length-1)
        sijak = 0;
    document.getElementById("myimage").src=images[sijak];
}
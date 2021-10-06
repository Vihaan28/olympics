var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.rect(150 , 125 , 500, 430 ,200);
ctx.stroke();

//circles//

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=2;
ctx.arc(250 , 300 , 50 , 0 ,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="darkorange";
ctx.lineWidth=2;
ctx.arc(310 , 350 , 50 , 0 ,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(360 , 300 , 50 , 0 ,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(420 , 350 , 50 , 0 ,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(470 , 300 , 50 , 0 ,2* Math.PI);
ctx.stroke();
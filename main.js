canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth= 6;
ctx.arc(300,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 6;
ctx.arc(400,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 6;
ctx.arc(500,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth= 6;
ctx.arc(350,255,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth= 6;
ctx.arc(450,255,40,0,2*Math.PI);
ctx.stroke();
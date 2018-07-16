"use strict";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


ctx.strokeStyle = 'black';
ctx.lineWidth = 4;

const squareSize = 30;
const canvasSize = 600; //assuming it is a square


//draw lines
function DrawBoard ()
{
    for (var i = 0; i < canvasSize; i += squareSize)
    {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasSize);
        ctx.stroke();
    }
    for (var j = 0; j < canvasSize; j += squareSize)
    {
        ctx.moveTo(0, j);
        ctx.lineTo(canvasSize, j);
        ctx.stroke();
    }
}

var animal = new Animal('Animal', 20, 40);
var sheep = new Sheep('Sheep', 120, 90);
setInterval(function () {
    console.log("Drawing");
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    DrawBoard();
    animal.Draw(ctx);
    sheep.Draw(ctx);

}, 1000);
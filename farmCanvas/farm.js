"use strict";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


ctx.strokeStyle = 'black';
ctx.lineWidth = 4;

const squareSize = 30;
const canvasSize = 600; //assuming it is a square
//draw lines
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

var animal = new Animal(20, 40);

animal.Draw(ctx);
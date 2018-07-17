"use strict";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 4;


var board = new Board(600, 600);
var animal = new Animal('Animal', 20, 40);
var sheep = new Sheep('Sheep', 120, 90);


function GraphicUpdate (ctx)
{
    console.log("Graphic Update");
    board.Clear(ctx);
    board.Draw(ctx);
    animal.Draw(ctx);
    sheep.Draw(ctx);
}


function LogicUpdate ()
{
    console.log("Logic Update");
    animal.Stray();
    sheep.Stray();

}

// Game LOOP
setInterval(function () {
    LogicUpdate();
    GraphicUpdate();
}, 1000);
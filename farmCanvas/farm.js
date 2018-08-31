"use strict";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.lineWidth = 4;


var board = new Board(600, 600);
var animal = new Animal('Animal', 20, 40);
var sheep = new Sheep('Sheep', 120, 90);
var chicken = new Chicken('Chicken', 30, 50);

var farmAnimals = Array();
farmAnimals.push(animal);
farmAnimals.push(sheep);
farmAnimals.push(chicken);

/**
 * Updates Graphically all elements 
 * @param {CanvasRenderingContext2D} canvasContext 
 */
function GraphicUpdate (canvasContext)
{
    //console.log("Graphic Update");
    board.Clear(canvasContext);
    board.Draw(canvasContext);
    
    /*animal.Draw(canvasContext);
    sheep.Draw(canvasContext);
    chicken.Draw(canvasContext);*/
    farmAnimals.forEach( farmAnimal => farmAnimal.Draw(canvasContext));
}


function LogicUpdate ()
{
    //console.log("Logic Update");
    /*animal.Stray();
    sheep.Stray();
    chicken.Stray();*/
    farmAnimals.forEach(farmAnimal => farmAnimal.Stray());

}

// Game LOOP
setInterval(function () {
    LogicUpdate();
    GraphicUpdate(ctx);
}, 1000);
/**
* 1 - ao carregar video = iniciar canvasPlayerController
* 2 - identificar player
* 3 - ocultar player
* 4 - exibir informação do player no canvas
* 5 - permitir interagir com canvas
*/

'use strict';
/* EFFECTS */
var effects = {
  GRAYSCALE: 1,
  PIXELSINVERTED: 2,
};


var canvasPlayerController = {
  canvas: null,
  canvasSelector: null,
  ctx: null,
  player: null,
  playerSelector: null,
  interactions: [],
  effects: [],
  imgData : null,
  grayscale: false,
  pixelsinverted: false,
};

/**
* Função responsável por inicializar os atributos necessários para se trabalhar.
*/
canvasPlayerController.init = function () {
  if (this.canvasSelector === null || this.playerSelector === null) {
    var e = new Error('Não foram encontradas as informações mínimas necessárias (canvasId ou playerId)');
    throw e;
  }
  this.canvas = document.querySelector(this.canvasSelector);
  this.player = document.querySelector(this.playerSelector);
  this.ctx = this.canvas.getContext('2d');
  //chama funções necessárias
  canvasPlayerController.configureCanvasSize();
  canvasPlayerController.addListeners();
  canvasPlayerController.hidePlayer();
};

canvasPlayerController.configureCanvasSize = function () {
  this.player.addEventListener('loadedmetadata', function(){
    canvasPlayerController.canvas.width = this.videoWidth;
    canvasPlayerController.canvas.height = this.videoHeight;
  });
};

canvasPlayerController.draw = function () {
  if(canvasPlayerController.player.paused || canvasPlayerController.player.ended) return false;
  canvasPlayerController.ctx.drawImage(canvasPlayerController.player, 0, 0);
  if (canvasPlayerController.grayscale) {
    canvasPlayerController.imgData = canvasPlayerController.ctx.getImageData(0, 0, canvasPlayerController.canvas.width, canvasPlayerController.canvas.height);
    canvasPlayerController.ctx.putImageData(transformsInGrayScale(canvasPlayerController.imgData), 0, 0);
  }
  if (canvasPlayerController.pixelsinverted) {
    canvasPlayerController.imgData = canvasPlayerController.ctx.getImageData(0, 0, canvasPlayerController.canvas.width, canvasPlayerController.canvas.height);
    canvasPlayerController.ctx.putImageData(pixelsInverter(canvasPlayerController.imgData), 0, 0);
  }
  //####### ATENTION! ##########
  //it is the line below that makes the canvas be updated and display
  //the images as a video.
  requestAnimationFrame(canvasPlayerController.draw);
};


canvasPlayerController.addListeners = function () {
  //activates the draw function when the video is put to play
  this.player.addEventListener('play', function(){
    console.log(canvasPlayerController.player);
    if(canvasPlayerController.player.paused || canvasPlayerController.player.ended) return;
    canvasPlayerController.draw();
    canvasPlayerController.checkInteractions();
  });
};

 canvasPlayerController.hidePlayer = function () {
  canvasPlayerController.player.width = 0;
  canvasPlayerController.player.height = 0;
};

canvasPlayerController.addInteraction = function (videoTime) {
  this.interactions.push({"videoTime": videoTime});
  console.log(this.interactions[0].videoTime);
  //requestAnimationFrame(canvasPlayerController.checkInteractions);
};

canvasPlayerController.checkInteractions = function () {
  console.log(canvasPlayerController.player.currentTime);
  if(canvasPlayerController.interactions.length !== 0 && canvasPlayerController.player.currentTime !== 0 && canvasPlayerController.player.paused !== true){
    canvasPlayerController.interactions.forEach(function(element){
      if (canvasPlayerController.player.currentTime === element.videoTime) {
        console.log('chegou a hora da interacao!! ');
      }
    });
  }
  //canvasPlayerController.checkInteractions();
};

canvasPlayerController.pixelsinvertedToggle = function (){
  console.log("invertendo");
   canvasPlayerController.pixelsinverted = !canvasPlayerController.pixelsinverted;
};

canvasPlayerController.grayScaleToggle = function (){
  console.log("invertendo");
   canvasPlayerController.grayscale = !canvasPlayerController.grayscale;
};

canvasPlayerController.play = function () {
  canvasPlayerController.player.play();
};


/*############ EFFECTS ##############*/

canvasPlayerController.addEffect = function (effect) {
  this.effects.push({effect: effect});
};

function transformsInGrayScale(imgData){
  //retrieve the pixels
  //each pixel has 4 components (red, green, blue, alpha) so:
  var numPixels =    imgData.data.length / 4;
  for(var i = 0; i < numPixels; i++){
      //one pixel = [red (index 0), green (index 1), blue (index 2), alpha (index 3)]
      //gets the data (rgbA) from a pixel
      var red = imgData.data[i * 4 + 0];//red (index 0)
      var green = imgData.data[i * 4 + 1];//green (index 1)
      var blue = imgData.data[i * 4 + 2];//blue (index 2)
      var alpha = imgData.data[i * 4 + 3];//alpha (index 3)
      //transforms in gray
      //var gray = (0.3 * red) + (0.59 * green) + (0.11 * blue);
      var gray = (red + green + blue) / 3;
      //puts the gray scale on each pixel color
      imgData.data[i * 4 + 0] = gray;//red
      imgData.data[i * 4 + 1] = gray;//blue
      imgData.data[i * 4 + 2] = gray;//green
      imgData.data[i * 4 + 3] = gray;//alpha (index 3)
  }
  return imgData;
}


function pixelsInverter(imgData){
  //retrieve the pixels
  //each pixel has 4 components (red, green, blue, alpha) so:
  var numPixels =    imgData.data.length / 4;
  for(var i = 0; i < numPixels; i++){
      //one pixel = [red (index 0), green (index 1), blue (index 2), alpha (index 3)]
      //gets the data (rgbA) from a pixel and alter it
      imgData.data[i * 4 + 0] = 255 - imgData.data[i * 4 + 0];//red (index 0)
      imgData.data[i * 4 + 1] = 255 - imgData.data[i * 4 + 1];//green (index 1)
      imgData.data[i * 4 + 2] = 255 - imgData.data[i * 4 + 2];//blue (index 2)
  }
  //ctx.putImageData(imgData, 0, 0);
  return imgData;
}


//####################################
// FIM DAS FUNCOES
//####################################


canvasPlayerController.canvasSelector = '#c';
canvasPlayerController.playerSelector = '#v';
canvasPlayerController.init();
canvasPlayerController.addInteraction(6);
setTimeout(function(){canvasPlayerController.addEffect(effects.GRAYSCALE);}, 3000);

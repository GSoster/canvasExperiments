/**
* 1 - ao carregar video = iniciar canvasPlayerController
* 2 - identificar player
* 3 - ocultar player
* 4 - exibir informação do player no canvas
* 5 - permitir interagir com canvas
*/

'use strict';
var canvasPlayerController = {
  canvas: null,
  canvasSelector: null,
  ctx: null,
  player: null,
  playerSelector: null,
  interactions: [],
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
  canvasPlayerController.ctx.drawImage(canvasPlayerController.player, 0, 0);
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
//####################################
// FIM DAS FUNCOES
//####################################


canvasPlayerController.canvasSelector = '#c';
canvasPlayerController.playerSelector = '#v';
canvasPlayerController.init();
canvasPlayerController.addInteraction(6);

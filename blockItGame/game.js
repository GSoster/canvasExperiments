
//specific game related code
var level = {
  x: 80,
  y: 48,
  width: canvas.width - 160,
  height: canvas.height - 96,
  wallsize: 16,
};

//ball (it is actually a square for the sake of collision detection)
var ball = {
  x: 0,
  y: 0,
  width: 35,
  height: 35,
  xdir: 0,
  ydir: 0,
  speed: 0,
};

// Variables
 var score = 0;              // Score
 var blocked = false;        // Bottom wall is active
 var blockedtime = 0;        // How long the wall has been active
 var blockedlength = 0.1;    // How long the wall will be active
 var blockcooldown = 1;      // Waiting time between wall activations
 var gameover = true;        // Game is over
 var gameovertime = 0;       // How long we have been game over
 var gameoverdelay = 1;      // Waiting time after game over

 function newGame() {
   // Initialize the ball
  ball.x = level.x + (level.width - ball.width) / 2;
  ball.y = level.y + level.height - ball.height;
  ball.speed = 500;

  // Random direction
  ball.xdir = 0.4 + (Math.random())/2;
  ball.ydir = -1;

  // Random left or right
  if (Math.random() < 0.5) {
      ball.xdir *= -1;
  }

  // Normalize the direction
  var dirlen = Math.sqrt(ball.xdir*ball.xdir + ball.ydir*ball.ydir);
  ball.xdir /= dirlen;
  ball.ydir /= dirlen;

  score = 0;

  blocked = false;
  blockedtime = blockcooldown;
  gameover - trye;
  gameovertime = 0;

 }

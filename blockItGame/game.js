
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
};

function updateGame(dt) {
  // Move the ball, time-based
  ball.x += dt * ball.speed * ball.xdir;
  ball.y += dt * ball.speed * ball.ydir;
  // Open the wall after some time
  blockedtime += dt;
  if (blocked) {
    if (blockedtime > blockedlength) {
      blocked = false;
    }
  }
  // Handle left and right collisions with the level
  if (ball.x <= level.x) {
    // Left edge
    ball.xdir *= -1;
    ball.x = level.x;
  } else if (ball.x + ball.width >= level.x + level.width) {
    // Right edge
    ball.xdir *= -1;
    ball.x = level.x + level.width - ball.width;
  }
  // Handle top collisions with the level
  if (ball.y <= level.y) {
    // Top edge
    ball.ydir *= -1;
    ball.y = level.y;
  }
  // Check if the ball collides with the bottom wall
  // Only do this, while the ball is moving to the bottom
  if (blocked && ball.ydir > 0 && rectIntersection(ball.x, ball.y, ball.width, ball.height, level.x, level.y+level.height, level.width, level.wallsize) && ball.ydir > 0) {
    // Wall is closed
    ball.ydir *= -1;
    // Increase the score
    score += 1;
    // Increase the speed of the ball by 5 percent
    ball.speed *= 1.05;
  } else if (ball.ydir > 0 && ball.y > level.y+level.height+level.wallsize) {
    // Ball escaped, game over
    ball.speed = 0;
    gameover = true;
  }
};

 // Check if there is a rect intersection
function rectIntersection(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x1 <= x2 + w2 && x1 + w1 >= x2 && y1 <= y2 + h2 && y1 + h1 >= y2) {
    return true;
  }
  return false;
}

// Mouse event handlers
function onMouseDown(e) {
  // Get the mouse position
  var pos = getMousePos(canvas, e);

  // Start a new game
  if (gameover && gameovertime > gameoverdelay) {
    newGame();
    gameover = false;
  }
  // Show the wall
  if (!gameover && blockedtime >= blockcooldown) {
    blockedtime = 0;
    blocked = true;
  }
};

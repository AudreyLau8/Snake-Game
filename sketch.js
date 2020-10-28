let x = 200;
let y = 200;
let gameOver = false;
let direction = 39;

function setup() {
  createCanvas(400, 400);
  background(255, 0, 0);
  fill(0);
  rect(10, 10, 380, 380);
  fill(255, 0, 0);
  rect(180, 250, 20, 75);
  rect(320, 125, 20, 20);
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  if(gameOver === true){
    return;
  }
  if(notBlack() === true){
    fill(255, 200, 0);
    stroke(255, 0, 0);
    ellipse(x, y, 25, 25);
    fill(255);
    stroke(0);
    rect(100, 145, 200, 90);
    fill(0);
    text("Game Over", 200, 180);
    textSize(20);
    text("Press 'r' to restart", 200, 200);
    text("Score: ", 170, 220);
    text(frameCount, 220, 220);
    gameOver = true;
  }
  stroke(0);
  fill(0);
  rect(0, 0, 100, 50);
  fill(255);
  textSize(30);
  text(frameCount, 50, 35);
  stroke(225);
  point(x, y);
  if(direction === 37){
    x = x - 1;
  }
  if(direction === 38){
    y = y - 1;
  }
  if(direction === 39){
    x = x + 1;
  }
  if(direction === 40){
    y = y + 1;
  }
}

function keyPressed(){
// OR: if(keyCode >= 37 && keyCode <= 40){
//      direction = keyCode;
//      }
  if(keyCode === 37){
    direction = 37;
  }
  if(keyCode === 38){
    direction = 38;
  }
  if(keyCode === 39){
    direction = 39;
  }
  if(keyCode === 40){
    direction = 40;
  }
  if(key === "r"){
    x = 200;
    y = 200;
    gameOver = false;
    direction = 39;
    background(255, 0, 0);
    fill(0);
    rect(10, 10, 380, 380);
    frameCount = 0;
  }
}

// FOR MOUSE TURN:
function mousePressed(){
   if(mouseButton === LEFT){
     direction = direction - 1;
   }
   if(mouseButton === RIGHT){
     direction = direction + 1;
   }
   if(direction < 37){
     direction = 40;
   }
   if(direction > 40){
     direction = 37;
   } 
}

function notBlack() {
  let a = get(x, y);
  if(a[0] !== 0) return true;
  else if(a[1] !== 0) return true;
  else if(a[2] !== 0) return true;
  return false;
}


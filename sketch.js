// comp sci 30 major project
// Quinten Smith
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let downArrowImg;
let leftArrowImg;
let rightArrowImg;
let upArrowImg;
let downArrowImg2;
let leftArrowImg2;
let rightArrowImg2;
let upArrowImg2;
let sound;

function preload(){
  sound = loadSound("assest/");
  downArrowImg = loadImage("assets/down arrow.jpg");
  leftArrowImg = loadImage("assets/left arrow.jpg");
  rightArrowImg = loadImage("assets/right arrow.jpg");
  upArrowImg = loadImage("assets/up arrow.jpg");
  // downArrowImg2 = loadImage("assets/down arrow 2.jpg");
  // leftArrowImg2 = loadImage("assets/left arrow 2.jpg");
  // rightArrowImg2 = loadImage("assets/right arrow 2.jpg");
  // upArrowImg2 = loadImage("assets/up arrow 2.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startScreen";
}

function draw() {
  if (state==="startScreen"){
    sound.stop();
    background(0);
    fill(random(255),random(255),random(255));
    textSize(50);
    text("dance dance revolution",500,100);
    text("press the enter key to start",500,300);
    text("press g for instructions",500,400);
  }
  if (state==="instructionScreen"){
    background(0);
    fill("white");
    textSize(100);
    text("Instructions",700,100);
    textSize(25);
    text("hit the up arrow, down arrow ,left arrow and right arrow in time with the moving arrows.",500,300);
    // text("click P to pause",500,400);
    text("backspace to go back",100,100);
    text("start the game with enter",500,500);
  }
  if (state === "arrowScreen"){
    background(255);
    sound.play();
    arrowMover();
    image(leftArrowImg,500,100,50,50);
    image(downArrowImg,700,100,50,50);
    image(upArrowImg,900,100,50,50);
    image(rightArrowImg,1100,100,50,50);
    line(500,500,100,100);
    
  }
  // if (state === "pause"){
  //   background(220);
  //   fill("black");
  //   textSize(25);
  //   text("resume with enter",500,100);
  //   text("instructions with g",500,200);
  //   text("start screen with back space",500,300);
  // }
}
function keyPressed(){
  if (key === "g" && state === "startScreen" || key === "g" && state === "pause"){
    state = "instructionScreen";
  }
  if (keyCode === 8 && state === "instructionScreen" || keyCode === 8 && state === "arrowScreen"){
    state = "startScreen";
  }
  if (keyCode === 13){
    state = "arrowScreen";
  }
  // if (key === "p"){
  //   state = "pause";
  // }
  // if (keyCode === UP_ARROW){
    
    
  // }
  // }
  // if (keyCode === RIGHT_ARROW){
    
  // }
  // if (keyCode === DOWN_ARROW){
    
  // }
  // if (keyCode === LEFT_ARROW){
    
  // }
}
function arrowMover(){
  
  
}

// comp sci 30 major project
// Quinten Smith
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let sound;

// function preload(){
//   sound = loadSound("assest/caramel.mp3");
//}
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startScreen";
}

function draw() {
  if (state==="startScreen"){
    //sound.play();
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
    text("click P to pause",500,400);
    text("backspace to go back",100,100);
    text("start the game with enter",500,500);
  }
  if (state === "arrowScreen"){
    background(255);
    
  }
  if (state === "pause"){
    background(220);
    fill("black");
    textSize(25);
    text("resume with enter",500,100);
    text("instructions with g",500,200);
    text("start screen with back space",500,300);
  }
}
function keyPressed(){
  if (key === "g" && state === "startScreen" || key === "g" && state === "pause"){
    state = "instructionScreen";
  }
  if (keyCode === 8 && state === "instructionScreen" || keyCode === 8 && state === "pause"){
    state = "startScreen";
  }
  if (keyCode === 13){
    state = "arrowScreen";
  }
  if (key === "p"){
    state = "pause";
  }
  // if (keyCode === UP_ARROW){
    
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

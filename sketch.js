// major project
//quinten smith

let state;
let horse1;
let horse2;
let horse3;
let music;

function preload(){
  horse1 = loadImage("assets/horse.png");
  horse2 = loadImage("assets/horse2.png");
  horse3 = loadImage("assets/horse3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  state = "whatToBetScreen";
}

function draw(){
  background(0);
  if (state ==="whatToBetScreen"){
    background(255);
    fill("black");
    textSize(50);
    text("What to bet on:",500,100);
    text("Horses",500,200);
    text("Boxers",500,300);
    text("Rats",500,400);
    text("funds;500",100,500);
    
  }
  if (state === "horseBetting"){
    background(255);
    image(horse1,1300,500,200,200);
    image(horse2,1300,300,200,200);
    image(horse3,1300,100,200,200);
  }
}

function mousePressed(){
  if (mouseX === 500 && mouseY === 200){
    state = "horseBetting";  
  }
  

}
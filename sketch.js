// major project
//quinten smith

let state;
let horse1;
let horse2;
let horse3;
let music;
let checkeredFlag;
let funds;
let dx =0;

function preload(){
  horse1 = loadImage("assets/horse.png");
  horse2 = loadImage("assets/horse2.png");
  horse3 = loadImage("assets/horse3.png");
  checkeredFlag = loadImage("assets/checkeredFlag.png");
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
    text("Rats",500,400);
    text(funds = 500,100,500);
    
  }
  if (state === "horseBetting"){
    let x = 1300;
    let y = 500;
    
    background(255);
    text(funds,windowWidth/2,100);
    
    image(horse1,x,y,200,200);
    image(horse2,1300,300,200,200);
    image(horse3,1300,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    if (mouseIsPressed && mouseX > 1300 && mouseX < 1500 && mouseY > 600 && mouseY < 800 && state === "horseBetting"){
      state = "racing";
    }
    if (state === "racing"){
      background(255);
      text(funds = funds-100,windowWidth/2,100);
      
    }
  }
  if (state === "ratBetting"){
    background(0);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
  }
}

function mousePressed(){
  if (mouseX > 400 && mouseX < 650 && mouseY > 100 && mouseY < 290){
    state = "horseBetting";  
  }
  if (mouseX > 401 && mouseX < 600 && mouseY > 300 && mouseY < 400 && state === "whatToBetScreen"){
    state = "ratBetting";
  }
  

}
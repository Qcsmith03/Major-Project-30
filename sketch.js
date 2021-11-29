// major project
//quinten smith

let state;
let music;

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
    text("What to bet on!",500,100);
    text("Horses",500,200);
    text("Boxers",500,300);
    text("Rats",500,400);
    text("funds;500",100,500);
    
  }
  if (state === "horseBetting"){
    background(0);
  }
}


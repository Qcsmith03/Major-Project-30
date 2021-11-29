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
    background(50);
  }
}
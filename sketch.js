// major project
//quinten smith

let state;
let horse1;
let horse2;
let horse3;
let music;
let checkeredFlag;
let funds = 500;
let dx =0;
let horseMove1 = 1300;
let y = 500;
let horseMove2 = 1300;
let y2 = 300;
let horseMove3 = 1300;
let y3 = 100;
let rat;
let rat2;
let realRat;
let ratX = 500;
let rat2X = 990;


function preload(){
  horse1 = loadImage("assets/horse.png");
  horse2 = loadImage("assets/horse2.png");
  horse3 = loadImage("assets/horse3.png");
  checkeredFlag = loadImage("assets/checkeredFlag.png");
  rat = loadImage("assets/rat.png");
  rat2 = loadImage("assets/rat2.png");
  realRat = loadImage("assets/realRat.png");
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
    text("Rats",500,300);
    textSize(30);
    text("funds $",0,500);
    text(funds,100,500);
    if (funds <= 0){
      textSize(100);
      text("oh no you are out of funds,",0,600);
      text("maybe you can win it back.",0,700);
    }
    if (mouseIsPressed && mouseX >500 && mouseY <100){
      funds = 0;
    }
    if (funds > 500){
      funds = -10000;
      //add a punishment
    }
  }
  if (state === "horseBetting"){
    
    
    background(255);
    text(funds,500,100);
    
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    
    if (mouseIsPressed && mouseX > 1300 && mouseX < 1500 && mouseY > 600 && mouseY < 800 && state === "horseBetting"){
      state = "racing1";
      funds = funds- 100;
    }
    if (mouseIsPressed && mouseX > 1300 && mouseX < 1500 && mouseY > 400 && mouseY < 500 && state === "horseBetting"){
      state = "racing2";
      funds = funds- 100;
    }
    if (mouseIsPressed && mouseX > 1300 && mouseX < 1500 && mouseY > 100 && mouseY < 300 && state === "horseBetting"){
      state = "racing3";
      funds = funds-100;
    }

  }
  if (state === "racing1"){
    background(255);
    text(funds,501,100);
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    if (horseMove1 > 0){
      horseMove1-= random(1,11);
    }
    if (horseMove2 > 0){
      horseMove2-= random(2,13);
    }
    if (horseMove3 > 0){
      horseMove3-= random(2,12);
    }
    if (horseMove1 <=0){
      state = "whatToBetScreen";
      
    }
    
  }
  if (state === "racing2"){
    background(255);
    text(funds,501,100);
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    if (horseMove1 > 0){
      horseMove1-= random(2,13);
    }
    if (horseMove2 > 0){
      horseMove2-= random(1,11);
    }
    if (horseMove3 > 0){
      horseMove3-= random(2,12);
    }
    if (horseMove2 <=0){
      state = "whatToBetScreen";
      
    }
  }
  if (state === "racing3"){
    background(255);
    text(funds,501,100);
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    if (horseMove1 > 0){
      horseMove1-= random(2,13);
    }
    if (horseMove2 > 0){
      horseMove2-= random(2,12);
    }
    if (horseMove3 > 0){
      horseMove3-= random(1,11);
    }
    if (horseMove3 <=0){
      state = "whatToBetScreen";
      
    }
  }
  if (state === "ratBetting"){
    background(255);
    fill("black");
    text(funds,50,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    
    
    

    if (mouseIsPressed && mouseX > 500 && mouseX < 700 && mouseY > 390 && mouseY < 490 && state === "ratBetting"){
      state = "activeFightRat1";
      funds= funds-100;
    }
    if (mouseIsPressed && mouseX > 990 && mouseX < 1100 && mouseY > 250 && mouseY < 490 && state === "ratBetting"){
      state = "activeFightRat2";
      funds= funds-100;
    }
  }
  if (state === "activeFightRat1"){
    background(255);
    fill("black");
    text(funds,50,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    if (ratX <  700){
      ratX ++;
    }
    if (rat2X >  820){
      rat2X --;
    }
    if (ratX === 700){
      ratX = 500;
      rat2X = 990;
      state = "whatToBetScreen";
    }
  }
  if (state === "activeFightRat2"){
    background(255);
    fill("black");
    text(funds,50,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    if (ratX <  700){
      ratX ++;
    }
    if (rat2X > 820){
      rat2X --;
    }
    if (ratX === 700){
      ratX = 500;
      rat2X = 990;
      state = "whatToBetScreen";
    }

  }
  
}

function mousePressed(){
  if (mouseX > 400 && mouseX < 650 && mouseY > 100 && mouseY < 250 && state === "whatToBetScreen"){
    state = "horseBetting"; 
    horseMove1 = 1300;
    horseMove2 = 1300;
    horseMove3 = 1300;
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    
  }
  if (mouseX > 501 && mouseX < 600 && mouseY > 260 && mouseY < 300 && state === "whatToBetScreen"){
    state = "ratBetting";
  }
}
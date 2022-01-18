// major project
//quinten smith

let state;
let horse1; 
let horse2;
let horse3;
let checkeredFlag;
let funds = 500;
let dx =0;
let horseMove1 = 1300;
let y = 500;
let horseMove2 =1300;
let y2 = 300;
let horseMove3 = 1300;
let y3 = 100;
let rat;
let rat2;
let realRat;
let ratX = 300;
let rat2X = 790;
let debt;
let sound;
let door;
let doorSwitch = 0;
let fruit;
let fruit2;
let fruit3;
let gamblejpg;
let background1;
let music;
let cheer;
let deadrat;
let deadrat2;

// sets images and music
function preload(){
  horse1 = loadImage("assets/horse.png");
  horse2 = loadImage("assets/horse2.png");
  horse3 = loadImage("assets/horse3.png");
  checkeredFlag = loadImage("assets/checkeredFlag.png");
  rat = loadImage("assets/rat.png");
  rat2 = loadImage("assets/rat2.png");
  realRat = loadImage("assets/realRat.png");
  debt = loadImage("assets/debt.png");
  sound = loadSound("assets/closing door.ogg");
  door = loadImage("assets/door.png");
  fruit = loadImage("assets/fruit.png");
  fruit2 = loadImage("assets/fruit2.png");
  fruit3 = loadImage("assets/fruit3.png");
  gamblejpg = loadImage("assets/gamble.jpg");
  background1 = loadImage("assets/casino.jpeg");
  music = loadSound("assets/music.mp3");
  cheer = loadSound("assets/cheer.mp3");
  deadrat = loadImage("assets/rat dead.png");
  deadrat2 = loadImage("assets/rat2 dead.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  state = "whatToBetScreen";
  if (state === "whatToBetScreen"){
    music.play();
    music.setVolume(0.2);
  }
  else{
    music.stop();
  }
}

function draw(){
  background(0);
  // the screen to choose what to bet on
  
  
  if (state ==="whatToBetScreen"){
    
    background(255);
    
    image(background1,0,0,2000,1000);
    fill("green");
    textSize(50);
    text("Click down below to bet:",500,100);
    text("Horse Racing",500,200);
    text("Rat Fighting",500,300);
    text("Slots",500,400);
    
    textSize(30);
    text("watch your funds",0,400);
    fill("red");
    text("funds $",0,500);
    text(funds,100,500);
    if (funds <= 0){
      textSize(30);
      text("oh no you are out of funds,",0,600);
      text("maybe you can win it back.",0,700);
    }
    
    
  }
  // cheaters go here
  if (funds > 10000){
    state = "pergetory";
    
  }
  // let you choose what horse to bet for the race.
  if (state === "horseBetting"){
    
    
    background(255);
    text(funds,500,100);
    fill("black");
    text("the horse you click on will be your bet",500,200);
    text("if your horse wins you will double your funds",500,300);
    image(horse1,1000,y,200,200);
    image(horse2,1000,300,200,200);
    image(horse3,1000,100,200,200);
    image(checkeredFlag,100,0,500,1000);
    
    if (mouseIsPressed && mouseX > 1000 && mouseX < 1200 && mouseY > 600 && mouseY < 800 && state === "horseBetting"){
      state = "racing1";
      funds = funds- 100;
      cheer.play();
    }
    if (mouseIsPressed && mouseX > 1000 && mouseX < 1200 && mouseY > 400 && mouseY < 500 && state === "horseBetting"){
      state = "racing2";
      funds = funds- 100;
      cheer.play();
    }
    if (mouseIsPressed && mouseX > 1000 && mouseX < 1200 && mouseY > 100 && mouseY < 300 && state === "horseBetting"){
      state = "racing3";
      funds = funds-100;
      cheer.play();
    }

  }
  // zombie horse thing
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
      horseMove1 = 1300;
      horseMove2 = 1300;
      horseMove3 = 1300;
      state = "horseAgain";
      cheer.stop();
    }
    
  }
  // multi legged horse
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
    if (horseMove2 <= 0){
      horseMove1 = 1300;
      horseMove2 = 1300;
      horseMove3 = 1300;
      state = "horseAgain";
      cheer.stop();
    }
  }
  // guy with horse hat choosen
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
    
    if (horseMove3 <= 0){
      horseMove1 = 1300;
      horseMove2 = 1300;
      horseMove3 = 1300;
      state = "horseAgain";
      cheer.stop();
    }
      
    
  }
  if (state === "horseAgain"){
    background("yellow");
    fill("black");
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
    
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      
      state = "horseBetting";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  // lets you choose what rat
  if (state === "ratBetting"){
    background(255);
    fill("black");
    text(funds,50,100);
    text("click on the rat you think will win",50,200);
    text("if you win your funds will increase",120,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    
    
    

    if (mouseIsPressed && mouseX > 300 && mouseX < 500 && mouseY > 390 && mouseY < 490 && state === "ratBetting"){
      state = "activeFightRat1";
      funds= funds-100;
    }
    if (mouseIsPressed && mouseX > 790 && mouseX < 900 && mouseY > 250 && mouseY < 490 && state === "ratBetting"){
      state = "activeFightRat2";
      funds= funds-100;
    }
  }
  // if choosen rat on all fours
  if (state === "activeFightRat1"){
    background(255);
    fill("black");
    text(funds,50,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    if (ratX <  500){
      ratX ++;
    }
    if (rat2X >  620){
      rat2X --;
    }
    if (ratX === 500){
      ratX = 300;
      rat2X = 790;
      state = "ratAgain";
    }
  }
  
  // if choosen rat with gloves
  if (state === "activeFightRat2"){
    background(255);
    fill("black");
    text(funds,50,100);
    fill("yellow");
    circle(windowWidth/2,windowHeight/2,750);
    image(rat,ratX,300,200,200);
    image(rat2,rat2X,300,200,200);
    if (ratX <  500){
      ratX ++;
    }
    if (rat2X > 620){
      rat2X --;
    }
    if (ratX === 500){
      ratX = 300;
      rat2X = 790;
      state = "ratAgain2";
    }
  
  }
  if (state === "ratAgain"){
    background("yellow");
    fill("black");
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
    image(deadrat,500,500,100,100);
    text("you lose",500,700);
    
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "ratBetting";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  if (state === "ratAgain2"){
    background("yellow");
    fill("black");
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
    image(deadrat2,500,500,100,100);
    text("you lose",500,700);

    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "ratBetting";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  // for lucky people or those who are board
  if (state === "pergetory"){
    background(0);
    textSize(20);
    fill("red");
    text("go play something else.",100,100,100,100);
    text("please",100,400,100,100);
  }
  // sets state to dont gamble once into debt
  if (funds < -500 && state === "whatToBetScreen"){
    state = "don'tGamble";
  }
  // into debt
  if (state === "don'tGamble"){
    background(255);
    textSize(50);
    text("you are in debt, out of cash, and your familiy is in shambles.",100,100);
    text("Go and rethink your life. Don't gamble it only leads to ruin.",100,200);
    text("Try again",500,700);
    image(realRat,100,400,200,200);
    image(debt,400,400,200,200);
    image(gamblejpg,700,400,200,200);
    if (mouseIsPressed && mouseX <= 800 && mouseX >= 500 && mouseY <= 700 && mouseY >= 670){
      funds=500;
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  //slots
  if (state === "Slots"){
    background("yellow");
    textSize(50);
    text(funds,10,40);
    text("click to spin",500,600);
    image(fruit,500,300);
    image(fruit2,600,300);
    image(fruit3,700,300);
    if (mouseIsPressed && state === "Slots"){
      funds = funds - 100;
      state = "slots2";
    }
  }
  //slots after clicking
  if (state === "slots2"){
    background("yellow");
    text(funds,10,40);
    text("press Spacebar to stop",500,600);
    let slots1 = random(0,1500);
    if (slots1 <= 300){
      image(fruit,500,300);
      image(fruit2,600,300);
      image(fruit3,700,300);
    }
    if (slots1 >= 301 && slots1<=600){
      image(fruit,600,300);
      image(fruit2,700,300);
      image(fruit3,500,300);
    }
    if (slots1 >= 601 && slots1<=999){
      image(fruit,700,300);
      image(fruit2,500,300);
      image(fruit3,600,300);
    }
    if (slots1 >= 1000){
      image(fruit,500,300);
      image(fruit,600,300);
      image(fruit,700,300);
    }
    if (keyIsDown(32) && state === "slots2" && slots1 >= 1000 && slots1 <= 1500 ){
      funds = funds+200;
      state ="slots3"; 
      
    }
    if (keyIsDown(32) && state === "slots2" && slots1 <= 300 ){
      
      state ="slots4";
      
    }
    if (keyIsDown(32) && state === "slots2" && slots1 >= 301 && slots1 <=600 ){
      
      state ="slots5";
      
    }
    if (keyIsDown(32) && state === "slots2" && slots1 >= 601 && slots1 <=999 ){
      
      state ="slots6";
      
    }
  }
  if (state === "slots3"){
    background("yellow");
    image(fruit,500,400);
    image(fruit,600,400);
    image(fruit,700,400);
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
    
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "Slots";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  if (state === "slots4"){
    background("yellow");
    image(fruit,500,400);
    image(fruit2,600,400);
    image(fruit3,700,400);
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
      
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "Slots";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  if (state === "slots5"){
    background("yellow");
    image(fruit,600,400);
    image(fruit2,700,400);
    image(fruit3,500,400);
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
        
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "Slots";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  if (state === "slots6"){
    background("yellow");
    image(fruit,700,400);
    image(fruit2,500,400);
    image(fruit3,600,400);
    text(funds,10,40);
    text("Again?",500,100);
    text("try something else",500,300);
          
    if (mouseIsPressed && mouseX <= 700 && mouseX >= 500 && mouseY <= 100 && mouseY >= 70){
      state = "Slots";
    }
    if (mouseIsPressed && mouseX <= 900 && mouseX >= 500 && mouseY <= 300 && mouseY >= 270){
      doorSwitch = millis();
      sound.play();
      state = "door4";
    }
  }
  doorState();
  
  
}

function mousePressed(){
  // clicks on horse racing
  if (mouseX > 400 && mouseX < 800 && mouseY > 100 && mouseY < 250 && state === "whatToBetScreen"){
    sound.play();
    state = "door"; 
    horseMove1 = 1300;
    horseMove2 = 1300;
    horseMove3 = 1300;
    image(horse1,horseMove1,y,200,200);
    image(horse2,horseMove2,300,200,200);
    image(horse3,horseMove3,100,200,200);
    doorSwitch = millis();
  }
  //clicks on mouse fighting
  if (mouseX > 501 && mouseX < 760 && mouseY > 260 && mouseY < 300 && state === "whatToBetScreen"){
    sound.play();
    state = "door2";
    doorSwitch = millis();
  }
  //clicks on slots
  if (mouseX > 500 && mouseX < 600 && mouseY > 350 && mouseY < 420 && state === "whatToBetScreen"){
    sound.play();
    state = "door3";
    doorSwitch = millis();
  }
}
// transitional door
function doorState(){
  if (state === "door"){
    
    background(0);
    fill("white");
    text("tip: mitochondria is the powerhouse of the cell",10,30);
    image(door,600,-40,600,900);
    
    if (millis() > doorSwitch + 2000){
      state = "horseBetting";
      doorSwitch = millis();
    }
  }
  if (state === "door2"){
    
    
    background(0);
    fill("white");
    text("tip: why do they call it oven when you of in the cold ",10,30);
    text("food of out hot eat the food",10,60);
    image(door,600,-40,600,900);
    if (millis() > doorSwitch + 2000){
      state = "ratBetting";
      
      doorSwitch = millis();
    }
  }
  if (state === "door3"){
    background(0);
    fill("white");
    text("tip: press spacebar to stop the spinning of the slots",10,30);
    fill("black");
    image(door,600,-40,600,900);
    if (millis() > doorSwitch + 2000){
      state = "Slots";
      doorSwitch = millis();
    }
  }
  if (state === "door4"){
    background(0);

    image(door,600,-40,600,900);
    if (millis() > doorSwitch + 2000){
      state = "whatToBetScreen";
      doorSwitch = 0;
    }
  }
  
}
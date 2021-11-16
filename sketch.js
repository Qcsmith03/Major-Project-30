// comp sci 30 major project
// Quinten Smith
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startScreen";
}

function draw() {
  if (state==="startScreen"){
    background(0);
    fill(random(255),random(255),random(255));
    textSize(50);
    text("dance dance revolution",500,100);
    text("press space to start",500,300);
    text("instructions",500,400);
  }
  if (state==="startScreen" && )
}


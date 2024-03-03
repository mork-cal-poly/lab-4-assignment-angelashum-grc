function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  background(72, 202, 228);
  myCanvas.parent("canvas-parent");
}

function draw() {
  //_________ Background x, y, floor
  drawBackground(0,0,color(202, 240, 248),color(255))
  
}

//_________________Draw Background____________

function drawBackground(x,y,colorFloor,colorSnow){
  push();
    //—Floor
    translate(x,y)
    fill(colorFloor)
    noStroke();
    rect(0, 300, 400, 100) 
   pop();

  // —-Snow
  push();
    translate(200,400);
    fill(colorSnow);
    noStroke();
    ellipse(-125,-300,10,10);
    ellipse(-140,-100,10,10);
    ellipse(-175,-225,10,10);
    ellipse(110,-125,10,10);
    ellipse(175,-150,10,10);
    ellipse(-155,-75,10,10);
    ellipse(-125,-30,10,10);
    ellipse(120,-375,10,10);
    ellipse(-175,-375,10,10);
    ellipse(125,-300,10,10);
    ellipse(150,-200,10,10);
    ellipse(-25,-375,10,10);
    ellipse(160,-250,10,10);
    ellipse(150,-25,10,10);
    ellipse(170,-75,10,10);
    ellipse(25,-375,10,10);
  pop();
}


function draw() {
  //---------- Creature--- -------------------------
  push();
    //teeth
    fill(255,255,255);
    noStroke();
    translate(200,300);
    triangle(-100,-50,-110,-30,-120,-80);
  pop();
  
  push();
    //teeth
    fill(255,255,255);
    noStroke();
    translate(180,300);
    triangle(-100,-50,-110,-30,-110,-80);
  pop();
  
  push();
    //tail
    fill(133,105,78);
    noStroke();
    translate(200,300);
    triangle(90,-60,80,-90,120,-40);
  pop();
  
  push();
    //body
    fill(184,126,72);
    noStroke();
    translate(200,300);
    quad(-90,-8,-60,-90,70,-120,97,-45,);
  pop();
  
  push();
    //left ear
    fill(133,105,78);
    noStroke();
    translate(200,300);
    triangle(-130,-120,-130,-60,-100,-80);
  pop();
  
   push();
    // right ear
    fill(133,105,78);
    noStroke();
    translate(200,300);
    triangle(-50,-120,-40,-60,-80,-80);
  pop();
  
  push ();   
    //Head
    fill(184,126,72);
    noStroke();
    translate(200,300);
    arc(-90,-50,100,110,PI,3*PI/4)
  pop();
  
   push ();   
    //eye
    fill(255, 0, 0);
    strokeWeight(2);
    translate(200,300);
    line(-90,-70,-110,-60);
  pop();
  
  push();
    //Arm
    fill(133,105,78);
    noStroke();
    translate(180,300);
    scale(0.8);
    rotate(PI/4);
    rect(-50,-30,40,80);
  pop();
  
  push();
    //Leg
    fill(133,105,78);
    noStroke();
    translate(270,180);
    rotate(40);
    ellipse(60,-45,80,60);
  pop();
  
  push();
    //foot
    fill(133,105,78);
    noStroke();
    translate(200,300);
    rotate(.4);
    ellipse(30,-25,40,23);
  pop();
  
}

let clicked = false;

function draw() {

  //_______________Penguin________________
    //x,y,colorDark,colorLight,colorEye,colorBeak
     drawPenguin(200,400,color(29,53,87),color(241,233,218),color(0),color(241,136,5))
  
  //________surprise_________
  if(clicked){
    //x,y,colorHead,colorEyes,colorNose,colorMouth
    drawSurprise(200,400,color(29,53,87),color(0),color(241,136,5),color(191,67,66),color(72, 202, 228));
   }
  
}


//_________________Function for Penguin___________________
function drawPenguin(x,y,colorDark,colorLight,colorEye,colorBeak){

  push();
    translate(x, y);
    noStroke();
    scale(.5);
  
  //---Body----
    fill(colorDark);
    quad(-75,-225,75,-225,100,-50,-100,-50);
  
  //----wings----
  //left
  push();
    translate(-100,-175);
    fill(colorDark);
    rotate(PI/4);
    ellipse(0,0,50,150);
  pop();
  //right
  push();
    translate(100,-175);
    fill(colorDark);
    rotate(3*PI/4);
    ellipse(0,0,50,150);
  pop();
 
  //---Head----
  fill(colorDark);
  ellipse(0,-275,150);
  
  //---Regular Face----
  fill(colorLight);
  arc(0,-262.5,117,120,7*PI/4,5*PI/4);
  ellipse(-30,-262.5,60,90)
  ellipse(30,-262.5,60,90)
  //beak
  fill(colorBeak)
  quad(-20,-275,0,-280,20,-275,0,-260);
  //eye
  fill(colorEye);
  ellipse(-30,-287.5,10,10)
  ellipse(30,-287.5,10,10)

  //----Body Circle
  fill(colorLight);
  ellipse(0,-150,137.5,210);
  
  //----feet----
  fill(colorBeak);
  triangle(-50,-100,-25,-50,-75,-50);
  triangle(50,-100,75,-50,25,-50)
  arc(-50,-62.5,75,75,7*PI/4,5*PI/4);
  arc(50,-62.5,75,75,7*PI/4,5*PI/4); 
  
  
  pop();
  
}

//________________Surprise________________
  function drawSurprise(x,y,colorHead,colorEyes,colorNose,colorMouth,colorTears){
    translate(x,y);
    scale(.5);
    //---head---
    fill(colorHead);
    noStroke();
    ellipse(0,-275,150);
    //---eyes---
    fill(255);
    ellipse(-30,-287.5,40,25);
    ellipse(30,-287.5,40,25);
    fill(colorEyes);
    ellipse(-30,-287.5,15,15);
    ellipse(30,-287.5,15,15);
    //--nose---
    fill(colorNose);
    quad(-20,-275,0,-280,20,-275,0,-240);
    //---mouth---
    fill(colorMouth)
    ellipse(0,-230,40,15);
    fill(colorTears)
    rect(-35,-280,10,80);
    rect(25,-280,10,80);
  }
  
  function mouseClicked() 
  //---bounding box
{
  if(mouseX < 275 &&
     mouseX > 125 &&
    mouseY < 200 &&
     mouseY > 50
    ) {
  clicked = !clicked;     
  }
  }
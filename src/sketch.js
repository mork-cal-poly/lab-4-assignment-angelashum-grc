let x=400;   //translate Creature animation
let p=0; // penguin rotate
let clicked = false; 

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  
  background(72, 202, 228);
  //_________ Background x, y, floor
  drawBackground(0,0,color(202, 240, 248),color(255))

  //_______animating creature 
   if(clicked){ 
    x = x - 2; 
    if (x < -200){
      x=width;
    }
  }

  //___________Creature_______________
  drawCreature(x,0,color(225),color(230,131,17),color(230,166,69),color(0));


  //________animating penguin 
  // Goal: creature left half, penguin spin
  if(x<width/2){
    p+= radians(2);
  }else{
    p=0;
  }

  //_______________Penguin________________
    //x,y,r, colorDark,colorLight,colorEye,colorBeak
    drawPenguin(200,300,p, color(29,53,87),color(241,233,218),color(0),color(241,136,5))
}

//___________animating when clicked____________
  function mouseClicked(){
    clicked = !clicked;
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


function drawCreature(x,y,colorTeeth,colorDark,colorLight,colorEye) {
  push();
  translate(x-200, y);
  
  //creature teeth
  push();
    fill(colorTeeth);
    noStroke();
    translate(200,300);
    triangle(-100,-50,-110,-30,-120,-80);
  pop();
  push();
    //teeth
    fill(colorTeeth);
    noStroke();
    translate(180,300);
    triangle(-100,-50,-110,-30,-110,-80);
  pop();
  
  push();
    //tail
    fill(colorDark);
    noStroke();
    translate(200,300);
    triangle(90,-60,80,-90,120,-40);
  pop();
  
  push();
    //body
    fill(colorLight);
    noStroke();
    translate(200,300);
    quad(-90,-8,-60,-90,70,-120,97,-45);
  pop();
  
  push();
    //left ear
    fill(colorDark);
    noStroke();
    translate(200,300);
    triangle(-130,-120,-130,-60,-100,-80);
  pop();
  
   push();
    // right ear
    fill(colorDark);
    noStroke();
    translate(200,300);
    triangle(-50,-120,-40,-60,-80,-80);
  pop();
  
  push ();   
    //Head
    fill(colorLight);
    noStroke();
    translate(200,300);
    arc(-90,-50,100,110,PI,3*PI/4)
  pop();
  
   push ();   
    //eye
    fill(colorEye);
    strokeWeight(2);
    translate(200,300);
    line(-90,-70,-110,-60);
  pop();
  
  push();
    //Arm
    fill(colorDark);
    noStroke();
    translate(180,300);
    scale(0.8);
    rotate(PI/4);
    rect(-50,-30,40,80);
  pop();
  
  push();
    //Leg
    fill(colorDark);
    noStroke();
    translate(270,180);
    rotate(40);
    ellipse(60,-45,80,60);
  pop();
  
  push();
    //foot
    fill(colorDark);
    noStroke();
    translate(200,300);
    rotate(0.4);
    ellipse(30,-25,40,23);
  pop();
  
  pop();
  
}



//_________________Function for Penguin___________________
function drawPenguin(x,y,r, colorDark,colorLight,colorEye,colorBeak){

  push();
    translate(x, y);
    rotate(r);
    scale(.5);
    noStroke(); 

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

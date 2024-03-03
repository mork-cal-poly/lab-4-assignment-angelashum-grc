function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function setup() {
  createCanvas(400, 400);
  background(77,187,237); 
}

function draw() {
  //---------- Background -------------------------
  push();
    //ground
    fill(34,31,235);
    translate(-200,0)
    rect(200,250,400,400);
  pop();
  
  push();
    //moon
    fill(235,233,30);
    noStroke();
    translate(200,300);
    arc(100,-200,80,90,7*PI/4,3*PI/4);
  pop();
  
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
        
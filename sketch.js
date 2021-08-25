var iss;
var iss1;
var hasDocked=false;
var spacecraft;
var background1;
var space1;
var space2;
var space3;
var space4;

function preload(){
iss=loadImage("Images/iss.png");
background1=loadImage("Images/spacebg.jpg");
space1=loadImage("Images/spacecraft1.png");
space2=loadImage("Images/spacecraft2.png");
space3=loadImage("Images/spacecraft3.png");
space4=loadImage("Images/spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
  iss1=createSprite(330, 130, 50, 50);
  iss1.addImage(iss);
  iss1.debug=true;
  iss1.setCollider("circle",0,0,80);
  iss1.scale=0.25;
  spacecraft=createSprite(285,240,50,50);
  spacecraft.addImage(space1);
  spacecraft.scale=0.1;
}

function draw() {
  background(background1);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown(UP_ARROW)){
spacecraft.y=spacecraft.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(space2);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+1;
      spacecraft.addImage(space3);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-1;
      spacecraft.addImage(space4);
    }

  }  
  if(spacecraft.y<=(iss1.y+70)&&spacecraft.x<=(iss1.x-10)){
    hasDocked=true;
    console.log("yes");
    fill("blue");
    textSize(25);
    text("Docking Succesfull",200,300);
    }
  drawSprites();
}
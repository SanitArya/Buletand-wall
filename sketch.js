var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1200,400);

  

  speed =Math.round(random(4,40)); 
  weight = Math.round(random(200,2000));
  thickness = Math.round(random(10,40))

  bullet = createSprite(40,200,50,30);
  bullet.velocityX = speed;
  bullet.shapeColor = "brown";

  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = "white";

}

function draw() {
  background("black");  

if(collision(bullet,wall)){

  bullet.velocityX = 0;

  var damage = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness));  

  if(damage>20){

    wall.shapeColor = "green";

    textFont("BOLD");
    fill("White");
    text("Damage: "+damage,160,20);
  }

  if(damage<20){

    wall.shapeColor = "red";
    
    textFont("BOLD");
    fill("White");
    text("Damage: "+damage,160,20);
  }

  
}

  textFont("BOLD");
  fill("White");
   text("Speed: "+speed,20,20);
   text("Weight: "+weight,80,20);
   

  drawSprites();
}

function collision(BULLET,WALL){


if(WALL.x-BULLET.x<WALL.width/2+BULLET.width/2){
  return true;
}
else{
  return false;
}
}
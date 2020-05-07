var bullet, wall, wall1,bullet1, bullet0, wall0;
var speed,speed1,speed0, weight,weight1, weight0, thickness,thickness1,thickness0;


function setup() {
  createCanvas(1600,1000);
  car = createSprite(50,200,50,10);
  wall=createSprite(1500,200,thickness,200);

  car1 = createSprite(50,400,50,10);
  wall1=createSprite(1500,450,thickness1,200);

  car0 = createSprite(50,600,50,10);
  wall0 = createSprite(1500,660,thickness0,200);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  speed0=random(224,322);
  weight0=random(32,54);
  thickness0=random(24,86)

  speed1=random(223,323);
  weight1=random(34,56);
  thickness1=random(22,85)
}

function draw() {
  background("blue");

  
  car.velocityX=speed;
  car1.velocityX=speed1;
  car0.velocityX=speed0;

  wall.shapeColor="blue";
  wall1.shapeColor="blue";
  wall0.shapeColor="blue";

  car.shapeColor="yellow";
  car1.shapeColor="yellow";
  car0.shapeColor="yellow";

  if(hasCollide(car,wall)){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;

    if(deformation>10){
      wall.shapeColor=color(255,0,0);
      
    }
    
     if(deformation<10){
      wall.shapeColor="green";
      
    }
  }

  if(hasCollide0(wall0,car0)){
    car0.velocityX=0;
    var deformation2=0.5*weight0*speed0*speed0/thickness*thickness0*thickness0;

    if(deformation2>10){
      wall0.shapeColor=color(255,0,0);
      
    }
    
     if(deformation2<10){
      wall0.shapeColor="green";
    }
  }

  if(hasCollide1(car1,wall1)){
    car1.velocityX=0;
    var deformation1=0.5*weight1*speed1*speed1/thickness1*thickness1*thickness1;

    if(deformation1>10){
      wall1.shapeColor=color(255,0,0);
      
    }
    
     if(deformation1<10){
      wall1.shapeColor="green";
    }
  }

  drawSprites();
}

function hasCollide0(car,wall){
if(wall0.x-car0.x<(car0.width+wall0.width)/2){
  return true;
}
return false;
}

function hasCollide1(car,wall){
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    return true;
  }
  return false;
  }

  function hasCollide(car,wall){
    if(wall.x-car.x<(car.width+wall.width)/2){
      return true;
    }
    return false;
    }
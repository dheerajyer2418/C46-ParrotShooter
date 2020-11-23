var backgroundImg;
var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var gunImg;
var scenery;
var gun;
var parrotImg,parrot, parrotGroup;
var bullet, bulletImg, bulletGroup;
var score = 0;

function preload(){
  backgroundImg = loadImage("background.jpg");
  gunImg = loadImage("gun.png");
  parrotImg = loadAnimation("parrot.jpg","parrot1.jpg","parrot1.jpg");
  bulletImg = loadImage("bullet.jpg");
  startImg = loadImage("start.png");
 
}
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight-130);
  parrotGroup = new Group();
  bulletGroup = new Group();
  //background image
  scenery = createSprite(displayWidth/2,displayHeight/4,displayWidth,displayHeight-130);
  scenery.addImage(backgroundImg);
  scenery.scale = 0.375;
  scenery.x = displayWidth/2;
  scenery.velocityX = -4;

  //gun
  gun = createSprite(displayWidth/2, displayHeight/1.5,displayWidth,displayHeight);
  gun.addImage(gunImg);
  gun.scale = 0.5;

  //start button
 // start = createSprite(displayWidth/2, displayHeight/1.5,displayWidth,displayHeight);
//  start.addImage(startImg);
 // start.scale = 0.5;
}

function draw() {
  //background(backgroundImg);
 // if(gameState === START){
   // background("green");
   // textSize(30);
   // fill("white");
   // text("Welcome To Parrot Shooter Game", displayWidth/3, displayHeight/4);
   // textSize(20);
   // fill("lightblue");
  //  text("Press 'S' to shoot the bullet.", displayWidth/3.5+150, displayHeight/2)

   // if(mousePressedOver(start)){
     // gameState = PLAY;
   // }
    //drawSprites();
 // }
 // elseif(gameState===PLAY)
  //{
    spawnParrots();
    if(scenery.x <400){
      scenery.x = displayWidth/2;
    }

    if(keyDown("L") || keyDown("LEFT_ARROW")){
      gun.velocityX = -4;
      //bullet.velocityX = -4;
      bullets();
      bullet.x = gun.x;
      shootParrots();
     
    }

    if(keyDown("R") || keyDown("RIGHT_ARROW")){
      gun.velocityX = 4;
      //bullet.velocityX = 4;
      bullets();
      bullet.x = gun.x;
      shootParrots();
      
    } 

    //spawnParrots();

    
   
    drawSprites();
    fill("Black");
    textSize(30);
    text("Score: " + score,displayWidth/2,displayHeight/10);
  //}
 
}

function spawnParrots(){

  if(frameCount % 80 === 0){
    //parrot with animation
    parrot = createSprite(displayWidth/4,Math.round(random (displayHeight/5, displayHeight/2)), displayWidth, displayHeight);
    parrot.addAnimation("running", parrotImg);
    parrot.scale = 0.1;
    parrot.velocityX = 2;
    parrot.depth = scenery.depth;
    parrot.depth = parrot.depth + 1;
    parrot.lifetime = Math.round(displayWidth/2);
    parrotGroup.add(parrot);

    return parrot;
  }

 
}

function bullets(){
  bullet = createSprite(displayWidth/2, displayHeight/1.8,displayWidth,displayHeight);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  //bulletsGroup.add(bullet);
  bullet.velocityY = -5;
  bullet.lifetime = Math.round(displayWidth/5);
  bulletGroup.add(bullet);
  return bullet;
}

function shootParrots(){
  if (bulletGroup.isTouching(parrotGroup)) { 
    parrotGroup.destroyEach(); 
    bulletGroup.destroyEach(); 
    score=score+1; 
  }
  //return score;
}

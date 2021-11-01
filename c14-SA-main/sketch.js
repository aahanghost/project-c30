var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacles
var cloud, cloudsGroup, cloudImage;
var score;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacles1 = loadImage("obstacle1.png")
  obstacles2 = loadImage("obstacle2.png")
  obstacles3 = loadImage("obstacle3.png")
  obstacles4 = loadImage("obstacle4.png")
  obstacles5 = loadImage("obstacle5.png")
  obstacles6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
score = 0;

  console.log("Hello"+ 5)
  
}

function draw() {
  background("white");
  
  text("Score: " + score,500,50);
  score = score + Math.round(frameCount/60);
 stroke ("black")

  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  //spawn obstacles
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles (){
  if (frameCount % 60 === 0 ){
    obstacles = createSprite(600,150,10,40);
  var rand = Math.round(random(1,6));
  switch(rand){
    case 1: obstacles.addImage(obstacles1);
    break;
    case 2: obstacles.addImage(obstacles2);
    break;
    case 3: obstacles.addImage(obstacles3);
    break;
    case 4: obstacles.addImage(obstacles4);
    break;
    case 5: obstacles.addImage(obstacles5);
    break;
    case 6: obstacles.addImage(obstacles6);
    break;
    default:break;
  }
    obstacles.velocityX = -5;
  obstacles.scale = 0.5;
  obstacles.lifetime = 120;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10,60));
    cloud.scale = 0.4;
    cloud.velocityX = -3
    //assigning lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}


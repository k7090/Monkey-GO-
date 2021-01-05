
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  score=0;
  
}

function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);
  
  drawSprites();
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(500,160,20,20);
    banana.addImage(bananaImage);    
    banana.scale = 0.1;
    banana.y=Math.round(random(120,200));
    banana.setlifetimeEach=100;
    banana.velocityX=-7;
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(500,300,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.setlifetimeEach=100;
    obstacle.velocityX=-7;
  }
}
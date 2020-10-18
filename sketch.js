
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
monkey = createSprite(80, 315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,340, 600, 10);
 
}


function draw() {
  background(100);

  if(keyDown ("space") && monkey.y >= 300){
     monkey.velocityY = -3;
     }
  if(monkey.y = 280){
    monkey.velocityY = 3;
  }
  console.log(monkey.y); 
  
   drawSprites();
}







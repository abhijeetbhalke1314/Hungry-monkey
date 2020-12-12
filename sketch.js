
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 600);  
  
monkey = createSprite(80, 315, 20 ,20);
monkey.addAnimation("moving", monkey_running);  
monkey.scale = 0.1;  
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -5; 
ground.x = ground.width/2;
  
console.log(ground.x)  

FoodGroup = createGroup();
obstacleGroup = createGroup();
  
}  
  
function draw() {
background("white");
  
if(ground.x < 0) {
ground.x = ground.width /2;  
  
}  
  
if(keyDown("space")) {
monkey.velocityY = -13;  
  
}  
  
monkey.velocityY = monkey.velocityY + 0.8;  
  
monkey.collide(ground);  
  
Food();
obstacle();

drawSprites();

}

function Food (){
if(World.frameCount %80 === 0){
var banana = createSprite(600, 200, 20, 20);  
banana.y = Math.round(random(150, 190)); 
banana.addImage(bananaImage);  
banana.velocityX = -3;  
banana.lifetime = 300;  
banana.scale = 0.1;

FoodGroup.add(banana);  
  
 }
}

function obstacle (){
if(World.frameCount %300 === 0){
var obstacle = createSprite(600, 330, 20, 20);  
obstacle.x = Math.round(random(600, 100));  
obstacle.addImage(obstacleImage);
obstacle.velocityX = -3;
obstacle.lifetime = 300;
obstacle.scale = 0.1;

obstacleGroup.add(obstacle);
  
  }  
}
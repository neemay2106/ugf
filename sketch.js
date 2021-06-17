var man,ground,manImage,backgroundImg;
var stacle,stacleimg,bg;
var obstacle,obstacleImg ;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  manImage = loadAnimation("images/run 1.png","images/run2.png","images/run3.png","images/run 4.png","images/run 5.png");
  backgroundImg = loadAnimation("images/BG/back.png");
  obstacleImg = loadImage("4.png");
 stacleimg = loadImage("images/BG/coin.png");
  
}

function setup() {
  createCanvas(1200,600);
  
ground = createSprite(400,590,800,10);
 obstaclesGroup = new Group();
 coinsGroup =  new Group();
 bg = createSprite(600,600,1200,600);
 bg.addAnimation("background",backgroundImg);
 bg.x = bg.width/2 

 man =  createSprite(220,580,55,50);  
man.addAnimation("manimage",manImage);   
bg.scale = 2;
 man.scale = 0.3;
}


function draw() {
  background ("white");
if (gameState = PLAY){
  bg.velocityX = -2;
if(bg.x<0){
  bg.x = bg.width/2 
}
ground.visible = true;
if(keyDown("space")){ 
 man.velocityY = -10;

}
man.velocityY =  man.velocityY+ 1;


if(bg.x<0){
  bg.x = bg.width/2 
}
spawnObstacles();
spawnCoin();
if
}

  textSize(2)
  text("score"+score,500,500);
  fill(255,0,0);










man.collide(ground);
  drawSprites();

}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,550,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg);
              break;
      case 2: obstacle.addImage(obstacleImg);
              break;
      case 3: obstacle.addImage(obstacleImg);
              break;
      case 4: obstacle.addImage(obstacleImg);
              break;
      case 5: obstacle.addImage(obstacleImg);
              break;
      case 6: obstacle.addImage(obstacleImg);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }





}
function spawnCoin() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var coin = createSprite(600,120,40,10);
    coin.y = Math.round(random(80,120));
    coin.addImage(stacleimg);
    coin.scale = 0.1;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 200;
    
    //adjust the depth
    //coin.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    coinsGroup.add(coin);
  }
  
}
  

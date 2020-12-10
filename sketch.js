
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime,score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");               
 
}



function setup() {
 
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  survivalTime=0
  score = 0
  
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
background(600,600)
  
  
  if(keyDown("space")){
    monkey.velocityY = -7
    
  }
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
  monkey.velocityY = monkey.velocityY +0.8
  
  monkey.collide(ground)
  bananas()
  obstacles()
    
  drawSprites()
  stroke("white")
  textSize(20)
  fill("white")
  text ("Score:"+score,500,50)
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0
    monkey.velocityY = 0
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text ("survivalTime:"+survivalTime,100,50)
}
function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(400,200,20,20)
    banana.scale = 0.1
   banana.y = random(120,200);
    banana.addImage(bananaImage)
    banana.velocityX = -7
    bananaGroup.add(banana)
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(400,315,20,20)
    obstacle.scale = 0.2
   obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4
    obstacleGroup.add(obstacle)
  }
   
}






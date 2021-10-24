var road,roadImg;
var distance = 0;
var ball, ballImg;
var PLAY;
var gameState = PLAY;
var END;
 var coinsGroup;
 var fire,fireImg,firesGroup;
 var bomb,bombImg,bombsGroup;
 var stone,stoneImg ,stonesGroup;
 var fireball,fireballImg;
 var Health = 10
var score =0 
var power = 5
var box,boxImg,boxesGroup;
var gameOver,gameOverImg;
var invisibleGround1,invisibleGroundImg1;
var invisibleGround2,invisibleGroundImg2;
var coin;



function preload(){
 roadImg = loadImage ("Images/track.png");
 coinImg = loadImage("Images/coin.png");
 fireImg = loadImage("Images/fire.png");
 bombImg = loadImage("Images/bomb.png");
 stoneImg = loadImage("Images/s1.png");
 boxImg = loadImage("Images/coins1.png");
 gameOverImg = loadImage("Images/gameover.png")
 fireballImg = loadAnimation("Images/fireball.png","Images/fireball1.png","Images/fireball2.png")
 ballImg = loadAnimation("Images/Basketball.png","Images/Basketball1.png","Images/Basketball2.png")
}

function setup(){
  createCanvas(windowWidth,900)  
  road = createSprite(width/2,900)
road.addImage(roadImg)
road.scale =0.8


ball =  createSprite(width/2,height-20,20,20)
ball.addAnimation("ball",ballImg)
ball.addAnimation("fireball",fireballImg)
ball.scale = 0.9

gameOver =  createSprite(400,700)
gameOver.addAnimation("gameOver",gameOverImg)
gameOver.scale = 0.2


invisibleGround1 = createSprite(370,350,10,999);
invisibleGround1.visible = false;

invisibleGround2 = createSprite(1400,370,10,999);
invisibleGround2.visible = false;

coinsGroup =  new Group();
firesGroup =  new Group();
bombsGroup =  new Group();
stonesGroup =  new Group();
boxesGroup =  new Group();
}

function draw(){
  background(85,107,47)
  
 // road.velocityY = (4+2*score/10)
  
  if(gameState === PLAY){
gameOver.visible = false
ball.collide(invisibleGround1)
ball.collide(invisibleGround2)
edges= createEdgeSprites();
  ball.collide(edges);
coinsGroup.collide(invisibleGround2)
    createCoins();
    createfires();
    createbombs();
    createstones();
    createBoxes();
  if(road.y > height ){
    road.y = height/1.5;
  }
  if(keyDown("up_arrow")){
    ball.y=ball.y-3
    road.y = road.y+8
    
  }
  if(keyDown(DOWN_ARROW)){
    ball.y=ball.y+3
    
    
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x +5
  }
  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-5
  }
 
 if(ball.isTouching(firesGroup)){
  Health = Health+1
  //firesGroup.destroyEach();
  ball.changeAnimation("fireball",fireballImg)
  ball.scale = 0.2

    } else if (Health < 10){
      ball.changeAnimation("ball", ballImg)
      ball.scale = 0.9
    }

    if(ball.isTouching(bombsGroup)){
      Health = Health-5
     bombsGroup.destroyEach();
   
       }

       

       if(ball.isTouching(stonesGroup)){
        Health = Health-5
     stonesGroup.destroyEach();
         }
         if(ball.isTouching(coinsGroup)){
         score = score+2
       coinsGroup.destroyEach();
       

           }

           if(ball.isTouching(boxesGroup)){
          score = score+5
           
         boxesGroup.destroyEach();
             }



             
             if(Health === 0){
             gameOver.visible = true
              gameState = END
              road.velocityY = 0
              gameState = END;
              ball.velocityY = 0
              ball.velocityX = 0
              coinsGroup.setVelocityYEach(0)
              firesGroup.setVelocityYEach(0)
              coinsGroup.setLifetimeEach(-1)
              firesGroup.setLifetimeEach(-1)
              bombsGroup.setLifetimeEach(-1)
              stonesGroup.setLifetimeEach(-1)
              bombsGroup.setLifetimeEach(-1)
              stonesGroup.setVelocityYEach(0)
              boxesGroup.setVelocityYEach(0)
              bombsGroup.setVelocityYEach(0)
             
            }
            if(gameState ===END){
          
            }
          




 drawSprites()
 fill("Black")
 textSize(25)
 text("score:" +score,370,20)
 
 fill("black")
 textSize(25)
 text("Health:" + Health,200,20 )

 
}
 //function coinsGroup(){
  function createCoins() {
    if (World.frameCount % 120 == 0) {
    var coins = createSprite(Math.round(random(width/2,height-80,20,20),40, 10, 10));
    coins.addImage( coinImg);
    coins.scale=0.04;
  coins.velocityY = 3;
     coins.lifetime = 300;
    coinsGroup.add( coins);
  }
  }

  function createfires() {
    if (World.frameCount % 400 == 0) {
    var fires = createSprite(Math.round(random(width/2,height-200,20,20),40, 10, 10));
    fires.addImage( fireImg);
    fires.scale=0.04;
   fires.velocityY = 3;
    fires.lifetime = 300;
    firesGroup.add( fires);
  }
  }

  function createbombs() {
    if (World.frameCount % 500 == 0) {
    var bombs = createSprite(Math.round(random(width/2,height-300,20,20),40, 10, 10));
    bombs.addImage( bombImg);
    bombs.scale=0.3;
   bombs.velocityY = 3;
    bombs.lifetime = 300;
    bombsGroup.add( bombs);
  }
  }
  function createstones() {
    if (World.frameCount % 300 == 0) {
    var stones = createSprite(Math.round(random(width/2,height-380,20,20),40, 10, 10));
    stones.addImage( stoneImg);
    stones.scale=0.3;
   stones.velocityY = 3;
    stones.lifetime = 300;
    stonesGroup.add( stones);
  }
  }
  function createBoxes() {
    if (World.frameCount % 250 == 0) {
    var boxes = createSprite(Math.round(random(width/2,height-400,20,20),40, 10, 10));
    boxes.addImage( boxImg);
    boxes.scale=0.3;
   boxes.velocityY = 3;
    boxes.lifetime = 300;
    boxesGroup.add( boxes);
  }
  }
}
  
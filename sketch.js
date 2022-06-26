var b1,b2,b3,b4,b5;
var start;
var road1,road2,road3,road4,road5,road6,road7,road8,road9,road10,road11,road12,road13,road14,road15,road16;
var road17,road18,road19,road20,road21,road22,road23,road24,road25,road26,road27,road28,road29,road30,road31
,road32;
var invb1,invb2,invb3,invb4,invb5,invb6,invb7,invb8,invb9,invb10,invb11,invb12,invb13,invb14,invb15,invb16,invb17,invb18,invb19,invb20;
var invb21,invb22,invb23,invb24,invb25,invb26,invb27,invb28,invb29,invb20,invb21,invb22,invb23,invb24,invb25,invb26,invb27,invb28,invb29,invb30;
var b1Image,b3Image,b4Image,b5Image;
var tree,treeImage;
var player,playerImage;
var bluemonster,monsterImage;
var invb1;
var bullet,bulletGroup,bulletImage;
var monsterGroup;
var playerShootImage;
var score=0;
var bullets=50;
var gameState="fight";
var templeImg,temple;
var grassImg,grass;



function preload(){
 b1Image = loadImage("b1.png");
 b3Image = loadImage("b3.png");
 b4Image = loadImage("b4.png");
 b5Image = loadImage("b5.png");
 treeImage = loadImage("tree.png");
 monsterImage = loadImage("monster.png");
 bulletImage = loadImage("bullet.png");
 playerImage = loadImage("shooter_2.png");
 playerShootImage = loadImage("shooter_3.png");
 templeImg = loadImage("temple.png");
 grassImg = loadImage("grass.png");
 winnerImg = loadImage("winner.jpg");
 


}

function setup() {
  createCanvas(1650,750);
  bulletGroup = new Group();
  monsterGroup = new Group();

  b1 = createSprite(150, 580,400,150);
  b1.shapeColor="yellow";
  b1.addImage(b1Image);
  b1.scale=0.6
  b3 = createSprite(1130,600,300,120);
  b3.addImage(b3Image);
  b3.scale=0.5
  b4 = createSprite(600,550,300,220);
  b4.addImage(b4Image);
  b4.scale=0.12;
  b5 = createSprite(300,350,100,200);
  b5.addImage(b5Image);
  b5.scale=0.65;
  tree = createSprite(920,200,100,200);
  tree.addImage(treeImage);
  tree.scale=0.25;
  temple = createSprite(1550,290,100,200);
  temple.addImage(templeImg);
  grass = createSprite(900,350,300,30);
 // grass.addImage(grassImg);
  //grass.scale=0.2


  invb1=createSprite(100,675,480,5);
  invb2 = createSprite(100,730,600,10);
  invb3 = createSprite(380,700,5,80);
  invb4 = createSprite(380,540,5,200);
  invb5 = createSprite(335,585,5,200);
  invb6 = createSprite(625,680,480,5);
  invb7 = createSprite(645,620,520,5);
  invb8 = createSprite(240,495,200,5);
  invb9 = createSprite(290,445,200,5);
  invb10 = createSprite(155,490,5,200);
  invb11 = createSprite(205,400,5,130);
  invb12 = createSprite(80,395,180,5);
  invb13 = createSprite(165,345,180,5);
  invb14 = createSprite(75,300,5,100);
  invb15 = createSprite(25,300,5,1000);
  invb16 = createSprite(50,250,50,5);
  invb17 = createSprite(900,670,5,100);
  invb18 = createSprite(850,725,5,100);
  invb19 = createSprite(1100,750,600,5);
  invb20 = createSprite(1120,700,460,5);
  invb21 = createSprite(1395,600,5,430);
  invb22 = createSprite(1345,585,5,290);
  invb23 = createSprite(905,440,900,5);
  invb24 = createSprite(945,390,900,5);
  invb25 = createSprite(505,290,5,220);
  invb26 = createSprite(455,350,5,250);
  invb27 = createSprite(227,225,450,5);
  invb28 = createSprite(375,175,300,5);
  invb29 = createSprite(140,175,70,5);
  invb30 = createSprite(55,125,5,200);
  invb31 = createSprite(105,125,5,100);
  invb32 = createSprite(400,150,370,5);
  invb33 = createSprite(400,100,450,5);
  invb34 = createSprite(600,200,5,200);


  start = createSprite(100,700,480,50);
  start.shapeColor="yellow"
  

  road1 = createSprite(360,585,50,280);
  road2 =createSprite(600,650,500,50);


  road3 = createSprite(280,470,200,50);
  road4 = createSprite(180,445,50,100);
  road5 = createSprite(115,370,180,50);
  road6 = createSprite(50,300,50,100);
  road7 = createSprite(875,675,50,100);
  road8 = createSprite(1100,730,500,50);
  road9 = createSprite(1370,600,50,320);
  road10 = createSprite(945,415,900,50);
  road11 = createSprite(480,315,50,250);
  road12 = createSprite(305,200,400,50);
  road13 = createSprite(80,150,50,150);
  road14 = createSprite(405,50,698,50);
  road15 = createSprite(200,150,50,100);
  road16 = createSprite(400,125,400,50);
  road17 = createSprite(600,200,50,200);
  road18 = createSprite(778,175,50,300);
  road19 = createSprite(905,300,300,50);
  road20 = createSprite(1050,175,50,300);
  road21 = createSprite(1180,50,220,50);
  road22 = createSprite(1300,175,50,300);
  road23 = createSprite(1250,150,100,50);
  road24 = createSprite(1220,200,50,150);
  road25 = createSprite(1370,350,190,50);
  road26 = createSprite(1440,200,50,300);
  road27 = createSprite(1550,75,200,50);
  road28 = createSprite(1550,150,200,50);
  road29 = createSprite(1625,370,50,400);
  road30 = createSprite(1600,400,200,50);
  road13 = createSprite(1520,550,50,350);
  road32 = createSprite(1600,700,210,50);
  road32.shapeColor="red";

  player = createSprite(50,700,20,20);
  player.shapeColor="orange";
  player.addImage(playerImage);
  player.scale=0.09;
  player.debug=true
  player.setCollider("circle",0,0,50);


  
}

function draw() {
  background(255,255,255); 
  
  textSize(20);
  text("score "+score,1550,30);
  text("bullet"+bullets,1400,30)

  player.collide(invb1);
  player.collide(invb2);
  player.collide(invb3);
  player.collide(invb4);
  player.collide(invb5);
  player.collide(invb6);
  player.collide(invb7);
  player.collide(invb8);
  player.collide(invb9);
  player.collide(invb10);
  player.collide(invb11);
  player.collide(invb12);
  player.collide(invb13);
  player.collide(invb14);
  player.collide(invb15);
  player.collide(invb16);
  player.collide(invb17);
  player.collide(invb18);
  player.collide(invb19);
  player.collide(invb20);
  player.collide(invb21);
  player.collide(invb22);
  player.collide(invb23);
  player.collide(invb23);
  player.collide(invb24);
  player.collide(invb25);
  player.collide(invb26);
  player.collide(invb27);
  player.collide(invb28);
  player.collide(invb29);
  player.collide(invb30);
  player.collide(invb31);
  player.collide(invb32);
  player.collide(invb33);
  player.collide(invb34);



  invb1.visible=false;
  invb2.visible=false;
  invb3.visible=false;
  invb4.visible=false;
  invb5.visible=false;
  invb6.visible=false;
  invb7.visible=false;
  invb8.visible=false;
  invb9.visible=false;
  invb10.visible=false;
  invb11.visible=false;
  invb12.visible=false;
  invb14.visible=false;
  invb13.visible=false;
  invb15.visible=false;
  invb16.visible=false;
  invb17.visible=false;
  invb18.visible=false;
  invb19.visible=false;
  invb20.visible=false;
  invb21.visible=false;
  invb22.visible=false;
  invb23.visible=false;
  invb24.visible=false;
  invb25.visible=false;
  invb26.visible=false;
  invb27.visible=false;
  invb28.visible=false;
  invb29.visible=false;
  invb30.visible=false;
  invb31.visible=false;
  invb32.visible=false;
  invb33.visible=false;
  invb34.visible=false;


  if(gameState==="fight"){
    if(bulletGroup.isTouching(monsterGroup)){
      for(var i=0; i<monsterGroup.length;i++){
        if(monsterGroup[i].isTouching(bulletGroup)){
          monsterGroup[i].destroy();
          score+=5;
        }
      }
    }

    if(keyIsDown(87)||keyIsDown(119) ){
      player.y -=5;
    }
    if (keyIsDown(83)||keyIsDown(115)){
      player.y +=5;
    }
    if(keyIsDown(65)||keyIsDown(97)){
      player.x-=5;
    }
    if(keyIsDown(68)||keyIsDown(100)){
      player.x +=5;
    }
    /*if(keyIsDown(32)){
      player.addImage(playerShootImage);
      spawnBullet();
    }*/
    if(keyWentDown("space")){
      player.addImage(playerShootImage);
      spawnBullet();
      bullets-=1;
    }
    else if(keyWentUp("space")){
      player.addImage(playerImage)
    }

      if(bullets<1){
        gameState="lost";
      }
  
      if(player.isTouching(monsterGroup)){
        for(var i=0; i<monsterGroup.length;i++){
        player.destroy();
        gameState="lost";
       }

       if(player.isTouching(road32)){
        gameState="winner";
       }
    }
   

    monster();
    drawSprites();

  }
  else if(gameState==="lost"){
  //background("black"); 
  textSize(50);
  fill("red");
  text("game over",800,325);
  monsterGroup.destroyEach();
  player.destroy();

}

if(gameState==="winner"){
  background(winnerImg);
}
   
  
}

function monster(){
if(frameCount%70===0){
//bluemonster = createSprite(random(100,1600),random(100,700),20,20);
bluemonster = createSprite(player.x+150,player.y,20,20);
bluemonster.shapeColor="blue"
bluemonster.velocityX=-2;
//bluemonster.debug=true;
bluemonster.setCollider("circle",0,0,50);

bluemonster.addImage(monsterImage);
bluemonster.scale=0.1
bluemonster.lifeTime=1700;
monsterGroup.add(bluemonster);
}


}

function spawnBullet(){
  bullet = createSprite(player.x,player.y,10,10);
  bullet.velocityX =2;
  bulletGroup.add(bullet);
  bullet.addImage(bulletImage);
  bullet.scale=0.02;

}
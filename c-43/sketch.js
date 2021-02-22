var wolf ,wolf1,wolf2,wolf3,wolf4
var ghost1,ghostI1
var ghost2,ghostI2
var ghost3,ghostI3
var ghost4,ghostI4
var pelet,bkI,bk;
var edges;
var cardboard1, cardboard2, cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,
 cardboard15, cardboard16, cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,
 cardboard29, cardboard30, cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,cardboard37
function preload(){
    wolf1=loadAnimation("l1.png")
    wolf2=loadAnimation("l1.png","l2.png","l3.png","l4.png")
    wolf3=loadAnimation("r1.png","r2.png","r3.png","r4.png")
    wolf4=loadAnimation("r1.png")
    wolf5=loadAnimation("b1.png","b2.png","b3.png","b4.png")
   wolf6=loadAnimation("wofl d1.png","d2.png"," wolf d3.png"," d4.png")
   ghostI1=loadImage("ghost1.png")
   ghostI2=loadImage("ghost2.png")
   ghostI3=loadImage("ghost3.png")
   ghostI4=loadImage("ghost4.png")
  // bkI  = loadAnimation("blue.jpg","blue.jpg","green.jpg","green.jpg","pink.jpg","pink.jpg","teal.jpg","teal.jpg","yellow.jpg","yellow.jpg");

}

function setup(){
    createCanvas(600,600)

    edges=createEdgeSprites()

    bk=createSprite(width/2,height/2,width,height);
   // bk.addAnimation("back",bkI);
    bk.scale=3.5;
    for(var i=30;i<600;i=i+50){
        for(var y = 35;y<600;y = y+50){
            pelet = createSprite(i,y,5,5)
            pelet.shapeColor="teal"
        }
    }
    wolf=createSprite(width-30,height-30)
    wolf.addAnimation("left",wolf1)
    wolf.scale=0.1
    wolf.debug = true
    wolf .setCollider("rectangle",0,0,10,40)
ghost1= createSprite(width/2,height/2);
ghost1.addImage(ghostI1)
ghost1.scale=0.02
ghost1.velocityX=1.4
ghost1.velocityY=0.4
ghost2= createSprite(width/2-50,height/2);
ghost2.addImage(ghostI2)
ghost2.scale=0.02
ghost2.velocityX=0.4
ghost2.velocityY=2.4
ghost3= createSprite(width/2-100,height/2);
ghost3.addImage(ghostI3)
ghost3.scale=0.02
ghost3.velocityX=1.9
ghost3.velocityY=1.0
ghost4= createSprite(width/2-150,height/2);
ghost4.addImage(ghostI4)
ghost4.scale=0.02
ghost4.velocityX=2.4
ghost4.velocityY=1.6

 cardboard1 = createSprite(55,20,13,95);
cardboard2 = createSprite(30,150,160,13);
 cardboard3 = createSprite(305,170,13,90);
 cardboard4 = createSprite(131,35,65,13);
cardboard5 = createSprite(157,80,13,85);
 cardboard6 = createSprite(330,180,60,13);
 cardboard7 = createSprite(50,315,13,80);
cardboard8 = createSprite(75,350,60,13);
 cardboard9 = createSprite(330,60,100,13);
 cardboard10 = createSprite(380,30,13,180);
 cardboard11 = createSprite(460,82,13,70);
 cardboard12 = createSprite(550,110,170,13);
 cardboard13 = createSprite(200,80,90,13);
 cardboard14 = createSprite(130,265,13,120);
 cardboard15 = createSprite(238,100,13,45);
 cardboard16 = createSprite(290,270,80,13);
 cardboard17 = createSprite(98,405,13,120);
 cardboard18 = createSprite(6,255,95,13);
 cardboard19 = createSprite(75,460,60,13);
 cardboard20 = createSprite(50,500,13,70);
 cardboard21 = createSprite(75,530,60,13);
 cardboard22 = createSprite(140,410,80,13);
cardboard23 = createSprite(163,320,80,13);
 cardboard24 = createSprite(198,265,13,120);
 cardboard25 = createSprite(310,360,13,185);
cardboard26 = createSprite(212,200,40,13);
 cardboard27 = createSprite(520,185,130,13);
 cardboard28 = createSprite(450,242,13,125);
cardboard29 = createSprite(250,500,13,200);
 cardboard30 = createSprite(428,300,60,13);
 cardboard31 = createSprite(150,555,13,95);
 cardboard32 = createSprite(220,550,50,13);
 cardboard33 = createSprite(545,350,150,13);
 cardboard34 = createSprite(430,500,80,13);
 cardboard35 = createSprite(464,419,13,150);
 cardboard36 = createSprite(326,573,13,80);
 cardboard37 = createSprite(360,570,80,13);

cardboard1.shapeColor = "magenta";
cardboard2.shapeColor = "teal";
cardboard3.shapeColor = "orange";
cardboard4.shapeColor = "red";
cardboard5.shapeColor = "red";
cardboard6.shapeColor = "orange";
cardboard7.shapeColor = "purple";
cardboard8.shapeColor = "purple";
cardboard9.shapeColor = "blue";
cardboard10.shapeColor = "blue";
cardboard11.shapeColor = "cyan";
cardboard12.shapeColor = "cyan";
cardboard13.shapeColor = "red";
cardboard14.shapeColor = "olive";
cardboard15.shapeColor = "red";
cardboard16.shapeColor = "brown";
cardboard17.shapeColor = "purple";
cardboard18.shapeColor = "cyan";
cardboard19.shapeColor = "brown";
cardboard20.shapeColor = "brown";
cardboard21.shapeColor = "brown";
cardboard22.shapeColor = "purple";
cardboard23.shapeColor = "olive";
cardboard24.shapeColor = "olive";
cardboard25.shapeColor = "brown";
cardboard26.shapeColor = "olive";
cardboard27.shapeColor = "orange";
cardboard28.shapeColor = "orange";
cardboard29.shapeColor = "teal";
cardboard30.shapeColor = "orange";
cardboard31.shapeColor = "red";
cardboard32.shapeColor = "teal";
cardboard33.shapeColor = "magenta";
cardboard34.shapeColor = "magenta";
cardboard35.shapeColor = "magenta";
cardboard36.shapeColor = "olive";
cardboard37.shapeColor = "olive";

}
function draw(){
    background(180)
    wolf.velocityX=0
    wolf.velocityY=0
    if (keyDown(LEFT_ARROW)) {
     wolf.velocityX= -2
     wolf.addAnimation("left1",wolf2)
     wolf.changeAnimation("left1")
     wolf.scale=0.1
    }
    if (keyDown(RIGHT_ARROW)) {
        wolf.velocityX= +2
        wolf.addAnimation("right1",wolf3)
        wolf.changeAnimation("right1")
        wolf.scale=0.1
       }
       if (keyDown(UP_ARROW)) {
        wolf.velocityY= -2
        wolf.addAnimation("up1",wolf5)
        wolf.changeAnimation("up1")
        wolf.scale=0.05
       }
       if (keyDown(DOWN_ARROW)) {
        wolf.velocityY= +2
        wolf.addAnimation("down1",wolf6)
        wolf.changeAnimation("down1")
        wolf.scale=0.05
       }
      
      ghost1.bounceOff(edges)
      ghost2.bounceOff(edges)
      ghost3.bounceOff(edges)
      ghost4.bounceOff(edges)

      ghost1.bounce(ghost2)
      ghost1.bounce(ghost3)
      ghost1.bounce(ghost4)
      ghost2.bounce(ghost3)
      ghost2.bounce(ghost4)
      ghost3.bounce(ghost4)




wolf.collide (cardboard1) ;
wolf.collide (cardboard2);
wolf.collide (cardboard3) ;
wolf.collide (cardboard4) ;
wolf.collide (cardboard5) ;
wolf.collide (cardboard6) ;
wolf.collide (cardboard7) ;
wolf.collide (cardboard8) ;
wolf.collide (cardboard9) ;
wolf.collide (cardboard10) ;
wolf.collide (cardboard11) ;
wolf.collide (cardboard12) ;
wolf.collide (cardboard13) ;
wolf.collide (cardboard14) ;
wolf.collide (cardboard15) ;
wolf.collide (cardboard16);
wolf.collide (cardboard17) ;
wolf.collide (cardboard18) ;
wolf.collide (cardboard19) ;
wolf.collide (cardboard20) ;
wolf.collide (cardboard21) ;
wolf.collide (cardboard22) ;
wolf.collide (cardboard23);
wolf.collide (cardboard24) ;
wolf.collide(cardboard25);
wolf.collide (cardboard26)
wolf.collide (cardboard27) 
wolf.collide (cardboard28) 
wolf.collide (cardboard29) 
wolf.collide (cardboard30) ;
wolf.collide (cardboard31) ;
wolf.collide (cardboard32) ;
wolf.collide (cardboard33) ;
wolf.collide (cardboard34) ;
wolf.collide (cardboard35) 
wolf.collide (cardboard36) 
wolf.collide (cardboard37) 

ghost1.bounceOff (cardboard1) ;
ghost1.bounceOff (cardboard2);
ghost1.bounceOff (cardboard3) ;
ghost1.bounceOff (cardboard4) ;
ghost1.bounceOff (cardboard5) ;
ghost1.bounceOff (cardboard6) ;
ghost1.bounceOff (cardboard7) ;
ghost1.bounceOff (cardboard8) ;
ghost1.bounceOff (cardboard9) ;
ghost1.bounceOff (cardboard10) ;
ghost1.bounceOff (cardboard11) ;
ghost1.bounceOff (cardboard12) ;
ghost1.bounceOff (cardboard13) ;
ghost1.bounceOff (cardboard14) ;
ghost1.bounceOff (cardboard15) ;
ghost1.bounceOff (cardboard16);
ghost1.bounceOff (cardboard17) ;
ghost1.bounceOff (cardboard18) ;
ghost1.bounceOff (cardboard19) ;
ghost1.bounceOff (cardboard20) ;
ghost1.bounceOff (cardboard21) ;
ghost1.bounceOff (cardboard22) ;
ghost1.bounceOff (cardboard23);
ghost1.bounceOff (cardboard24) ;
ghost1.bounceOff(cardboard25);
ghost1.bounceOff (cardboard26)
ghost1.bounceOff (cardboard27) 
ghost1.bounceOff (cardboard28) 
ghost1.bounceOff (cardboard29) 
ghost1.bounceOff (cardboard30) ;
ghost1.bounceOff (cardboard31) ;
ghost1.bounceOff (cardboard32) ;
ghost1.bounceOff (cardboard33) ;
ghost1.bounceOff (cardboard34) ;
ghost1.bounceOff (cardboard35) 
ghost1.bounceOff (cardboard36) 
ghost1.bounceOff (cardboard37) 

ghost2.bounceOff (cardboard1) ;
ghost2.bounceOff (cardboard2);
ghost2.bounceOff (cardboard3) ;
ghost2.bounceOff (cardboard4) ;
ghost2.bounceOff (cardboard5) ;
ghost2.bounceOff (cardboard6) ;
ghost2.bounceOff (cardboard7) ;
ghost2.bounceOff (cardboard8) ;
ghost2.bounceOff (cardboard9) ;
ghost2.bounceOff (cardboard10) ;
ghost2.bounceOff (cardboard11) ;
ghost2.bounceOff (cardboard12) ;
ghost2.bounceOff (cardboard13) ;
ghost2.bounceOff (cardboard14) ;
ghost2.bounceOff (cardboard15) ;
ghost2.bounceOff (cardboard16);
ghost2.bounceOff (cardboard17) ;
ghost2.bounceOff (cardboard18) ;
ghost2.bounceOff (cardboard19) ;
ghost2.bounceOff (cardboard20) ;
ghost2.bounceOff (cardboard21) ;
ghost2.bounceOff (cardboard22) ;
ghost2.bounceOff (cardboard23);
ghost2.bounceOff (cardboard24) ;
ghost2.bounceOff(cardboard25);
ghost2.bounceOff (cardboard26)
ghost2.bounceOff (cardboard27) 
ghost2.bounceOff (cardboard28) 
ghost2.bounceOff (cardboard29) 
ghost2.bounceOff (cardboard30) ;
ghost2.bounceOff (cardboard31) ;
ghost2.bounceOff (cardboard32) ;
ghost2.bounceOff (cardboard33) ;
ghost2.bounceOff (cardboard34) ;
ghost2.bounceOff (cardboard35) 
ghost2.bounceOff (cardboard36) 
ghost2.bounceOff (cardboard37) 

ghost3.bounceOff (cardboard1) ;
ghost3.bounceOff (cardboard2);
ghost3.bounceOff (cardboard3) ;
ghost3.bounceOff (cardboard4) ;
ghost3.bounceOff (cardboard5) ;
ghost3.bounceOff (cardboard6) ;
ghost3.bounceOff (cardboard7) ;
ghost3.bounceOff (cardboard8) ;
ghost3.bounceOff (cardboard9) ;
ghost3.bounceOff (cardboard10) ;
ghost3.bounceOff (cardboard11) ;
ghost3.bounceOff (cardboard12) ;
ghost3.bounceOff (cardboard13) ;
ghost3.bounceOff (cardboard14) ;
ghost3.bounceOff (cardboard15) ;
ghost3.bounceOff (cardboard16);
ghost3.bounceOff (cardboard17) ;
ghost3.bounceOff (cardboard18) ;
ghost3.bounceOff (cardboard19) ;
ghost3.bounceOff (cardboard20) ;
ghost3.bounceOff (cardboard21) ;
ghost3.bounceOff (cardboard22) ;
ghost3.bounceOff (cardboard23);
ghost3.bounceOff (cardboard24) ;
ghost3.bounceOff(cardboard25);
ghost3.bounceOff (cardboard26)
ghost3.bounceOff (cardboard27) 
ghost3.bounceOff (cardboard28) 
ghost3.bounceOff (cardboard29) 
ghost3.bounceOff (cardboard30) ;
ghost3.bounceOff (cardboard31) ;
ghost3.bounceOff (cardboard32) ;
ghost3.bounceOff (cardboard33) ;
ghost3.bounceOff (cardboard34) ;
ghost3.bounceOff (cardboard35) 
ghost3.bounceOff (cardboard36) 
ghost3.bounceOff (cardboard37) 


ghost4.bounceOff (cardboard1) ;
ghost4.bounceOff (cardboard2);
ghost4.bounceOff (cardboard3) ;
ghost4.bounceOff (cardboard4) ;
ghost4.bounceOff (cardboard5) ;
ghost4.bounceOff (cardboard6) ;
ghost4.bounceOff (cardboard7) ;
ghost4.bounceOff (cardboard8) ;
ghost4.bounceOff (cardboard9) ;
ghost4.bounceOff (cardboard10) ;
ghost4.bounceOff (cardboard11) ;
ghost4.bounceOff (cardboard12) ;
ghost4.bounceOff (cardboard13) ;
ghost4.bounceOff (cardboard14) ;
ghost4.bounceOff (cardboard15) ;
ghost4.bounceOff (cardboard16);
ghost4.bounceOff (cardboard17) ;
ghost4.bounceOff (cardboard18) ;
ghost4.bounceOff (cardboard19) ;
ghost4.bounceOff (cardboard20) ;
ghost4.bounceOff (cardboard21) ;
ghost4.bounceOff (cardboard22) ;
ghost4.bounceOff (cardboard23);
ghost4.bounceOff (cardboard24) ;
ghost4.bounceOff(cardboard25);
ghost4.bounceOff (cardboard26)
ghost4.bounceOff (cardboard27) 
ghost4.bounceOff (cardboard28) 
ghost4.bounceOff (cardboard29) 
ghost4.bounceOff (cardboard30) ;
ghost4.bounceOff (cardboard31) ;
ghost4.bounceOff (cardboard32) ;
ghost4.bounceOff (cardboard33) ;
ghost4.bounceOff (cardboard34) ;
ghost4.bounceOff (cardboard35) 
ghost4.bounceOff (cardboard36) 
ghost4.bounceOff (cardboard37) 

if(wolf.isTouching(pelet)){
    pelet.visible = false
}

    drawSprites()
}
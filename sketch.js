var canvas,bg;
var tom,tomImg,tomImg2,tomImg3;
var jerry,jerryImg,jerryImg2,jerryImg3;


function preload() {
bg = loadImage("images/garden.png")
tomImg = loadAnimation("images/cat1.png")
tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
tomImg3 = loadAnimation("images/cat4.png")
jerryImg = loadAnimation("images/mouse1.png");
jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
jerryImg3 = loadAnimation("images/mouse4.png");


    //load the images here

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg);
    jerry.scale = 0.15;



    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //checking weather tom and jerry collide or not
    

    
 if(tom.x - jerry.x<(tom.width - jerry.width)/2){
     
    tom.velocityX = 0;
    tom.addAnimtion("tomLastImage",tomImg3);
    tom.x = 300;
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage",jerryImg3);
    jerry.scale = 0.15;
    jerry.changeAnimation("jerryLastImage");



    




 }    
    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing")


}

 


}

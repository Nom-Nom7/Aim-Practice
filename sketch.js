var player, target;
//var target2, target3, target4, target5;
//var bullet;
var taregetimg, bulletimg;

function preload(){
  targetimg = loadImage("Circle.png");
  bulletimg = loadImage("Bullet.png");
}

function setup() {
  createCanvas(1200,800);

  targetGroup = new Group();


  //bullet = createSprite(mouseX,mouseY,10,10);
  //bullet.addImage(bulletimg);
  //bullet.scale = 0.1;
  
}

function draw() {
  background("cyan"); 
  
  spawnTargets();

  drawSprites();
}

function spawnTargets() {
  //write code here to spawn the clouds
  if (frameCount % 15 === 0) {
    target = createSprite(Math.round(random(100,1100)),Math.round(random(200,600)),10,10);
    target.addImage(targetimg);
    target.scale = 0.08;
    
     //assign lifetime to the variable
    target.lifetime = 50;
    
    //add each cloud to the group
    targetGroup.add(target);
  }
  
}
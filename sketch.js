
var bullet,wall;

function setup(){
    createCanvas(800,400);
wall=createSprite(790, 200, 15, 150);
bullet=createSprite(450,200,30,20);
wall.shapeColor="green";
bullet.shapeColor="black";
bullet.debug=true;
wall.debug=true;
}
function draw(){
 background(255,255,255); 
 bullet.velocityX=4;
 if(wall.isTouching(bullet)){
     wall.shapeColor="red";
     bullet.velocityX=0;
 }else{
bullet.shapeColor='black';
}
drawSprites();
}
function isTouching(){
    if (wall.x-bullet.x<car.width/2+wall.width/2){
    return true;
}else {
    return false;
}
}
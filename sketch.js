const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1,ground1;
var mango1,mango2,mango3,mango4,mango5;
var boy1;
var slingshot1;
function preload() {
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree1=new Tree(1000,370,100,100);
ground1=new Ground(800,690,1600,20) 
mango1=new Mango(720,235,50);
mango2=new Mango(840,260,50);
mango3=new Mango(890,320,50);
mango4=new Mango(1080,220,50);
mango5=new Mango(910,205,50);
//boy1=new Boy(350,450,300,300);
stone1=new Stone(240,380,40);
slingshot1=new Slingshot(stone1.body,{x:240,y:380});
//	Engine.run(engine);
  
}


function draw() {
  
  background("grey");

  Engine.update(engine);

  rectMode(CENTER);
  image(boy, 150, 250, 500, 500);
  tree1.display();
  ground1.display();
  //boy1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  keyPressed();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  
 // mango1.addPic();
  //mango2.addPic();
 // mango3.addPic();
//  mango4.addPic();
 // mango5.addPic();
 // boy1.addPic();
 // stone1.addPic();
  slingshot1.display();
  drawSprites();
  fill ("red");
  text (mouseX + " " + mouseY,mouseX,mouseY);
 
}


function keyPressed(){
	if(keyCode === 32) {
    slingshot1.attach(stone1.body);
	Matter.Body.setPosition(stone1.body,{x :240,y:400});
	
	}

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot1.fly();
}

function detectcollision(lstone,lmango)
{
	stoneBodyPosition=lstone.body.position;
	mangoBodyPosition=lmango.body.position;
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,	mangoBodyPosition.x, mangoBodyPosition.y);
	console.log(' dist:' + distance + ' rad:' + -lmango.radius+lstone.radius);
	if(distance <= lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body,false);
	}
}
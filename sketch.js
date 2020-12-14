
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy;
var slingshot;

function preload()
{
boy	= loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(800,350);
	ground= new Ground(500,height,1000,40)
	stone= new Stone(200,200,40);
	mango1= new Mango(750,160,40);
	mango2= new Mango(800,60,40);
	mango3= new Mango(870,150,40);
	mango4=new Mango(880,250,40);
	mango5=new Mango(740,260,40);
	mango6=new Mango(810,210,40);
	slingshot=new SlingShot(stone.body,{x:220,y:320});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(119, 214, 229));

  image(boy,180,250,200,300);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();

  textSize(20);
  fill("black")
  stroke("red")
  strokeWeight(3);
  text( "Press Space To Reset",50,30);

}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	slingshot.fly();
  
  
	}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stone.r){
Matter.Body.setStatic(mango.body,false);	
}
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:235,y:420})
slingshot.attach(stone.body);

}

}



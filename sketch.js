const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj;
var paper1;

var dustbin1, dustbin2, dustbin3;

function preload() {
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 740);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbinObj = new Dustbin(1300,722,220.25,20);
	dustbin1 = new Dustbin(1380,633,20,160);
	dustbin2 = new Dustbin(1220,633,20,160);
	
	
	paper1 = new Paper(100,642,70);
     
	ground = new Ground(800,730,1600,20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
 
  imageMode(CENTER);
  image(dustbinImg,1300,620,200,200);
 
  
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150, y:-200})
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var ball;
var box;



function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600, 600, 1200, 20);
	ball = new Ball(100, 100, 40, 40);
	sling = new Slingshot(ball.body, { x: 500, y: 50 });

	box1 = new Box(900, 100, 70, 70);
	box2 = new Box(900, 100, 70, 70);
	box3 = new Box(900, 100, 70, 70);
	box4 = new Box(900, 100, 70, 70);
	box5 = new Box(900, 100, 70, 70);
	box6 = new Box(900, 100, 70, 70);
	box7 = new Box(800, 100, 70, 70);
	box8 = new Box(800, 100, 70, 70);
	box9 = new Box(800, 100, 70, 70);
	box10 = new Box(800, 100, 70, 70);
	box11 = new Box(800, 100, 70, 70);
	box12 = new Box(800, 100, 70, 70);
	box13 = new Box(700, 100, 70, 70);
	box14 = new Box(700, 100, 70, 70);
	box15 = new Box(700, 100, 70, 70);
	box16 = new Box(700, 100, 70, 70);
	box17 = new Box(700, 100, 70, 70);
	box18 = new Box(700, 100, 70, 70);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(0);

	ground.display();
	ball.display();
	sling.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box12.display();


  drawSprites();
 
}

function mouseDragged() {

	Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
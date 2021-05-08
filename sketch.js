
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bar;
var string1,string2,string3,string4,string5;

var options={
	isStatic : false,
	restitution : 0.3,
	friction : 0.5,
	density : 1.2,
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bar = new Bar(400,100,600,20);

	bob1 = new Bobs(400,300,20);
	bob2 = new Bobs(500,300,20);
	bob3 = new Bobs(600,300,20);
	bob4 = new Bobs(700,300,20);
	bob5 = new Bobs(800,300,20);

	string1 = new String(bob3.body,bar.body,0,0);
	string2 = new String(bob2.body,bar.body,-100,0);
	string3 = new String(bob4.body,bar.body,100,0);
	string4 = new String(bob1.body,bar.body,-200,0);
	string5 = new String(bob5.body,bar.body,+200,0);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bar.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}




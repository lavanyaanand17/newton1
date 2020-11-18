const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof1=new roof(500,100,200,20)
	//Create the Bodies Here.
	bob1= new bob(200,250,20)
	bob2= new bob(210,255,20)
	bob3= new bob(220,260,20)
	bob4= new bob(230,265,20)
	bob5= new bob(240,270,20)
	rope1= new rope(bob1.body,roof1.body,0,0)
	rope2= new rope(bob2.body,roof1.body,0,0)
	rope3= new rope(bob3.body,roof1.body,0,0)
	rope4= new rope(bob4.body,roof1.body,0,0)
	rope5= new rope(bob5.body,roof1.body,0,0)
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white"); 
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
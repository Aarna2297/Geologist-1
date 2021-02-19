
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  hammer= new Hammer(200,200,50,100)
  ground=new Ground(600,height,1200,20)
  stone= new Stone(250,200,50,50,25)
  rubber=new Rubber(310,200,50,50)
  sand=new Sand(400,400,5)
  sand1=new Sand(410,400,5)
  sand2=new Sand(420,400,5)
  sand3=new Sand(430,400,5)
  sand4=new Sand(440,400,5)
  sand5=new Sand(450,400,5)
  sand6=new Sand(460,400,5)
  sand7=new Sand(470,400,5)
  sand8=new Sand(480,400,5)
  sand9=new Sand(490,400,5)
  sand10=new Sand(500,400,5)
  sand11=new Sand(405,400,5)
  sand12=new Sand(510,400,5)
  sand13=new Sand(520,400,5)
  sand14=new Sand(530,400,5)
  sand15=new Sand(540,400,5)
  sand16=new Sand(550,400,5)
  sand17=new Sand(560,400,5)
  sand18=new Sand(570,400,5)
  sand19=new Sand(580,400,5)
  iron=new Iron(300,400.20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 hammer.display();
 ground.display();
 stone.display();
 rubber.display();
 sand.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
 sand9.display();
 sand10.display();
 sand11.display();
 sand12.display();
 sand13.display();
 sand14.display();
 sand15.display();
 sand16.display();
 sand17.display();
 sand18.display();
 sand19.display();
 iron.display();

}




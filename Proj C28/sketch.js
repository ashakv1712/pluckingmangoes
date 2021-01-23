
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, boy, stone, m1, m2, m3;
var launcher;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, 600, width, 20);
	tree = new Tree(1050, 340);
	stone = new Stone(140, 420, 30);
	m1 = new Mango(1100, 150, 50);
	m2 = new Mango(1170, 200, 50);
	m3 = new Mango(1000, 160, 50);

	launcher = new Launcher(stone.body, { x: 140, y: 420 });
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);

	ground.display();
	tree.display();
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	image(boy, 200, 500, 200, 300);

	launcher.display();

	detectCollision(stone, m1);
	detectCollision(stone, m2);
	detectCollision(stone, m3);

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}

function detectCollision(lstone, lmango) {
	mangobody = lmango.body.position;
	stonebody = lstone.body.position;

	var distance = dist(stonebody.x, stonebody.y, mangobody.x, mangobody.y);

	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 140, y: 420 });
		launcher.attach(stone.body);
	}
}

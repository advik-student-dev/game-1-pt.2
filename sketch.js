const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var npc1, npc2, npc3, npc4, npc5, npc6;
var lonely_pc, lonely_img;
var happy_guy, happy_guy_img;
var npcGroup;
function preload() {
	lonely_img = loadImage("lonely.jpg");
	happy_guy_img = loadImage("happy stick.png");
}

function setup() {
	createCanvas(8000, 700);


	engine = Engine.create();
	world = engine.world;
	lonely_pc = createSprite(100, 600, 50, 50);
	lonely_pc.addImage(lonely_img);
	lonely_pc.scale = 0.05;
	happy_guy = createSprite(7900, 600, 50, 50);
	happy_guy.addImage(happy_guy_img);
	happy_guy.scale = 0.2;

	npcGroup = new Group();

	for (var npc = 300; npc < 7850; npc += 50) {
		npc1 = new npcClass(npc, random(400, 600));
	}




	Engine.run(engine);

}

function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(255, 255, 255);

	if (keyDown("SPACE")) {
		lonely_pc.x += 5;
	}

	if (npcGroup.isTouching(lonely_pc)) {
		console.log("bye");
		npcGroup.bounceOff(lonely_pc);
	}

	npc1.display();
	drawSprites();

}





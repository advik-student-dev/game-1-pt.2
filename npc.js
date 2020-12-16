class npcClass {
    constructor(x, y) {
        this.npc = createSprite(x, y, 50, 50);
        this.image = loadImage("neutral.png");
        this.npc.addImage(this.image);
        this.npc.scale = 0.15;
        npcGroup.add(this.npc);


    }

    display() {
        drawSprites();
    }

}

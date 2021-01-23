class Tree {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        // this.w = w;
        // this.h = h;

        this.image = loadImage("images/tree.png");
        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, this.x, this.y, 450, 500);
    }
}
class Box {
    constructor(x, y, w, h) {
        const options = {
            restitution : 0.5
        }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body);
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        fill(255);
        imageMode(CENTER);
        image(boxImg, 0,0, this.w, this.h);
        pop();
    }
}
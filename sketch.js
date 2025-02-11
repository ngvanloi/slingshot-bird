const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let boxes = [];
let bird;
let world;
let engine;
let mConstraint;
let slingshot;

let birdImg;
let boxImg;
let bkgImg;

function preload() {
    birdImg = loadImage("images/bird.png");
    boxImg = loadImage("images/box.png");
    bkgImg = loadImage('images/skyBackground.png');
}

function setup() {
    let canvas = createCanvas(1500, 600);
    const x = (windowWidth - width) / 2;
    canvas.position(x, 0);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width / 2, height - 10, width, 20);

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 1 + row; col++) {
            let x = 1000 + col * 100;
            let y = 550 - row * 100;
            boxes.push(new Box(x, y, 100, 100));
        }
    }
    bird = new Bird(300, 450, 25);
    slingshot = new SlingShot(300, 450, bird.body);
    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse: mouse
    }
    // A fix for HiDPI displays
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}

function keyPressed() {
    if (key == ' ') {
        World.remove(world, bird.body);
        bird = new Bird(300, 450, 25);
        slingshot.attach(bird.body);
    }
}

function mouseReleased() {
    setTimeout(() => {
        slingshot.fly();
    }, 100)
}

function draw() {
    background(bkgImg);
    Engine.update(engine);

    ground.show();
    for (let box of boxes) {
        box.show();
    }
    bird.show();
    slingshot.show();

    displayRestartMessage();
}

function displayRestartMessage() {
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Press SPACE to Resume", width - 150, 20);
}
let obj;
let morris0, morris1, morris3, morris4, morris5, morris6, morris7;

let images;
let index = 0;

let two;

function preload() {

    obj = loadModel("crane.obj");
    morris0 = loadImage("images/morris0.jpg");
    morris1 = loadImage("images/morris1.jpg");
    morris2 = loadImage("images/morris2.jpg");
    morris3 = loadImage("images/morris3.jpg");
    morris4 = loadImage("images/morris4.jpg");
    morris5 = loadImage("images/morris5.jpg");
    morris6 = loadImage("images/morris6.jpg");
    morris7 = loadImage("images/morris7.jpg");

    images = [morris0, morris1, morris3, morris4, morris5, morris6, morris7];
}

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);
    two = createGraphics(windowWidth, windowWidth);
    two.pixelDensity(1);

    draw2d();
}

function draw() {

    draw3d();
}

function mousePressed() {

    index++;

    if (index == images.length) {
        index = 0;
    }
    draw2d();
}

function draw2d() {

    two.push();
    two.background(250);
    colorMode(HSB, 100);

    two.noStroke();

    for (let i = 0; i < 500; i++) {

        let col = color(random(100), random(40), 100);
        let xPos = random(width);
        let yPos = random(width);

        two.fill(col)
        two.ellipse(xPos, yPos, random(100, 200));
    }
    two.pop();
}

function draw3d() {

    background(255);

    drawBackground();

    drawCrane(0);
    drawCrane(180);
}

function drawBackground() {

    push();
    angleMode(DEGREES);
    noStroke();
    texture(images[index]);
    translate(-width/2, -width/2, -500);
    plane(width, width);
    translate(width, 0, 0);
    rotateY(180)
    plane(width, width);
    translate(0, width, 0);
    rotateX(180)
    plane(width, width);
    translate(width, 0, 0);
    rotateY(180)
    plane(width, width);
    angleMode(RADIANS);
    pop();
}

function drawCrane(delay) {

    push();
    rotateX(90);
    rotateY(90);
    s = 0.01;
    rotateZ(frameCount * s + delay);
    rotateY(frameCount * s);
    rotateX(frameCount * s);
    translate(100, 100, 0);
    scale(height * 0.25);
    noStroke();
    texture(images[index]);
    model(obj);
    pop();
}

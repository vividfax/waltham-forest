let crane;
let morris0, morris1, morris3, morris4, morris5, morris6, morris7;
let assemblage, busstop;

let images;
let index = 0;

let two;

function preload() {

    crane = loadModel("crane.obj");
    morris0 = loadImage("images/morris0.jpg");
    morris1 = loadImage("images/morris1.jpg");
    morris2 = loadImage("images/morris2.jpg");
    morris3 = loadImage("images/morris3.jpg");
    morris4 = loadImage("images/morris4.jpg");
    morris5 = loadImage("images/morris5.jpg");
    morris6 = loadImage("images/morris6.jpg");
    morris7 = loadImage("images/morris7.jpg");

    images = [morris0, morris1, morris3, morris4, morris5, morris6, morris7];

    assemblage = loadImage("images/assemblage.png");
    busstop = loadImage("images/busstop.png");
}

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);
    two = createGraphics(windowWidth, windowWidth);
    two.pixelDensity(1);

    draw2d();

    controls();
}

function draw() {

    draw3d();
    checkHover();
}

function keyPressed() {

    if (key === "q" || key === "Q") {
        change();
    } else if (key === "w" || key === "W") {
        change();
    } else if (key === "e" || key === "E") {
        change();
    } else if (key === "r" || key === "R") {
        change();
    } else if (key === "t" || key === "T") {
        change();
    } else if (key === "y" || key === "Y") {
        change();
    }
}

function controls() {

    select("#btn1").mousePressed(change);
    select("#btn2").mousePressed(change);
    select("#btn3").mousePressed(change);
    select("#btn4").mousePressed(change);
    select("#btn5").mousePressed(change);
    select("#btn6").mousePressed(change);
}

function change() {

    index++;

    if (index == images.length) {
        index = 0;
    }
    draw2d();
}

function draw2d() {

}

function draw3d() {

    background(0);
	ambientLight(255);

    drawBackground();

    drawCrane(0);
    drawCrane(180);
    drawSphere(180, 0.1, 200);
    drawSphere(90, 0.15, 100);
    drawSphere(110, 0.2, 300);
    drawSphere(210, 0.25, 50);
    drawSphere(70, 0.3, 250);
}

function drawBackground() {

    push();
    angleMode(DEGREES);
    noStroke();
    texture(images[index]);
    translate(-height/2, -height/2, -500);
    plane(height, height);
    translate(height, 0, 0);
    rotateY(180)
    plane(height, height);
    translate(0, height, 0);
    rotateX(180)
    plane(height, height);
    translate(height, 0, 0);
    rotateY(180)
    plane(height, height);
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
    model(crane);
    pop();
}

function drawSphere(delay, size, distance) {

    push();
    rotateX(90);
    rotateY(90);
    s = 0.01;
    rotateZ(frameCount * s + delay);
    rotateY(frameCount * s + delay);
    rotateX(frameCount * s + delay);
    translate(distance, distance, 0);
    scale(height * 0.25);
    noStroke();
    texture(images[index]);
    sphere(size);
    pop();
}

function checkHover() {

    if (mouseX > (width-height) / 2 && mouseX < (width-height)/2 + height) {
        select("#button-holder").show();
    } else {
        select("#button-holder").hide();
    }
}

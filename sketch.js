let two1, two2;

let flickCache;
let flickCache2;

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);
    two1 = createGraphics(windowHeight, windowHeight);
    two1.pixelDensity(1);
    two2 = createGraphics(windowHeight, windowHeight);
    two2.pixelDensity(1);

    draw2d();

    controls();

    street.loop = true;
    pencil.loop = true;
}

function draw() {

    draw3d();
    checkHover();
}

function keyPressed() {

    if (key === "q" || key === "Q") {
        change(0);
    } else if (key === "w" || key === "W") {
        change(1);
    } else if (key === "e" || key === "E") {
        change(2);
    } else if (key === "r" || key === "R") {
        change(3);
    } else if (key === "t" || key === "T") {
        change(4);
    } else if (key === "y" || key === "Y") {
        change(5);
    }
}

function controls() {

    select("#btn1").mousePressed(() => change(0));
    select("#btn2").mousePressed(() => change(1));
    select("#btn3").mousePressed(() => change(2));
    select("#btn4").mousePressed(() => change(3));
    select("#btn5").mousePressed(() => change(4));
    select("#btn6").mousePressed(() => change(5));
}

function change(n) {

    index[n]++;

    if (index[n] == layer[n].length) {
        index[n] = 0;
    }
    draw2d();

    street.play();
    pencil.play();
    playFlick();
}

function draw2d() {

    two1.image(layer[1][index[1]], 0, 0, two1.width, two1.width);
    two1.image(layer[2][index[2]], 0, 0, two1.width, two1.width);
    two1.image(layer[3][index[3]], 0, 0, two1.width, two1.width);
    two1.image(layer[4][index[4]], 0, 0, two1.width, two1.width);
    two1.image(layer[5][index[5]], 0, 0, two1.width, two1.width);
    two1.background(255, 255, 255, 50);

    two2.image(layer[1][index[1]], 0, 0, two2.width, two2.width);
    two2.image(layer[2][index[2]], 0, 0, two2.width, two2.width);
    two2.image(layer[3][index[3]], 0, 0, two2.width, two2.width);
    two2.image(layer[4][index[4]], 0, 0, two2.width, two2.width);
    two2.image(layer[5][index[5]], 0, 0, two2.width, two2.width);
    two2.background(255, 255, 255, 50);
    two2.image(layer[0][index[0]], 0, 0, two2.width, two2.width);
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
    texture(two2);
    translate(-height/2, -height/2, -height);
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
    texture(two1);
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
    texture(two1);
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

function playFlick() {

    let flick;

    do {
        flick = int(random(5));
    } while (flick == flickCache || flick == flickCache2);

    flicks[flick].play();

    flickCache2 = flickCache;
    flickCache = flick;
}

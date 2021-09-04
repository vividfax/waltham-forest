let crane;

let street;
let flicks = [];

let layer = [];

let index = [0, 0, 0, 0, 0, 0];

function preload() {

    crane = loadModel("crane.obj");

    street = new Audio("sounds/street.ogg");

    for (let i = 0; i < 5; i++) {
        flicks[i] = new Audio("sounds/flick" + i + ".wav");
    }

    i1a = loadImage("images/1a.png");
    i2a = loadImage("images/2a.png");
    i2b = loadImage("images/2b.png");
    i3a = loadImage("images/3a.png");
    i4a = loadImage("images/4a.png");
    i5a = loadImage("images/5a.png");
    i5b = loadImage("images/5b.png");
    i6a = loadImage("images/6a.png");
    i6b = loadImage("images/6b.png");

    layer[0] = [i1a];
    layer[1] = [i2a, i2b];
    layer[2] = [i3a];
    layer[3] = [i4a];
    layer[4] = [i5a, i5b];
    layer[5] = [i6a, i6b];
}

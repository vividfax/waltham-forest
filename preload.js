let crane;

let street;
let pencil;
let flicks = [];

let layer = [[],[],[],[],[],[]];

let index = [0, 0, 0, 0, 0, 0];

function preload() {

    crane = loadModel("crane.obj");

    street = new Audio("sounds/street.ogg");
    pencil = new Audio("sounds/pencil.ogg");

    for (let i = 0; i < 5; i++) {
        flicks[i] = new Audio("sounds/flick" + i + ".wav");
    }
    layer[0].push(loadImage("images/1a.png"));
    layer[1].push(loadImage("images/2a.png"));
    layer[1].push(loadImage("images/2b.png"));
    layer[2].push(loadImage("images/3a.png"));
    layer[3].push(loadImage("images/4a.png"));
    layer[4].push(loadImage("images/5a.png"));
    layer[4].push(loadImage("images/5b.png"));
    layer[5].push(loadImage("images/6a.png"));
    layer[5].push(loadImage("images/6b.png"));
}

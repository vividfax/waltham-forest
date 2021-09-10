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
    layer[1].push(loadImage("images/2c.png"));
    layer[1].push(loadImage("images/2d.png"));
    layer[1].push(loadImage("images/2e.png"));
    layer[1].push(loadImage("images/2f.png"));
    layer[1].push(loadImage("images/2g.png"));
    layer[1].push(loadImage("images/2h.png"));
    layer[1].push(loadImage("images/2i.png"));
    layer[1].push(loadImage("images/2j.png"));
    layer[2].push(loadImage("images/3a.png"));
    layer[2].push(loadImage("images/3b.png"));
    layer[2].push(loadImage("images/3c.png"));
    layer[2].push(loadImage("images/3d.png"));
    layer[3].push(loadImage("images/4a.png"));
    layer[4].push(loadImage("images/5a.png"));
    layer[4].push(loadImage("images/5b.png"));
    layer[4].push(loadImage("images/5c.png"));
    layer[4].push(loadImage("images/5d.png"));
    layer[4].push(loadImage("images/5e.png"));
    layer[5].push(loadImage("images/6a.png"));
    layer[5].push(loadImage("images/6b.png"));
    layer[5].push(loadImage("images/6c.png"));
    layer[5].push(loadImage("images/6d.png"));
    layer[5].push(loadImage("images/6e.png"));
}

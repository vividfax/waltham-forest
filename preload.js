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
    layer[0].push(loadImage("images/1b.png"));
    layer[0].push(loadImage("images/1c.png"));
    layer[0].push(loadImage("images/1d.png"));
    layer[0].push(loadImage("images/1e.png"));
    layer[0].push(loadImage("images/1f.png"));
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
    layer[1].push(loadImage("images/2k.png"));
    layer[2].push(loadImage("images/3a.png"));
    layer[2].push(loadImage("images/3b.png"));
    layer[2].push(loadImage("images/3c.png"));
    layer[2].push(loadImage("images/3d.png"));
    layer[2].push(loadImage("images/3e.png"));
    layer[2].push(loadImage("images/3f.png"));
    layer[2].push(loadImage("images/3g.png"));
    layer[3].push(loadImage("images/4a.png"));
    layer[3].push(loadImage("images/4b.png"));
    layer[3].push(loadImage("images/4c.png"));
    layer[3].push(loadImage("images/4d.png"));
    layer[3].push(loadImage("images/4e.png"));
    layer[3].push(loadImage("images/4f.png"));
    layer[3].push(loadImage("images/4g.png"));
    layer[4].push(loadImage("images/5a.png"));
    layer[4].push(loadImage("images/5b.png"));
    layer[4].push(loadImage("images/5c.png"));
    layer[4].push(loadImage("images/5d.png"));
    layer[4].push(loadImage("images/5e.png"));
    layer[4].push(loadImage("images/5f.png"));
    layer[4].push(loadImage("images/5g.png"));
    layer[5].push(loadImage("images/6a.png"));
}

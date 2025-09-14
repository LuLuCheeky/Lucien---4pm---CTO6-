let soundEffect;
let bgMusic;
let staticImage;
let x = 400 / 2;
let y = 600 / 2;
console.log(x, y);


function preload(){
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png");
}

function setup(){
    createCanvas(600, 400);
    bgMusic.loop(); 
}

function draw(){
    background(220);
    image(staticImage, x, y, 50, 50);

    x = constrain(x, 30, width - 30);
    y = constrain(y, 30, height - 30);

    if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 5;
    }
    if(keyIsDown(UP_ARROW)){
        y -= 5;
    }
    if(keyIsDown(DOWN_ARROW)){
        y += 5;
    }
}

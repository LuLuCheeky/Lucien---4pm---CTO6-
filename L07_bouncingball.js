let soundEffect;
let bgMusic;
let staticImage;

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
    image(staticImage, 0, 0, width, height);
}
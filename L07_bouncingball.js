let soundEffect;
let bgMusic;
let staticImage;
let x = width / 2;
let y = height / 2;


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
    image(staticImage, 0, 0, 50, 50);
    if(keyIsDown(LEFT_ARROW)){

    }
}

function keyPressed(){
    if(key === 32){
        soundEffect.play();  
    }
}
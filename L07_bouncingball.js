let soundEffect;
let bgMusic;
let staticImage;
let x = 300 / 2;
let y = 200 / 2;
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
    if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
}

function keyPressed(){
    if(key === 32){
        soundEffect.play();  
    }
}
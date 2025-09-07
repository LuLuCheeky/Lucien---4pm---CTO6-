let shapeColour ='blue';
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if(key === "DOWN_ARROW"){
        
        circle(width / 2, height / 2, 100);
    }
}


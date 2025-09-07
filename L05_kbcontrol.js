let shapeColour ='blue';
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if(key === "DOWN_ARROW"){
        shapeColour = 'red';
    }
    if(key === "UP_ARROW"){
        shapeColour = 'black';
    }
}


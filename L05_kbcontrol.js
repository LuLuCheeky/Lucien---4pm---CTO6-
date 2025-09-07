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
        circle(width / 2, height / 2, 100);
    }
    else if(key === "UP_ARROW"){
        shapeColour = 'blue';
        square(width / 2 - 50, height / 2 - 50, 100);
    }
}


let shapeColour ='blue';
function setup(){
    createCanvas(600, 400);
    background(220);
    noStroke();
}


function draw(){
    background(220);

    if (key === "w"){
        shapeColour = 'red';
    }
}


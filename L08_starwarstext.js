let favouriteFood = ["poop", "snot", "boogers", "earwax", "toe jam"];
function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    textsize(20);
    textAlign(LEFT);
    text("My favourite foods are:", 20, 30);
    for (let i = 0; i < favouriteFood.length; i++) {
        text(favouriteFood[i], 20, 60 + i * 30);
    }
}
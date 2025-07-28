let colourvalue = 0;
let spacing = 50;

function setup() {
    createCanvas(600, 400);
    background(220);
    //noLoop(); // Stops continuous drawing
  }
function draw() {
  for (let i = 0; 1 < 8; i++){
    if (i % 2 === 0) {
      fill (0);
    }
    if (i % 2 === 1) {
      fill(255);
    }
    circle (50 + i * spacing, 200, 40);
    
  }
}
function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  for (let i = 1; i < 11; i++) {
    circle()
  }
}
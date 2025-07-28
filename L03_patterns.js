let colourvalue = 0;

function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
function draw() {
  let spacing = 50;

  for (let i = 0; i < 5; i++) {
    fill(150 + i * 15, 150 + i * 15, 150 + i * 25);
    circle(spacing + i * spacing, 100, 40)
  }
}
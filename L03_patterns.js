let colourvalue = 0;

function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
function draw() {
  let spacing = 50;

  for (let i = 0; i < 5; i++) {
    fill(colourvalue%255);
    circle(spacing + i * spacing, 100, 40)
    colourvalue += 1;
  }
}
//let colourvalue = 0;
let spacing = 50;

function setup() {
    createCanvas(600, 400);
    background(220);
    //noLoop(); // Stops continuous drawing
  }

function draw() {

  // for (let i = 0; i<5; i++) {
  //       // fill(i*spacing);
  //       //fill(colorValue%255);
  //       if(i%2 === 0) {
  //           fill(0);
  //       } else {
  //           fill(255);
  //       }
  //       circle(spacing + i*spacing, 200, 40); 
  //       rect(spacing + i*spacing,400, 40, 40);
  //       //colorValue +=1; 
  // }
  fill(0);
  rect(width , 0, width , height);
  fill(255);
  circle(width / 2, height / 2, 100);
  
}
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
  // fill(255);
  // rect(0 , 50, width, height - 100);
  // fill(255);
  // circle(width / 2, height / 2, 100);
  // let circleDiameter = 50;
  // let numCircles = 5;
  // let totalWidth = numCircles * circleDiameter
  // let startX = (width - totalWidth) / 2;
  // for (let i = 0; i < numCircles; i++) {
  //   circle(startX + i * circleDiameter, height / 2, circleDiameter);
  // }

  // let circleDiameter = 50;
  // let numCircles = 5;
  // let totalWidth = numCircles * circleDiameter;
  // let startX = 0 + circleDiameter/2; 
  // for (let i = 0; i < numCircles; i++) {
  //   circle(startX + i * circleDiameter, circleDiameter/2, circleDiameter);
  // }

  let circleDiameter = 50;
  let numCircles = 5;
  let totalWidth = numCircles * circleDiameter;
  let startX = (width - totalWidth) / 2 + circleDiameter / 2;
  let startY = (height - totalWidth) / 2 + circleDiameter / 2;
  for (let row = 0; row <numCircles; row++) {
    let rowY
  }
  
}


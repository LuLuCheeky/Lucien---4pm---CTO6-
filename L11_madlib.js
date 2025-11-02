let box1, box2, box3, box4, box5;

let words = [noun, verb, adjective, adverb, place];


function setup() {
    createCanvas(600,600);

    box1 = createInput();
    box1.position(width / 2 - box1.width / 2, 100);
    box2 = createInput();
    box2.position(width / 2 - box2.width / 2, 140);
    box3 = createInput();
    box3.position(width / 2 - box3.width / 2, 180);
    box4 = createInput();
    box4.position(width / 2 - box4.width / 2, 220);
    box5 = createInput();
    box5.position(width / 2 - box5.width / 2, 260);
}

function draw() {
    background(220);

    for(let i = 0; i < words.length; i++){
        textSize(15);
        text(words[i], 50, 100 + 15 + i * 50);
    }
}